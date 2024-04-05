import React from 'react'
import { FaHeart } from 'react-icons/fa6'
import { CiHeart } from 'react-icons/ci'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function TestPorps(props) {
  // 在适当的地方调用父组件传递的回调函数，并传递数据
  const sendDataToParent = () => {
    const dataToSend = 'Data from child component'
    props.onDataFromChild(dataToSend)
  }

  const handletoggleFav = (pid) => {
    const newEvents = props.datas.map((v, i) => {
      if (v.pid === pid) return { ...v, fav: !v.fav }
      else return v
    })
    props.setEvents(newEvents)
  }

  const router = useRouter()
  const handleClick = (category, regionNames) => {
    const regions = Array.isArray(regionNames) ? regionNames : [regionNames]
    const formattedRegionNames = regions.join(',')
    router.push(
      `/product/list/?category=${category}&regionName=${formattedRegionNames}`
    )
  }

  return (
    <div>
      {/* 渲染子组件中的内容 */}
      {/* <Link href="/product/list/?演唱會">
        <a>特定筛选链接</a>
      </Link>*/}
      <button onClick={() => handleClick('演唱會')}>演唱會</button>
      <button onClick={() => handleClick('展覽')}>展覽</button>
      <button onClick={() => handleClick('快閃活動')}>快閃活動</button>
      <button onClick={() => handleClick('市集')}>市集</button>
      <button onClick={() => handleClick('粉絲見面會')}>粉絲見面會</button>
      <button onClick={() => handleClick('課程講座')}>課程講座</button>
      <button onClick={() => handleClick('體育賽事')}>體育賽事</button>
      <button onClick={() => handleClick('景點門票')}>景點門票</button>
      <button onClick={() => handleClick('', '台北市')}>台北市</button>
      <button onClick={() => handleClick('', ['台北市', '新北市', '桃園市'])}>
        台北市 & 新北市
      </button>
      {props.datas.map((v, id) => (
        <div key={id}>
          <p className="text-normal-gray-light">{v.category_name}</p>
          <h5 className="card-title">{v.event_name}</h5>
          <button
            className="btn text-white"
            onClick={() => handletoggleFav(v.pid)}
          >
            {v.fav ? <FaHeart /> : <CiHeart />}
          </button>
        </div>
      ))}
      {/* 在适当的地方触发调用父组件传递的回调函数 */}
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  )
}
