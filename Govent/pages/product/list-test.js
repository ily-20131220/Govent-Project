import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

// 引入icon
import { GoSortDesc } from 'react-icons/go'
import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'
//愛心
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'

//引入components
import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
import FavIcon from '@/components/layout/list-layout/fav-icon-test'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import Sidebar from '@/components/layout/list-layout/sidebar'

//篩選用components
import FilterBar from '@/components/layout/list-layout/FilterBar'

// 引入活動資料
import EventCard from '@/components/layout/list-layout/event_card'
import useEvents from '@/hooks/use-event'

// 假活動資料
// import event from '@/data/event/event.json'
// console.log(event)

import SearchForm from '@/components/layout/list-layout/search-form'

export default function List() {
  const { data } = useEvents()
  const { router } = useRouter()

  const [events, setEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(15)
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedRegions, setSelectedRegions] = useState([])
  const [searchWord, setSearchWord] = useState('')
  const [filteredEvents, setFilteredEvents] = useState([])

  //增加擴充屬性質(收藏)
  useEffect(() => {
    if (data) {
      const initState = data.map((v, i) => {
        return { ...v, fav: false }
      })
      setEvents(initState)
    }
  }, [data])

  //更新篩選結果
  useEffect(() => {
    const newFilteredEvents = getFilteredEvents()
    setFilteredEvents(newFilteredEvents)
  }, [searchWord, selectedCategories, selectedRegions, events])

  //整合類別、地區、搜尋篩選結果
  const getFilteredEvents = () => {
    return events.filter((event) => {
      const categoryMatch =
        selectedCategories.length === 0 ||
        selectedCategories.includes(event.category_name)
      // const regionMatch =
      //   selectedRegions.length === 0 || selectedRegions.includes(event.str)
      const regionMatch =
        !selectedRegions ||
        selectedRegions.length === 0 ||
        selectedRegions.includes(event.str)

      const searchMatch =
        !searchWord ||
        event.event_name.toLowerCase().includes(searchWord.toLowerCase())
      return categoryMatch && regionMatch && searchMatch
    })
  }

  // 分頁
  const indexOfLastEvent = currentPage * postsPerPage
  const indexOfFirstEvent = indexOfLastEvent - postsPerPage
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent)

  const handleFilterChange = (selectedCategories, selectedRegions) => {
    setSelectedCategories(selectedCategories)
    setSelectedRegions(selectedRegions)
    // 當篩選條件改變時，自動回到第一頁
    setCurrentPage(1)
  }

  // 在這裡計算分頁數據時使用篩選後的數據
  const indexOfLastFilteredEvent = currentPage * postsPerPage
  const indexOfFirstFilteredEvent = indexOfLastFilteredEvent - postsPerPage
  const currentFilteredEvents = filteredEvents.slice(
    indexOfFirstFilteredEvent,
    indexOfLastFilteredEvent
  )

  const handleSearch = (searchWord) => {
    setSearchWord(searchWord)
  }
  // 升降密排序的回调函数
  const handleSortEvents = (sortedEvents) => {
    setFilteredEvents(sortedEvents)
  }
  // 地區排序的回调函数
  const handleCityEvents = (citySortedEvents) => {
    setFilteredEvents(citySortedEvents)
  }
  // 日期排序的回调函数
  const handleDateEvents = (dateSortedEvents) => {
    setFilteredEvents(dateSortedEvents)
  }
  // 價格排序的回调函数
  const handlePriceEvents = (priceSortedEvents) => {
    setFilteredEvents(priceSortedEvents)
  }

  //篩選後引導回首頁
  useEffect(() => {
    // 當篩選條件改變時，自動回到第一頁
    setCurrentPage(1)
  }, [selectedCategories, selectedRegions, searchWord])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      {/* <useEvents> */}
      <nav className="header container navbar-expand mt-5 mb-3 w-1200">
        <h5 className="d-flex justify-content-between">
          <div className="bg-bg-gray-secondary rounded-3">
            <p className="mx-4 my-2">
              目前共有 {filteredEvents?.length} 筆 結果
            </p>
          </div>
         
            <SearchForm
              searchWord={searchWord}
              onSearch={handleSearch} // 正确传递搜索回调函数
            />

            <NavbarTopRwd
              events={events} //傳原始資料至props
              setEvents={setEvents} // 将更新事件列表的函数传递给子组件
              //回調元素
              onSort={handleSortEvents}
              onCity={handleCityEvents}
              onDate={handleDateEvents}
              onPrice={handlePriceEvents}
            />
        </h5>
      </nav>
      <nav className="header-m">
        <NavbarTopRwdSm />
      </nav>
      <main className="container w-1200">
        <div className="row">
          <div className="sidebar me-3 col-md-2 col-3">
            <Sidebar
              events={events} //傳原始資料至props
              onFilterChange={handleFilterChange}
            />
          </div>
          <div className="col">
            <div className="cardList row g-3">
              {/* {currentEvents.map((v) => ( */}
              {filteredEvents
                .slice(indexOfFirstEvent, indexOfLastEvent)
                .map((v) => (
                  <div key={v.id} className="col-md-4 col-sm-6 ">
                    <Link
                      href={`/product/${v.pid}`} //以防混亂，只有路由使用pid引導
                      className=""
                      key={v.id}
                      style={{ textDecoration: 'none' }}
                    >
                      {/* <div onClick={()=>{router.push(``)}} */}
                      <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                        <figure>
                          <img
                            // src={`/images/product/list/${
                            //   v.banner?.split(',')[0]
                            // }`}
                            src={`http://localhost:3005/images/banner/${
                              v.banner?.split(',')[0]
                            }`}
                            alt=""
                            className="card-img-top"
                          />
                          {/* <FavIcon datas={events} setEvents={handleSetEvents} /> */}
                          <FavIcon
                            pid={v.pid}
                            events={events}
                            setEvents={setEvents}
                          />
                        </figure>

                        <div className="card-body">
                          <p className=" text-normal-gray-light">
                            {v.category_name}
                          </p>
                          <h5 className="card-title">{v.event_name}</h5>
                          <div className="">
                            <h6 className="text-primary-deep">
                              ${v.price || 0}起
                            </h6>
                            <div className="d-flex justify-content-between">
                              <p className="text-normal-gray-light mb-2">
                                {v.str}
                              </p>
                              <span className="text-normal-gray-light">
                                {v.start_date.substring(0, 10)}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>

            <footer className="d-flex justify-content-center m-3">
              <div
                className="page_nav btn-toolbar"
                role="toolbar"
                aria-label="Toolbar with button groups"
              >
                <div className="btn-group" role="group" aria-label="group">
                  <button
                    type="button"
                    className="btn btn-normal-gray"
                    aria-label="previous"
                    onClick={() => currentPage > 1 && paginate(currentPage - 1)}
                  >
                    &laquo;
                  </button>

                  {Array.from(
                    //要用篩選後的數輛計算依據events(全)=>newFilteredEvents(篩選結果)
                    {
                      length: Math.ceil(filteredEvents?.length / postsPerPage),
                    },
                    (_, number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number + 1)}
                        className={`btn ${
                          number + 1 === currentPage
                            ? 'btn-primary'
                            : 'btn-secondary text-white'
                        }`}
                      >
                        {number + 1}
                      </button>
                    )
                  )}
                  <button
                    type="button"
                    className="btn btn-normal-gray"
                    aria-label="next"
                    onClick={() =>
                      currentPage <
                        Math.ceil(filteredEvents?.length / postsPerPage) &&
                      paginate(currentPage + 1)
                    }
                  >
                    &raquo;
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </main>
      <NavbarBottomRwdSm />
      {/* </useEvents> */}

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
           {
            /* overflow: hidden; */
          }
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
