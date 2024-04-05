import React, { useEffect, useState } from 'react'
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from 'react-router-dom'
import Link from 'next/link'

import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'

import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'

import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
// import FavIcon from '@/components/layout/list-layout/fav-icon-test'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import AlwaysOpenExample from '@/components/layout/list-layout/accordion'
import Sidebar from '@/components/layout/list-layout/sidebar'
import PageBar from '@/components/layout/list-layout/pagebar'

// import EventCard from '@/components/layout/list-layout/event_card_test'
// import useEvents from '@/hooks/use-event'
//Json檔案引入（測試用）
import data from '@/data/event.json'

export default function List() {
  // const { data } = useEvents()
  // console.log(data?.data.posts)

   useEffect(() => {
    console.log(data) // 这里可以看到数据
  }, [data])

  //擴充原本的活動資料，多一個fav屬性
  const initState = data.map((v, i) => {
    return { ...v, fav: false }
  })

  //加入收藏前先設定活動狀態。
  const [events, setEvents] = useState(initState)

  //純函式
  const toggleFav = (array, id) => {
    // 展開每個成員，如果條件符合(v.id===id)，反則屬性fav值
    // const newEvents = data.map((v, i) => {
    //   if (v.id === id) return { ...v, fav: !v.fav }
    //   else return v
    // })
    return array.map((v, i) => {
      if (v.id === id) return { ...v, fav: !v.fav }
      else return v
    })
  }
  // const handleToggleFav = (id) => {
  //   //設定回原狀態
  //   setEvents(toggleFav(events, id))
  // }

  // 測試用陣列
  // const aa = [
  //   { id: 'a01', fav: true },
  //   { id: 'a02', fav: 'false' },
  // ]
  // console.log(toggleFav(aa, 'a01'))
  // console.log(toggleFav(aa, 'a02'))

  return (
    <>
      <useEvents>
        <nav className="header container navbar-expand mt-5 w-1200">
          <h5 className="d-flex justify-content-between">
            <div className="bg-bg-gray-secondary rounded-3">
              <p className="mx-4 my-2">目前共有 {} 筆 結果</p>
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
              <hr />
              <div className="downSidebar no-border">
                <h6>地區</h6>
                <div className=" d-none accordion" id="accordionExample">
                  {/* North */}
                  <div className="accordion-item bg-bg-gray text-white">
                    {/* title */}
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          北部地區
                        </label>
                      </button>
                    </h2>

                    {/* selection */}
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            台北市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            新北市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            桃園市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            基隆市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            新竹市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            新竹縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            宜蘭縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* middle */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          中部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            苗栗縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            台中市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            南投縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            彰化縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            雲林縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* South */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          南部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            嘉義縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            嘉義市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            台南市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            高雄市
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            屏東縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* East */}
                  <div className="accordion-item bg-bg-gray text-white">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <input type="checkbox" className="form-check-input" />
                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          東部地區
                        </label>
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            花蓮縣
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckChecked"
                          >
                            台東縣
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <AlwaysOpenExample />
              </div>
            </div>
            <div className="col">
              <div className="cardList row g-3">
                {/* <EventCard /> */}
                {/* 列出所有活動 */}
                {data?.data.posts.map((v, i) => {
                  return (
                    <div className="col-md-4 col-sm-6 " key={v.id}>
                      <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                        <figure>
                          <img
                            src={`/images/product/list/${
                              v.image?.split(',')[0]
                            }`}
                            alt=""
                            className="card-img-top"
                          />

                          <button
                            className={`btn position-absolute top-0 end-0 bi ${
                              v.fav ? 'bi-heart' : 'bi-heart-fill'
                            }`}
                            onClick={() => {
                              // handleToggleFav(v.id)
                              const newEvents = toggleFav(events, v.id)
                              setEvents(newEvents)
                            }}
                          >
                            {/* <i
                            style={{ opacity: 0.8 }}
                            className="px-2 py-1 rounded-3 bi bi-heart-fill fs-5"
                          ></i> */}
                          </button>
                        </figure>

                        <div className="card-body p-">
                          <p className=" text-normal-gray-light">
                            {v.event_type_id}
                          </p>
                          <h5 className="card-title">{v.event_name}</h5>
                          <h6 className="text-primary-deep">$1200起</h6>
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
                  )
                })}
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
