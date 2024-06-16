import { useEffect, useState } from "react"

function ButtonRecommend() {
  const [productdb, setProductdb] = useState([])

  const getData = () => {
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(res => setProductdb(res))
  }

  const data_product = [...new Set(productdb.map((val) => val.category))]

  const filterItems = (cat) => {
    const newItems = productdb.filter((newVal) => newVal.category === cat)
    setProductdb(newItems)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h3 className='type-title'>Sản phẩm</h3>
      <div className="type-btn">
        <button className="btns" >All</button>
        {data_product.map(val => (
          <button
            onClick={() => filterItems(val)}
            className="btns" >{val}</button>
        ))}
      </div>
    </div>
  )
}

export default ButtonRecommend;