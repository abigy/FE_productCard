import './App.css';
import MyComponent from './Component/DefaultLayout';
import Header from './Component/Layouts/DefaultLayouts/Header/Header';
import Product from './Component/Layouts/DefaultLayouts/Product/Product';
import Recommend from './Component/Layouts/DefaultLayouts/Recommend/Recommend';
import SiderBar from './Component/Layouts/DefaultLayouts/Sidebar/SiderBar';
import { useState } from 'react';
import products from './Component/Layouts/DefaultLayouts/Content/Data/dataProduct';
import ViewCard from './Component/Layouts/DefaultLayouts/Content/ViewCard';
import ViewDetails from './Component/Layouts/DefaultLayouts/Product/ViewDetails/ViewDetails';
// import { Card } from 'antd';


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  //Input filter

  const handleInputChange = event => {
    setQuery(event.target.value)
  }


  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // radio filter
  const handleChange = event => {
    setSelectedCategory(event.target.value)
  }
  //Button filter
  const handleClick = event => {
    setSelectedCategory(event.target.value)
  }
  //Filtering input item
  function filteredData(products, selected, query) {
    let filteredProduct = products

    if (query) {
      filteredProduct = filteredItems
    }

    // selected filter
    if (selected) {
      filteredProduct = filteredProduct.filter(({ category, price, feature,
        salePrice, title }) =>
        category === selected ||
        price === selected ||
        feature === selected ||
        salePrice === selected ||
        title === selected)
    }

    return filteredProduct.map(({ img, price, category, feature, salePrice, description, title }) => (
      <ViewCard
        key={Math.random()}
        img={img}
        title={title}
        price={price}
        salePrice={salePrice}
        category={category}
        description={description}
        feature={feature}
      />
    )
    )
  }

  const result = filteredData(products, selectedCategory, query)

  return (
    <div>
      <Header query={query} handleInputChange={handleInputChange}></Header>
      <SiderBar handleChange={handleChange}></SiderBar>
      <Recommend handleClick={handleClick} ></Recommend>
      {/* <ViewDetails></ViewDetails> */}
      <Product result={result} />
    </div>
  );
}

export default App;
