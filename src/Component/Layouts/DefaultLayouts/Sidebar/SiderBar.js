import Category from './Category/Category'
import Features from '../Features/Features';
import Price from './Price/Price'
import './SideBar.scss'

function SiderBar({data_product2,filterItems2, setProductdb, maxPrice,handleChange, minPrice}) {
  return (
    <div>
      <section className='sidebar'>
        <h2 className="sidebar-main"></h2>
        {/* <Category handleChange = {handleChange}></Category> */}
        <Features data_product2={data_product2} 
        filterItems2={filterItems2}
        setProductdb={setProductdb}
        ></Features>
        <Price 
        maxPrice={maxPrice} 
        minPrice={minPrice}
        handleChange={handleChange}
        ></Price>
      </section>
    </div>
  )
}

export default SiderBar;