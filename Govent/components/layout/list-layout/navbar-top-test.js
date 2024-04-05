import React, { useState } from 'react'

export default function NavbarTopRwdSm(props) {
  const [activeButton, setActiveButton] = useState(0)
  const [sortactiveButton, setSsrtactiveButton] = useState('')
  const [sortOrder, setSortOrder] = useState('')
  const [cityOrder, setCityOrder] = useState('')
  const [dateOrder, setDateOrder] = useState('')
  const [priceOrder, setPriceOrder] = useState('')
  const [recommendOrder, setRecommendOrder] = useState('')

  const handleClick = (buttonIndex) => {
    setActiveButton(buttonIndex)
  }
  const handleClickChang = () => {
    setActiveButton(activeButton === 0 ? 1 : 0)
  }

  const cityMap = {
    台北市: 1,
    新北市: 2,
    桃園市: 3,
    基隆市: 4,
    新竹市: 5,
    新竹縣: 6,
    宜蘭縣: 7,
    苗栗縣: 8,
    台中市: 9,
    南投縣: 10,
    彰化縣: 11,
    雲林縣: 12,
    嘉義縣: 13,
    嘉義市: 14,
    台南市: 15,
    高雄市: 16,
    屏東縣: 17,
    花蓮縣: 18,
    台東縣: 19,
  }

  // 升降序排序函数
  const sortEvents = (sortingMethod) => {
    // 不需要再创建 datedEvents 因为我们会直接在 sortedEvents 上操作
    let sortedEvents = [...props.events]

    switch (sortingMethod) {
      case 'date':
        sortedEvents.sort((a, b) => {
          // 将日期字符串转换为日期对象进行比较
          let dateA = new Date(a.start_date).getTime()
          let dateB = new Date(b.start_date).getTime()
          return dateOrder === 'asc' ? dateB - dateA : dateA - dateB
        })
        setDateOrder(dateOrder === 'asc' ? 'desc' : 'asc')
        break
      case 'price':
        sortedEvents.sort((a, b) => {
          // 确保price为数字类型，null或不可转换为数字的值视为0
          let priceA =
            a.price !== null && !isNaN(a.price) ? parseFloat(a.price) : 0
          let priceB =
            b.price !== null && !isNaN(b.price) ? parseFloat(b.price) : 0
          return priceOrder === 'asc' ? priceB - priceA : priceA - priceB
        })
        setPriceOrder(priceOrder === 'asc' ? 'desc' : 'asc')
        break
      case 'city':
        // 直接使用 event.str 进行比较，但需要确保所有事件都有 str 属性
        sortedEvents.sort((a, b) => {
          let cityValueA = cityMap[a.str] || 0 // 使用 || 0 确保未定义的城市有默认值
          let cityValueB = cityMap[b.str] || 0
          return cityOrder === 'asc'
            ? cityValueB - cityValueA
            : cityValueA - cityValueB
        })
        setCityOrder(cityOrder === 'asc' ? 'desc' : 'asc')
        break
      case 'recommend':
        // 推荐排序逻辑保持不变
        sortedEvents.sort((a, b) =>
          recommendOrder === 'asc' ? a.uid - b.uid : b.uid - a.uid
        )
        setRecommendOrder(recommendOrder === 'asc' ? 'desc' : 'asc')
        break
      default:
        break
    }

    // 更新事件列表
    props.setEvents(sortedEvents)
  }

  // 处理按钮点击事件
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
  }

  // SortButton组件
  function SortButton({ sortOrder, onSort }) {
    const handleClick = () => {
      const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc'
      onSort('date', newSortOrder) // 此处传递 'date' 作为默认排序方法
    }

    return (
      <button
        onClick={handleClick}
        className={`btn no-border rounded-0 text-white ${
          sortOrder === 'asc' ? 'asc' : 'desc'
        }`}
      >
        排序方式
        <i
          className={`bi ms-2 ${
            sortOrder === 'asc' ? 'bi-sort-down' : 'bi-sort-up'
          } btn-primary-deep`}
        ></i>
      </button>
    )
  }

  // RecommendButton组件
  function RecommendButton({ recommendOrder }) {
    return (
      <div
        style={{
          borderBottom:
            activeButton === 0 ? '3px solid #c55708' : '3px solid #151515',
        }}
      >
        <button
          onClick={() => {
            handleButtonClick('recommend')
            sortEvents('recommend')
            handleClick(0)
          }}
          className={`btn ${
            activeButton === 0 ? 'text-primary-deep' : 'text-white'
          } px-3 rounded-0 no-border ${activeButton === 0 ? 'active' : ''}`}
        >
          推薦
        </button>
      </div>
    )
  }

  // CityButton组件
  function CityButton({ cityOrder }) {
    return (
      <div
        style={{
          borderBottom:
            activeButton === 2 ? '3px solid #c55708' : '3px solid #151515',
        }}
      >
        <button
          onClick={() => {
            handleButtonClick('city')
            sortEvents('city')
            handleClick(2)
          }}
          className={`btn ${
            activeButton === 2 ? 'text-primary-deep' : 'text-white'
          } px-3 rounded-0 no-border ${activeButton === 2 ? 'active' : ''}`}
        >
          地區
        </button>
      </div>
    )
  }

  // DateButton组件
  function DateButton({ dateOrder }) {
    return (
      <div
        style={{
          borderBottom:
            activeButton === 1 ? '3px solid #c55708' : '3px solid #151515',
        }}
      >
        <button
          onClick={() => {
            handleButtonClick('date')
            sortEvents('date')
            handleClick(1)
          }}
          className={`btn ${
            activeButton === 1 ? 'text-primary-deep' : 'text-white'
          } px-3 rounded-0 no-border ${activeButton === 1 ? 'active' : ''}`}
        >
          日期
        </button>
      </div>
    )
  }

  // PriceButton组件
  function PriceButton({ priceOrder }) {
    return (
      <div
        style={{
          borderBottom:
            activeButton === 3 ? '3px solid #c55708' : '3px solid #151515',
        }}
      >
        <button
          onClick={() => {
            handleButtonClick('price')
            sortEvents('price')
            handleClick(3)
          }}
          className={`btn ${
            activeButton === 3 ? 'text-primary-deep' : 'text-white'
          } px-3 rounded-0 no-border ${activeButton === 3 ? 'active' : ''}`}
        >
          價格
        </button>
      </div>
    )
  }

  return (
    <selector className="header-m d-none d-sm-block">
      <section className="d-flex justify-content-between">
        <div className="sort_icon">
          <SortButton sortOrder={sortOrder} onSort={sortEvents} />
        </div>

        <div className="d-flex">
          <RecommendButton recommendOrder={recommendOrder} />

          <DateButton dateOrder={dateOrder} />

          <PriceButton priceOrder={priceOrder} />

          <CityButton cityOrder={cityOrder} />
        </div>
      </section>
    </selector>
  )
}
