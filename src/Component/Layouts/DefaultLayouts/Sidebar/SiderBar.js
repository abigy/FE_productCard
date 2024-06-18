import Category from './Category/Category'
import Features from './Features/Features';
import Price from './Price/Price'
import './SideBar.scss'

function SiderBar({data_product2}) {
  return (
    <div>
      <section className='sidebar'>
        <h2 className="sidebar-main"></h2>
        {/* <Category handleChange = {handleChange}></Category> */}
        <Price ></Price>
        <Features data_product2={data_product2} ></Features>
      </section>
    </div>
  )
}

export default SiderBar;