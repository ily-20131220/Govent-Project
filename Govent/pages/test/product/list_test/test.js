import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top-sm'
import ActivityCategory from '@/data/event/activity_category.json'
import EventType from '@/data/event/event_type.json'
import StrList from '@/data/event/str.json'
import useEvents from '@/hooks/use-event'
import BS5Pagination from '@/components/common/bs5-pagination'
import SideBarDown from '@/components/layout/list-layout/sidebar_down'

export default function ProductStateList() {
  const [nameLike, setNameLike] = useState('')
  const [catIds, setCatIds] = useState([])
  const [strIds, setStrIds] = useState([])
  const [priceGte, setPriceGte] = useState(1500)
  const [priceLte, setPriceLte] = useState(15000)
  const [mainStrIds, setMainStrIds] = useState([])
  const [orderby, setOrderby] = useState({ sort: 'id', order: 'asc' })
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(10)
  const [itemTotal, setItemTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [items, setItems] = useState([])

  const getEvents = async (toFirstPage = false) => {
    if (toFirstPage) {
      setPage(1)
    }

    const params = {
      page: toFirstPage ? 1 : page,
      name_like: nameLike,
      cat_ids: catIds.join(','),
      str_ids: strIds.join(','),
      sort: orderby.sort,
      order: orderby.order,
      perpage,
      price_gte: priceGte,
      price_lte: priceLte,
    }

    try {
      const res = await axios.get('http://localhost:3005/api/events', {
        params,
      })

      if (res.data.status === 'success') {
        setItemTotal(res.data.data.total)
        setItems(res.data.data.events)
        setPageCount(res.data.data.pageCount)
      }
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  useEffect(() => {
    getEvents()
  }, [page])

  useEffect(() => {
    if (strIds.length === 0) return

    const allMainStrIds = StrList.filter((v) => !v.parent_id).map((v) => v.id)
    const existingMainStrIds = []

    for (let i = 0; i < allMainStrIds.length; i++) {
      const subIds1 = StrList.filter((v) => v.parent_id === allMainStrIds[i])
      const subIds2 = StrList.filter(
        (v) => v.parent_id === allMainStrIds[i] && strIds.includes(v.id)
      )

      if (subIds1.length === subIds2.length) {
        existingMainStrIds.push(allMainStrIds[i])
      }
    }

    setMainStrIds(existingMainStrIds)
  }, [strIds])

  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  const handleLoadData = () => {
    getEvents(true)
  }

  // const displayList = (
  //   <ul>
  //     {items.map((v) => (
  //       <li key={v.id}>
  //         {v.name}(str_id:{v.str_id})(price: {v.price})
  //       </li>
  //     ))}
  //   </ul>
  // )

  const pagination = (
    <BS5Pagination
      forcePage={page - 1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
    />
  )

  return (
    <>
      <nav>
        <NavbarTopRwd />
        <div>
          <SideBarDown />
        </div>
      </nav>
      <div className="container">
        <h1>商品測試頁(state)</h1>
        <hr />
        {/* Filter block */}
      </div>
    </>
  )
}
