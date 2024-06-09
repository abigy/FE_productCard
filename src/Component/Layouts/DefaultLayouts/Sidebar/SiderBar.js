import Category from './Category/Category'
import Features from './Features/Features';
import Price from './Price/Price'

import './SideBar.scss'
function SiderBar({handleChange}) {
  return (
    <div>
      <section className='sidebar'>
        <h2 className="sidebar-main"></h2>

        <Category handleChange = {handleChange}></Category>
        <Price handleChange = {handleChange}></Price>
        <Features handleChange = {handleChange}></Features>
      </section>
    </div>
  )
}

export default SiderBar;