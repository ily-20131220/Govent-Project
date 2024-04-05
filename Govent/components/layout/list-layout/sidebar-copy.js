import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import City from '@/data/event/str.json'
import { CategoriesProvider, useCategories } from '@/hooks/use-categories'

export default function Sidebar(props) {
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

  // If useCategories returns { selectedCategories: ..., setSelectedCategories: ... }
  const { selectedCategories, setSelectedCategories } = useCategories()

  // const [selectedCategories, setSelectedCategories] = useState({})
  const [selectedRegions, setSelectedRegions] = useState({})

  useEffect(() => {
    const selectedCategoriesArray = Object.keys(selectedCategories).filter(
      (category) => selectedCategories[category]
    )
    const selectedRegionsNames = Object.keys(selectedRegions).filter(
      (regionOrCityName) => selectedRegions[regionOrCityName]
    )

    // 回傳選擇的篩選條件給父元素
    props.onFilterChange(selectedCategoriesArray, selectedRegionsNames, props)
  }, [selectedCategories, selectedRegions, props])

  //路由指定串
  const router = useRouter()
  // const defaultSelectedCategories = { 演唱會: true }
  const handleOnChange = (category) => {
    const newSelectedCategories = {
      ...selectedCategories,
      [category]: !selectedCategories[category],
    }
    setSelectedCategories(newSelectedCategories) // Update the local state

    // Update the router query parameters
    // This should be done after defining newSelectedCategories and ideally, after the state is updated
    const query = {
      selectedCategories: Object.keys(newSelectedCategories).filter(
        (cat) => newSelectedCategories[cat]
      ),
    }

    // You might want to perform this routing action after ensuring the state has been updated
    // However, React state updates are asynchronous, so consider implications for user experience
    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true }
    ) // Opting for shallow routing to avoid re-running data fetching methods on the page

    // Propagate changes upwards if necessary
    // This might be redundant or need to be moved into an effect depending on your use case
    props.onFilterChange(
      Object.keys(newSelectedCategories).filter(
        (cat) => newSelectedCategories[cat]
      )
    )
  }
  useEffect(() => {
    const query = {
      selectedCategories: Object.keys(selectedCategories).filter(
        (cat) => selectedCategories[cat]
      ),
    }

    router.push(
      {
        pathname: router.pathname,
        query,
      },
      undefined,
      { shallow: true }
    )
  }, [selectedCategories, router])

  const handleSelectAll = () => {
    const newSelection = {}
    if (!selectedCategories['所有類型']) {
      categories.forEach((cat) => (newSelection[cat] = true))
      newSelection['所有類型'] = true
    } else {
      categories.forEach((cat) => (newSelection[cat] = false))
      newSelection['所有類型'] = false
    }
    setSelectedCategories(newSelection)
  }

  const handleRegionCheckboxChange = (regionName, isChecked) => {
    const region = City.find((r) => r.name === regionName)
    const updatedRegions = { ...selectedRegions, [regionName]: isChecked }

    // 更新该地区下所有城市的选中状态
    region.cities.forEach((city) => {
      updatedRegions[city.name] = isChecked
    })

    setSelectedRegions(updatedRegions)
  }

  const handleCityCheckboxChange = (cityName, isChecked) => {
    const updatedRegions = { ...selectedRegions, [cityName]: isChecked }

    // 检查如果所有同地区的城市都被选中/取消选中，相应更新地区的选中状态
    const region = City.find((r) =>
      r.cities.some((city) => city.name === cityName)
    )
    const allCitiesChecked = region.cities.every((city) =>
      updatedRegions[city.name] !== undefined
        ? updatedRegions[city.name]
        : false
    )
    const anyCityChecked = region.cities.some(
      (city) => updatedRegions[city.name] === true
    )

    // 如果所有城市都选中，则地区选中；如果有一个城市未选中，地区取消选中
    updatedRegions[region.name] = allCitiesChecked && anyCityChecked

    setSelectedRegions(updatedRegions)
  }

  return (
    <>
      <div className="upSidebar">
        <h6>活動種類</h6>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={!!selectedCategories['所有類型']}
              onChange={handleSelectAll}
              id="flexCheckAll"
            />
            <label className="form-check-label" htmlFor="flexCheckAll">
              所有類型
            </label>
          </div>
          {categories.map((category, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={!!selectedCategories[category]}
                onChange={() => handleOnChange(category)}
                id={`flexCheck${index}`}
              />
              <label className="form-check-label" htmlFor={`flexCheck${index}`}>
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="downSidebar no-border">
        <h6>地區</h6>
        <div className="accordion" id="accordionExample">
          {City.map((region) => (
            <div
              key={region.id}
              className="accordion-item bg-bg-gray text-white"
            >
              <h2 className="accordion-header" id={`heading-${region.id}`}>
                <button
                  className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${region.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse-${region.id}`}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedRegions[region.name] || false}
                    onChange={(e) =>
                      handleRegionCheckboxChange(region.name, e.target.checked)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`flexCheck-${region.id}`}
                  >
                    {region.name}
                  </label>
                </button>
              </h2>
              <div
                id={`collapse-${region.id}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`heading-${region.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {region.cities.map((city) => (
                    <div key={city.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`flexCheck-${city.id}`}
                        checked={selectedRegions[city.name] || false}
                        onChange={(e) =>
                          handleCityCheckboxChange(city.name, e.target.checked)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheck-${city.id}`}
                      >
                        {city.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
