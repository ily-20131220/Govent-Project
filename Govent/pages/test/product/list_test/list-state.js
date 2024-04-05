import { useState, useEffect } from 'react'
import axios from 'axios'
import NavbarTopRwd from '@/components/layout/list-layout/navbar-top-sm'

// 載入選項用的json檔案，對應的是資料庫的資料
import ActivityCategory from '@/data/event/activity_category.json'
import EventType from '@/data/event/event_type.json'
import StrList from '@/data/event/str.json'

// 引入活動資料
import useEvents from '@/hooks/use-event'


// 載入分頁元件
import BS5Pagination from '@/components/common/bs5-pagination'

export default function ProductStateList() {
  // const { data } = useEvents()
  // console.log(data)
  // const initState = data?.map((v, i) => {
  //   return { ...v }
  // })
  // const { data } = useEvents()
  // 各選項的state
  const [nameLike, setNameLike] = useState('') //關鍵字
  const [catIds, setCatIds] = useState([]) //活動類別(BrandID)
  const [strIds, setStrIds] = useState([]) //城市分類(大小cat)
  const [priceGte, setPriceGte] = useState(1500) //數字
  const [priceLte, setPriceLte] = useState(15000) //數字

  // 主分類(只是方便呈現用，不會送至伺服器)
  const [mainStrIds, setMainStrIds] = useState([]) // 數字陣列

  // 排序(前面為排序欄位，後面參數asc為從小到大，desc為從大到小排序)
  const [orderby, setOrderby] = useState({ sort: 'id', order: 'asc' })

  // 分頁用
  const [page, setPage] = useState(1)
  const [perpage, setPerpage] = useState(10)

  // 最後得到的項目
  const [itemTotal, setItemTotal] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [items, setItems] = useState([])

  // 從伺服器載入資料
  const getEvents = async (toFirstPage = false) => {
  //   // 跳至第一頁
  //   // 當重新過濾或重置選項，因重新載入資料需要跳至第一頁
    if (toFirstPage) {
      setPage(1)
    }

  //   // 要送至伺服器的query string參數
    const params = {
      page: toFirstPage ? 1 : page, // 跳至第一頁
      name_like: nameLike,
      cat_ids: catIds.join(','), // 空陣列會變成空字串
      str_ids: strIds.join(','),
      sort: orderby.sort,
      order: orderby.order,
      perpage,
      price_gte: priceGte, //最好給預設值
      price_lte: priceLte, //最好給預設值
    }

  //   // 用URLSearchParams產生查詢字串
    const searchParams = new URLSearchParams(params)

    const res = await axios.get(`http://localhost:3005/api/events?${searchParams.toString()}`)
    console.log(res.data.status);//可以取得

    if (res.data.status === 'success') {
      //將物件轉為陣列
      console.log(123);
      // const eventsData = res.data.data.events;
      // const eventsArray = Object.values(eventsData);

      // 設定獲取頁數總合
      setItemTotal(res.data.data.posts.total)
      // console.log(res.data.data.posts);//取得全部
      // console.log(res.data.data.posts[1]);
      // 設定獲取項目
      setItems(res.data.data.posts)
      setPageCount(res.data.data.posts.pageCount)
      console.log(pageCount);
    }
    console.log(items);
    console.log(pageCount);
  }
  // const getEvents = async (toFirstPage = false) => {
  //   try {
  //     // 跳至第一頁
  //     // 當重新過濾或重置選項，因重新載入資料需要跳至第一頁
  //     if (toFirstPage) {
  //       setPage(1)
  //     }

  //     // 要送至伺服器的 query string 參數
  //     const params = {
  //       page: toFirstPage ? 1 : page, // 跳至第一頁
  //       name_like: nameLike,
  //       cat_ids: catIds.join(','), // 空陣列會變成空字串
  //       str_ids: strIds.join(','),
  //       sort: orderby.sort,
  //       order: orderby.order,
  //       perpage,
  //       price_gte: priceGte, // 最好給預設值
  //       price_lte: priceLte, // 最好給預設值
  //     }

  //     // 用 URLSearchParams 產生查詢字串
  //     const searchParams = new URLSearchParams(params)

  //     const res = await axios.get(
  //       `http://localhost:3005/api/events?${searchParams.toString()}`
  //     )

  //     if (res.data.status === 'success') {
  //       const eventsData = res.data.data.events
  //       if (eventsData) {
  //         // 將非空的 JSON 物件轉換為陣列，並篩選掉空值
  //         const eventsArray = Object.values(eventsData).filter(
  //           (event) => event !== null && event !== undefined
  //         )

  //         // 設定獲取頁數總合
  //         setItemTotal(res.data.data.total)
  //         // 設定獲取項目
  //         setItems(eventsArray)
  //         setPageCount(res.data.data.pageCount)
  //       } else {
  //         console.error('No events data found')
  //       }
  //     } else {
  //       console.error('Error fetching events data:', res.data.status)
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error)
  //   }
  // }

  useEffect(() => {
    // 載入資料
    getEvents()
    // 下面省略eslint多餘檢查
    // eslint-disable-next-line
    }, [page])

  // 主分類要全子分類都點按才會設定
  useEffect(() => {
    // 如果沒有子分類，就不用設定
    if (strIds.length === 0) return

    // 先找出所有的主分類id
    const allMainStrIds = StrList.filter((v) => !v.parent_id).map((v) => v.id)

    // iterate all main cat ids
    const existingMainStrIds = []

    // 逐一比對是否有全部子分類
    for (let i = 0; i < allMainStrIds.length; i++) {
      const subIds1 = StrList.filter((v) => v.parent_id === allMainStrIds[i])

      const subIds2 = StrList.filter(
        (v) => v.parent_id === allMainStrIds[i] && strIds.includes(v.id)
      )

      if (subIds1.length === subIds2.length) {
        existingMainStrIds.push(allMainStrIds[i])
      }
    }
    // 設定主分類
    setMainStrIds(existingMainStrIds)
  }, [strIds])

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    setPage(event.selected + 1)
  }

  const handleLoadData = () => {
    getEvents(true)
  }

  const convertNames = (options, idsString) => {
    const ids = idsString.split(',').map((v) => Number(v))

    return ids
      .map((id) => options.find((item) => item.id === id))
      .map((foundItem) => foundItem.name)
      .join(',')
  }

  console.log(items);

  // 呈現資料
  const displayList = (
    <>
      <ul>
        {items?.map((v) => {
          return (
            <li key={v.id}>
              {v.event_name}(str_id:{v.str})(price: {v.price})
            </li>
          )
        })}
      </ul>
    </>
  )

  // 呈現分頁
  const pagination = (
    <BS5Pagination
      forcePage={page - 1}
      onPageChange={handlePageClick}
      pageCount={pageCount}
    />
  )

  // 過濾區域
  const filterBlock = (
    <>
      <div>
        <label>
          關鍵字:
          <input
            type="text"
            name="keyword"
            value={nameLike}
            onChange={(e) => {
              setNameLike(e.target.value)
            }}
          />
        </label>{' '}
        <label>
          每頁多少項目:
          <select
            value={perpage}
            onChange={(e) => {
              setPerpage(Number(e.target.value))
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="20">20</option>
          </select>
        </label>{' '}
        <label>
          排序:
          <select
            value={`${orderby.sort},${orderby.order}`}
            onChange={(e) => {
              const selected = e.target.value
              setOrderby({
                sort: selected.split(',')[0],
                order: selected.split(',')[1],
              })
            }}
          >
            <option value="id,asc">預設排序(id由小至大)</option>
            <option value="id,desc">ID排序(id由大至小)</option>
            <option value="price,asc">價格排序(price由低至高)</option>
            <option value="price,desc">價格排序(price由高至低)</option>
          </select>
        </label>
      </div>
      <div>
        分類:
        {EventType.map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={catIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (catIds.includes(targetValue)) {
                    setCatIds(catIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setCatIds([...catIds, targetValue])
                  }
                }}
              />
              {v.category_name}({v.id})
            </label>
          )
        })}
      </div>
      <div>
        城市(主分類):
        {StrList.filter((v) => !v.parent_id).map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={mainStrIds.includes(v.id)}
                onChange={(e) => {
                  const targetId = Number(e.target.value)
                  // 尋找第二層的id
                  const subStrIds = StrList.filter(
                    (v2) => v2.parent_id === targetId
                  ).map((v3) => v3.id)
                  // 注意，要轉數字，為了保持數字陣列

                  if (mainStrIds.includes(targetId)) {
                    setMainStrIds(mainStrIds.filter((v2) => v2 !== targetId))
                    // 從子陣列中移除
                    const newStrIds = strIds.filter(
                      (el) => !subStrIds.includes(el)
                    )
                    setStrIds(newStrIds)
                  } else {
                    setMainStrIds([...mainStrIds, targetId])
                    // 從子陣列中加入
                    setStrIds([...strIds, ...subStrIds])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
        <br />
        分類(子分類):
        {StrList.filter((v) => v.parent_id).map((v) => {
          return (
            <label key={v.id} className="mx-1">
              <input
                type="checkbox"
                value={v.id}
                checked={strIds.includes(v.id)}
                onChange={(e) => {
                  // 注意，要轉數字，為了保持數字陣列
                  const targetValue = Number(e.target.value)
                  if (strIds.includes(targetValue)) {
                    setStrIds(strIds.filter((v2) => v2 !== targetValue))
                  } else {
                    setStrIds([...strIds, targetValue])
                  }
                }}
              />
              {v.name}({v.id})
            </label>
          )
        })}
      </div>

      <div>
        價格(1500~10000)
        <label>
          從:{' '}
          <input
            type="number"
            placeholder="1500"
            value={priceGte}
            onChange={(e) => {
              setPriceGte(Number(e.target.value))
            }}
          />
        </label>
        <label>
          到:{' '}
          <input
            type="number"
            placeholder="15000"
            value={priceLte}
            onChange={(e) => {
              setPriceLte(Number(e.target.value))
            }}
          />
        </label>
      </div>
      <div>
        <button onClick={handleLoadData}>從伺服器載入資料</button>
      </div>
    </>
  )

  return (
    <>
      <nav>
        <NavbarTopRwd />
      </nav>
      <div className="container">
        <h1>商品測試頁(state)</h1>
        <hr />
        {filterBlock}
        <hr />
        <p>
          項目數量(itemTotal): {itemTotal} / 目前頁碼(page): {page} /
          每頁多少項目(perpage):
          {perpage} / 總頁數(pageCount): {pageCount}
        </p>
        <hr />
        {displayList}
        {pagination}
      </div>

      <style global jsx>{`
        body {
          background-color: #151515;
          color: #fff;
          border: border-inline;
        }
      `}</style>
    </>
  )
}
