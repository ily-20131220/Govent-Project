import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import useEvents from '@/hooks/use-event'
import TestPorps from '@/components/layout/list-layout/test'
import toast from 'react-hot-toast'

export default function Test() {
  //装取数据设置状态
  const { data } = useEvents()
  const [events, setEvents] = useState([])

  useEffect(() => {
    if (data) {
      const initState = data.map((v, i) => {
        return { ...v, fav: false }
      })
      setEvents(initState)
    }
  }, [data])

  console.log(events)

  // 定义一个回调函数来接收子组件传递回来的数据
  const handleDataFromChild = (childData) => {
    console.log('Data from child:', childData)
    // 在这里您可以对从子组件传递回来的数据进行处理
    // 例如，将数据存储在状态中以重新渲染父组件
  }

  const handleSetEvents = (newEvents) => {
    setEvents(newEvents)
  }

  //  新增
  const handleAddFav = async (pid) => {
    // const res = await (pid)
    // if (res.data.status === 'success') {
    //   // 伺服器成功後，更新context中favorites的狀態，頁面上的圖示才會對應更動
    //   handleSetEvents(pid)
    //   toast.success(`商品 id=${pid} 新增成功!`)
    // }

    try {
      const response = await axios.put(`/api/favorites/${pid}`)
      console.log('Response:', response.data)
      // 在這裡處理成功回應，例如更新介面顯示
    } catch (error) {
      console.error('Error adding to favorites:', error)
      // 在這裡處理錯誤，例如顯示錯誤訊息給用戶
    }
  }

  const updateDatabase = (updatedData) => {
    // 发送更新请求到后端
    fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data updated successfully')
        } else {
          console.error('Failed to update data')
        }
      })
      .catch((error) => {
        console.error('Error updating data:', error)
      })
  }

  return (
    <>
      <h1>Hello Govent.</h1>
      <TestPorps
        datas={events}
        onDataFromChild={handleDataFromChild}
        setEvents={handleSetEvents}
      />
    </>
  )
}
