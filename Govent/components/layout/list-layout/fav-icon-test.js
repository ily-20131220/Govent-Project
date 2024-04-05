import React, { useState, useEffect } from 'react'
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import { useAuth } from '@/hooks/use-auth'
import toast from 'react-hot-toast'
import { useRouter } from 'next/router'
import Modal from 'react-bootstrap/Modal'
import toastStyle from '@/components/user/custom-toastify.module.css'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

import addFavToDatabase from '@/hooks/use-fav'

export default function FavIcon({ pid, events, setEvents }) {
  const [isVisible, setIsVisible] = useState(false)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  //檢查會員身份
  const { auth } = useAuth()
  const uid = auth.user?.id //抓取登入中的id
  // const uid = 10

  //驗證登入狀態
  const router = useRouter()

  //資料庫抓取
  const [favorites, setFavorites] = useState([])

  // useEffect(() => {
  //   if (isVisible && !auth.user) {
  //     toast.error('會員才能使用!')
  //     router.push('/user/signin')
  //     return
  //   }
  // }, [isVisible, auth.user, router])

  useEffect(() => {
    const getFav = async () => {
      // if (!uid) {
      //   toast.error('會員才能使用!')
      //   return
      // }
      try {
        // 發送API請求時包含uid作為參數
        const response = await fetch(`http://localhost:3005/api/Fav?uid=${uid}`)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setFavorites(data.data ? data.data.posts : [])
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    getFav()
  }, [uid])

  //新增會員判定提示
  // useEffect(() => {
  //   if (uid && !isVisible) {
  //     // 只有在用户已登录且 loading 为 false 时才获取收藏数据
  //     const getFav = async () => {
  //       try {
  //         isVisible(true) // 开始加载数据，设置 loading 为 true
  //         const response = await fetch(
  //           `http://localhost:3005/api/Fav?uid=${uid}`
  //         )
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok')
  //         }
  //         const data = await response.json()
  //         setFavorites(data.data ? data.data.posts : [])
  //       } catch (error) {
  //         console.error('Error fetching data:', error)
  //       }
  //     }
  //     getFav()
  //   }
  // }, [uid, isVisible]) // 监听 uid 和 loading 变化

  // console.log(favorites);
  // console.log(uid);

  // 渲染出愛心狀態
  const renderFavoriteIcon = (uid, pid) => {
    if (favorites.some((fav) => fav.uid === uid && fav.pid === pid)) {
      return <i className="bi bi-heart-fill"></i>
    } else {
      return <i className="bi bi-heart"></i>
    }
  }

  const handleAddFav = async (pid, uid) => {
    try {
      // console.log('Adding to favorites:', pid, uid);
      const response = await fetch(
        `http://localhost:3005/api/Fav/${pid}/${uid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pid }),
        }
      )
      if (response.status === 200) {
        // console.log('Successfully added to favorites');
        setFavorites([...favorites, { pid, uid }])
      } else {
        console.error('Failed to add to favorites:', response.statusText)
      }
    } catch (error) {
      console.error('Error adding to favorites:', error)
    }
  }

  const handleRemoveFav = async (pid, uid) => {
    try {
      // console.log('Removing from favorites:', pid, uid);
      const response = await fetch(
        `http://localhost:3005/api/Fav/${pid}/${uid}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ pid }),
        }
      )
      if (response.status === 200) {
        // console.log('Successfully removed from favorites');
        setFavorites(favorites.filter((fav) => fav.pid !== pid))
      } else {
        // console.error('Failed to remove from favorites:', response.statusText);
      }
    } catch (error) {
      // console.error('Error removing from favorites:', error);
    }
  }

  // 檢查是否為該用戶的收藏
  // const isFavorite = favorites.some((fav) => fav.pid === pid)

  //渲染出愛心狀態
  const handleToggleFav = async (event) => {
    // 修改點擊事件處理函數
    event.preventDefault() // 阻止默認行為
    event.stopPropagation() // 阻止事件冒泡
    //點按時新增會員判定提示
    if (!auth.user) {
      toast.error('會員才能使用!')
      // router.push('/user/signin')
      return handleShow()
    }
    try {
      if (favorites.some((fav) => fav.pid === pid)) {
        // 如果已經是收藏狀態，則取消收藏
        await handleRemoveFav(pid, uid)
        setFavorites(favorites.filter((fav) => fav.pid !== pid))
      } else {
        // 如果未收藏，則添加收藏
        await handleAddFav(pid, uid)
        setFavorites([...favorites, { pid, uid }])
      }
    } catch (error) {
      // console.error('Error toggling favorite:', error);
    }
  }

  return (
    <>
      <button
        className={`btn fav-btn text-white`}
        style={{
          position: 'absolute',
          right: 10,
          top: 10,
          height: 30,
          width: 30,
          padding: 0,
          border: 'none',
          background: 'none',
        }}
        onClick={handleToggleFav} // 修改為新的點擊事件處理函數
      >
        {renderFavoriteIcon(uid, pid)} {/* 渲染愛心按鈕的狀態 */}
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className={toastStyle.myToast}>
          <Modal.Title className="text-white">
            請先登入會員才可使用收藏功能
            <p className="text-white mt-2">
              沒有註冊會員?
              <Link href="/user/signup">
                <span className={toastStyle.myToast}> 前往註冊</span>
              </Link>
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer className={`${toastStyle.myToast} border-0`}>
          <Link href="/user/signin">
            <Button variant="primary">已有會員登入</Button>
          </Link>
        </Modal.Footer>
      </Modal>
      <style global jsx>
        {`
          .fav-btn {
            border-radius: 8px;
            background-color: var(--search-bar-color) !important;
          }
        `}
      </style>
    </>
  )
}
