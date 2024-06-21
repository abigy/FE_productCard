import './App.css';
import MyComponent from './Component/DefaultLayout';
import Header from './Component/Layouts/DefaultLayouts/Header/Header';
import Product from './Component/Layouts/DefaultLayouts/Product/Product';
import Recommend from './Component/Layouts/DefaultLayouts/Recommend/Recommend';
import SiderBar from './Component/Layouts/DefaultLayouts/Sidebar/SiderBar';
import { useEffect, useState } from 'react';
import products from './Component/Layouts/DefaultLayouts/Data/dataProduct';
import dataProduct from './Component/Layouts/DefaultLayouts/Data/dataProduct'
import ViewCard from './Component/Layouts/DefaultLayouts/Content/ViewCard';
import { Button } from 'antd';
import ButtonRecommend from './Component/Layouts/DefaultLayouts/Content/ButtonRecommend';
import dataJS from './Component/Layouts/DefaultLayouts/Data/dataProduct'
// import { Card } from 'antd';


function App() {
  const [query, setQuery] = useState("")
  // get data
  const [productdb, setProductdb] = useState([])

  const [maxPrice, setMaxPrice] = useState(25000000)
  const [minPrice, setMinPrice] = useState(0)


  const getData = () => {
    fetch('http://localhost:8000/data')
      .then(response => response.json())
      .then(res => setProductdb(res))
  }

  useEffect(() => {
    getData()
  }, [])



  const data_product = [...new Set(dataJS.map((val) => val.category))]

  const handleChange = (event) => {
    const { value } = event.target
    setMaxPrice(value)
  }

  const filetPrice = productdb.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice)


  const filterItems = (cat) => {
    const newItems = dataJS.filter((newVal) => newVal.category === cat)
    setProductdb(newItems)
  }

  //filter feature
  const filterItems2 = (fe) => {
    const newItems2 = dataJS.filter((newVal) => newVal.feature === fe)
    setProductdb(newItems2)
  }

  // const getData2 = () => {
  //   fetch('http://localhost:8000/data')
  //     .then(response => response.json())
  //     .then(res => setProductdb2(res))
  // }

  // useEffect(() => {
  //   getData2()
  // }, [])

  const data_product2 = [...new Set(dataJS.map((val) => val.feature))]

  // const [productdb, setProductdb] = useState(dataProduct)

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const result = await fetch('http://localhost:3000/data')
  //     const jsonResult = await result.json()

  //     setProductdb(jsonResult)
  //   }
  //   fetchProduct()
  // }, [])

  //Input filter
  // const handleInputChange = event => {
  //   setQuery(event.target.value)
  // }


  // const filteredItems = products.filter(
  //   (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  // );

  // // radio filter
  // const handleChange = event => {
  //   setSelectedCategory(event.target.value)
  // }
  // //Button filter
  // const handleClick = event => {
  //   setSelectedCategory(event.target.value)
  // }
  //Filtering input item
  // function filteredData(products, selected, query) {
  //   let filteredProduct = products

  //   if (query) {
  //     filteredProduct = filteredItems
  //   }

  //   // selected filter
  //   if (selected) {
  //     filteredProduct = filteredProduct.filter(({ category, price, feature,
  //       salePrice, title }) =>
  //       category === selected ||
  //       price === selected ||
  //       feature === selected ||
  //       salePrice === selected ||
  //       title === selected)
  //   }

  //   return filteredProduct.map(({ img, price, category, feature, salePrice, description, title }) => (
  //     <ViewCard
  //       key={Math.random()}
  //       img={img}
  //       title={title}
  //       price={price}
  //       salePrice={salePrice}
  //       category={category}
  //       description={description}
  //       feature={feature}
  //     />
  //   )
  //   )
  // }

  // const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Header></Header>
      <SiderBar
        data_product2={data_product2}
        filterItems2={filterItems2}
        setProductdb={setProductdb}
        maxPrice={maxPrice}
        minPrice={minPrice}
        handleChange={handleChange}
      ></SiderBar>
      <ButtonRecommend
        data_product={data_product}
        filterItems={filterItems}
        setProductdb={setProductdb}
      ></ButtonRecommend>
      <ViewCard
        productdb={productdb}
      ></ViewCard>
      {/* <Product result={result} /> */}
      {/* <Product/> */}
    </div>
  );
}

export default App;
