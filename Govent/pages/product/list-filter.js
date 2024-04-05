import React, { useEffect, useState } from 'react'

// 引入icon
import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'
import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'

//引入components
import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
// import FavIcon from '@/components/layout/list-layout/fav-icon'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import Sidebar from '@/components/layout/list-layout/sidebar'
import PageBar from '@/components/layout/list-layout/pagebar'

//篩選用components
import FilterBar from '@/components/layout/list-layout/FilterBar'
import EventList from '@/components/layout/list-layout/EventList'
import SearchBar from '@/components/layout/list-layout/SearchBar'
import SortBar from '@/components/layout/list-layout/SortBar'

// 引入活動資料
import EventCard from '@/components/layout/list-layout/event_card'
import useEvents from '@/hooks/use-event'

export default function List() {
  const { data } = useEvents()
  console.log(data)
  // console.log(events);
  // console.log(category);
 
  //活動資料
  // 1. 從伺服器來的原始資料
  const [events, setEvents] = useState([])
  // 2. 用於網頁上經過各種處理(排序、搜尋、過濾)後的資料
  const [displayEvents, setDisplayEvents] = useState([])

  //篩選條件
  // const [category_name] = 'category'
  const [category, setCategory] = useState([])
  const categories = [
    '演唱會',
    '展覽',
    '快閃活動',
    '市集',
    '粉絲見面會',
    '課程講座',
    '體育賽事',
    '景點門票',
  ]
 
  console.log(category);
  
  // radio 價格篩選
  const [priceRange, setPriceRange] = useState('所有')
  const priceRangeTypes = ['所有', '1百以下', '1~2百']

  // const [searchWord, setSearchWord] = useState('')
  const [sortBy, setSortBy] = useState('')

  // 載入指示的spinner動畫用的
  const [isLoading, setIsLoading] = useState(false)
  
  //x秒後自動關掉spinner(設定isLoading為false)
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
  }, [isLoading])

  // 初始化資料-didMount
  useEffect(() => {
    // 先開起載入指示器
    setIsLoading(true)
    // 模擬和伺服器要資料
    // 最後設定到狀態中
    setEvents(data)
    setDisplayEvents(data)
  }, [data])
  // console.log(data);
  // console.log(events);
  // 四個表單元素的處理方法
  // 文字搜尋
  // const handleSearch = (events, searchWord) => {
  //   let newEvents = [...events]
  //   console.log(data)
  //   if (searchWord.length) {
  //     newEvents = events.filter((event) => {
  //       // includes -> String API
  //       return event.name.includes(searchWord)
  //     })
  //   }

  //   return newEvents
  // }
  //大小排序
 
  const handleSort = (events, sortBy) => {
    let newEvents = [...events]

    // 以價格排序-由少至多
    if (sortBy === '1') {
      newEvents = [...newEvents].sort((a, b) => a.price - b.price)
    }

    if (sortBy === '2') {
      newEvents = [...newEvents].sort((a, b) => b.price - a.price)
    }

    // 預設用id 小至大
    if (sortBy === '' && newEvents.length > 0) {
      newEvents = [...newEvents].sort((a, b) => a.id - b.id)
    }
    // console.log(events);
    return newEvents
  }
  // console.log(events);
  // 活動種類篩選
  // console.log(categories)
  const handleCategory = (events, category) => {
    let newEvents = [...events]

    // tags = 代表使用者目前勾選的標籤陣列
    // console.log(categorie)
    console.log(category);
  console.log(event);

    // 處理勾選標記
    if (category.length > 0) {
      newEvents = [...newEvents].filter((event) => {
        let isFound = false
        
        // 原本資料裡的tags字串轉為陣列
        // const eventCategory = event.category.split(',')
        const eventCategory =event.filter(data => data.ca_ !== id)
        console.log(event);
        console.log(category);
        // 用目前使用者勾選的標籤用迴圈找，有找到就回傳true
        for (let i = 0; i < category.length; i++) {
          // includes -> Array api
          if (eventCategory.includes(category[i])) {
            isFound = true // 找到設為true
            break // 找到一個就可以，中斷迴圈
          }
        }

        return isFound
      })
    }
    // console.log(newEvents);
    return newEvents
    console.log(newEvents);
  }

  // console.log(events);
  //價格區間排序
  const handlePriceRange = (events, priceRange) => {
    let newEvents = [...events]
    // console.log(events)

    // 處理價格區間選項
    switch (priceRange) {
      case '1百以下':
        newEvents = events.filter((p) => {
          return p.price <= 100 
        })
        break
      case '1~2百':
        newEvents = events.filter((p) => {
          return p.price >= 100 && p.price <= 200
        })
        break
      // 指所有的產品都出現
      default:
        break
    }

    return newEvents
  }

  // 當四個過濾表單元素有更動時
  // componentDidUpdate + didMount
  // ps. 一開始也會載入
  useEffect(() => {
    // 搜尋字串太少不需要搜尋
    // if (searchWord.length < 3 && searchWord.length !== 0) return

    // 先開起載入指示器
    setIsLoading(true)

    let newEvents = []

    // 處理搜尋
    // newEvents = handleSearch(events, searchWord)

    // 處理排序
    newEvents = handleSort(newEvents, sortBy)

    // 處理勾選標記
    newEvents = handleCategory(newEvents, category)

    // 處理價格區間選項
    newEvents = handlePriceRange(newEvents, priceRange)

    setDisplayEvents(newEvents)
  }, [ events, sortBy, category, priceRange])

  // bootstrap 的spinner
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  return (
    <>
      <useEvents>
        <nav className="header container navbar-expand mt-5 w-1200">
          <h5 className="d-flex justify-content-between">
            <div className="bg-bg-gray-secondary rounded-3">
              <p className="mx-4 my-2">目前共有 {data?.length} 筆 結果</p>
            </div>
            <section>
              <NavbarTopRwd />
            </section>
          </h5>
        </nav>
        <nav className="header-m">
          <NavbarTopRwdSm />
        </nav>
        <main className="container w-1200">
          <div className="row">
            <div className="sidebar me-3 col-md-2 col-3">
              <Sidebar />
              <FilterBar
                priceRangeTypes={priceRangeTypes}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                categories={categories}
                category={category}
                setCategory={setCategory}
              />
            </div>
            <div className="col">
              <div className="cardList row g-3">
                {/* <EventCard /> */}
                {/* <SearchBar
                      searchWord={searchWord}
                      setSearchWord={setSearchWord}
                    /> */}
                    <SortBar sortBy={sortBy} setSortBy={setSortBy} />
                    {isLoading ? (
                      spinner
                    ) : (
                      <EventList Events={displayEvents} />
                    )}
              </div>

              <footer className="d-flex justify-content-center m-3">
                <div
                  className="page_nav btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <PageBar />
                </div>
              </footer>
            </div>
          </div>
        </main>
        <NavbarBottomRwdSm />
      </useEvents>

      <style global jsx>{`
        body {
          background-color: #151515;
          color: #fff;
          border: border-inline;
        }
        .w-1200 {
          max-width: 1200px;
        }
        figure img {
          width: 268px;
          height: 180px;
          overflow: hidden;
          object-fit: cover;
          width: 100%;
        }
        .cardList i {
          background-color: #404040;
          opacity: 0.5;
        }

        .test {
          padding: 0px;
          height: 0px;
          background-color: #151515;
        }
        .test :hover {
          border-bottom: 3px solid #c55708;
        }

        @media screen and (min-width: 575px) {
          .header-m {
            display: none;
          }
          .footer-m {
            display: none;
          }
        }
        @media screen and (max-width: 576px) {
          .header {
            display: none;
          }
          .sidebar {
            display: none;
          }
          .page_nav {
            display: none;
          }
          .cardList {
            margin-bottom: 80px;
          }
        }
      `}</style>
    </>
  )
}
