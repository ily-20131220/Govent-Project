import React, { useEffect, useState } from 'react'
import Link from 'next/link'
// import {
//   useHistory,
//   useLocation,
//   useParams,
//   useRouteMatch,
// } from 'react-router-dom'

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

// 引入活動資料
import EventCard from '@/components/layout/list-layout/event_card'
import useEvents from '@/hooks/use-event'

// 假活動資料
// import event from '@/data/event/event.json'
// console.log(event)

export default function List() {
  const { data } = useEvents()
  // console.log(data?.data.posts)
  // useEffect(() => {
  //   console.log(data) // 这里可以看到数据
  // }, [data])
  // console.log(listItem);
  // console.log(data?.length);
  console.log(data)

  // 分頁
  const [events, setEvents] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(15)

  //頁碼
  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  // const currentEvents = events.slice(firstPostIndex, lastPostIndex)
  const currentEvents = data?.slice(firstPostIndex, lastPostIndex)

  //修改頁碼
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      {/* <useEvents> */}
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
          </div>
          <div className="col">
            <div className="cardList row g-3">
              {/* {data?.map((v) => ( */}
              {currentEvents?.map((v) => (
                <div key={v.id} className="col-md-4 col-sm-6 ">
                  <Link
                    href={`/product/product-info?id=${v.id}`}
                    className="col-md-4 col-sm-6"
                    key={v.id}
                    style={{ textDecoration: 'none' }}
                  >
                    <div className="card  stretched-link bg-bg-gray-secondary text-white px-0 no-border">
                      <figure>
                        <img
                          src={`/images/product/list/${v.image?.split(',')[0]}`}
                          alt=""
                          className="card-img-top"
                        />
                      </figure>
                      {/* <FavIcon id={v.id} /> */}
                      {/* <FavFcon/> */}

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
                {/* <PageBar /> */}
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
                    { length: Math.ceil(data?.length / postsPerPage) },
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
                      currentPage < Math.ceil(data?.length / postsPerPage) &&
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
