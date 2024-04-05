import { useEffect } from 'react'
import React, { useState } from 'react'

import { CiHeart } from 'react-icons/ci'
import { GoSortDesc } from 'react-icons/go'

// import { TbMap } from 'react-icons/tb'
// import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
// import { CiFilter } from 'react-icons/ci'

import { FaHouse } from 'react-icons/fa6'
import { FaRegStar } from 'react-icons/fa'
import { FaTicket } from 'react-icons/fa6'
import { RxPerson } from 'react-icons/rx'

import MyFooter from '@/components/layout/default-layout/my-footer'
import NavbarBottomRwdSm from '@/components/layout/list-layout/navbar-bottom-sm'
import FavIcon from '@/components/layout/list-layout/fav-icon'
import NavbarTopRwdSm from '@/components/layout/list-layout/navbar-top-sm'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top'
import AlwaysOpenExample from '@/components/layout/list-layout/accordion'

import EventCard from '@/components/layout/list-layout/event_card'
// import useEvents from '@/hooks/use-event'
// import event from '@/data/event/event.json'
// console.log(event)

export default function List() {
  // const { data } = useEvents()
  // console.log(data.data?.posts)
  console.log(data?.data.posts)
  // Toggle the side navigation
  // useEffect(() => {
  // fix next issue
  // if (typeof window !== 'undefined') {
  //   const sidebarToggle = document.body.querySelector('#sidebarToggle')

  //   if (sidebarToggle) {
  //     // 在localStorage中儲存目前sidebar情況
  //     if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
  //       document.body.classList.toggle('sb-sidenav-toggled')
  //     }

  //     sidebarToggle.addEventListener('click', (event) => {
  //       event.preventDefault()

  //       document.body.classList.toggle('sb-sidenav-toggled')

  //       localStorage.setItem(
  //         'sb|sidebar-toggle',
  //         document.body.classList.contains('sb-sidenav-toggled')
  //       )
  //     })
  //   }
  // }
  // }, [])
  return (
    <>
      <useEvents>
        <nav className="header container navbar-expand mt-5 w-1200">
          <h5 className="d-flex justify-content-between">
            <div className="bg-bg-gray-secondary rounded-3">
              <p className="mx-4 my-2">
                目前共有 {data?.data.posts.length} 筆 結果
              </p>
            </div>
            <section>
              <NavbarTopRwd />
            </section>

            {/* <selector className="d-flex ">
            <div className="sort_icon">
              <button className="btn no-border rounded-0 text-white">
                排序方式 <GoSortDesc className=" btn-primary-deep" />
              </button>
            </div>

            <div className="test">
              <button className="btn no-border rounded-0 text-white pb-0">
                推薦
              </button>
            </div>
            <div className="test">
              <button className="btn no-border rounded-0 text-white pb-0">
                日期
              </button>
            </div>
            <div className="test">
              <button className="btn no-border rounded-0 text-white pb-0">
                價格
              </button>
            </div>
            <div className="test">
              <button className="btn no-border rounded-0 text-white pb-0">
                地區
              </button>
            </div>
          </selector> */}
          </h5>
        </nav>
        {/* <nav className="header-m container row">
        <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
          <TbMap />
          地區
        </button>
        <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
          <HiOutlineAdjustmentsHorizontal />
          類別
        </button>
        <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
          <CiFilter />
          篩選
        </button>
        <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
          <GoSortDesc />
          排序
        </button>
      </nav> */}
        <nav className="header-m">
          <NavbarTopRwdSm />
        </nav>
        <main className="container w-1200">
          <div className="row">
            <div className="sidebar me-3 col-md-2 col-3">
              <div className="upSidebar ">
                <h6>活動種類</h6>
                <div className="form-group">
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
                      所有類型
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
                      演唱會
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
                      展覽
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
                      快閃活動
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
                      市集
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
                      粉絲見面會
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
                      課程講座
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
                      體育賽事
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
                      景點門票
                    </label>
                  </div>
                </div>
              </div>
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
                {data?.data.posts.map((v) => (
                  <div key={v.id} className="col-md-4 col-sm-6 ">
                    <div className="card  stretched-link bg-bg-gray-secondary text-white px-0 no-border">
                      <figure>
                        <img
                          src={`/images/product/list/${v.image?.split(',')[0]}`}
                          alt=""
                          className="card-img-top"
                        />
                      </figure>
                      <FavIcon />

                      <div className="card-body">
                        <p className=" text-normal-gray-light">
                          {v.event_type_id} 演唱會
                        </p>
                        <h5 className="card-title">
                          {/* NOneRepublic 共和世代 高雄巨蛋 */}
                          {v.event_name}
                        </h5>
                        <div className="">
                          <h6 className="text-primary-deep">$1200起</h6>
                          <div className="d-flex justify-content-between">
                            <p className="text-normal-gray-light mb-2">
                              {v.str}
                            </p>
                            <span className="text-normal-gray-light">
                              {/* 2023-06-01 */}
                              {v.start_date.substring(0, 10)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <EventCard />
                {/* <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-02.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div> */}
                {/* <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-03.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-04.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-05.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-06.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-07.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/1-08.jpg"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 ">
                <div className="card bg-bg-gray-secondary text-white px-0 no-border">
                  <figure>
                    <img
                      src="/images/product/list/product-ex.png"
                      alt=""
                      className="card-img-top"
                    />
                  </figure>
                  <FavIcon />

                  <div className="card-body p-">
                    <p className=" text-normal-gray-light">演唱會</p>
                    <h5 className="card-title">
                      {' '}
                      NOneRepublic 共和世代 高雄巨蛋
                    </h5>
                    <h6 className="text-primary-deep">$1200起</h6>
                    <div className="d-flex justify-content-between">
                      <p className="text-normal-gray-light mb-2">台北</p>
                      <span className="text-normal-gray-light">2023-06-01</span>
                    </div>
                  </div>
                </div>
              </div> */}
              </div>

              <footer className="d-flex justify-content-center m-3">
                <div
                  className="page_nav btn-toolbar"
                  role="toolbar"
                  aria-label="Toolbar with button groups"
                >
                  <div className="btn-group " role="group" aria-label="group">
                    <button
                      type="button"
                      className="btn btn-normal-gray"
                      aria-label="previous"
                    >
                      &laquo;
                    </button>
                    <button type="button" className="btn btn-primary">
                      1
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary text-white"
                    >
                      2
                    </button>
                    <button type="button" className="btn btn-secondary">
                      3
                    </button>
                    <button type="button" className="btn btn-secondary">
                      4
                    </button>
                    <button type="button" className="btn btn-secondary">
                      5
                    </button>
                    <button type="button" className="btn btn-secondary">
                      6
                    </button>
                    <button
                      type="button"
                      className="btn btn-normal-gray"
                      aria-label="next"
                    >
                      &raquo;
                    </button>
                  </div>
                </div>
              </footer>
              {/* <footer className="footer-m container row sticky-bottom">
              <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
                <FaHouse />
                <br />
                首頁
              </button>
              <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
                <FaRegStar />
                <br />
                我的收藏
              </button>
              <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
                <FaTicket />
                <br />
                我的票卷
              </button>
              <button className="col btn btn-outline-primary-deep no-border rounded-0 text-white">
                <RxPerson />
                <br />
                帳戶設定
              </button>
            </footer> */}
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
        .header-m {
           {
            /* display: none; */
          }
        }
        .sidebar {
           {
            /* width: 300px; */
          }
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
        .footer-m {
           {
            /* display: none; */
          }
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
          .footer_m {
             {
              /* display: contents; */
            }
          }
           {
            /* .product_card {
              width: auto;
            } */
          }
        }
         {
          /* selector button {
          background: none;
          color: white;
          border-bottom: 2px;
          font-size: 16px;
          padding: 5px 22px;
        }
        selector button:hover {
          border-bottom: 2px solid #c55708;
        }
        selector button shover::after {
          border-bottom: 2px solid #c55708;
        } */
        }
      `}</style>
    </>
  )
}
