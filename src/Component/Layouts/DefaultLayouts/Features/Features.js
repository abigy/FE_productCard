import './Features.scss'
import dataJs from '../Data/dataProduct'

function Features({ data_product2 , filterItems2, setProductdb}) {

  return (
    <div className='pr feature-marL'>
      <h2 className="sidebar-title price-title">Tính năng</h2>

      <label className="sidebar-label-container">
        <input onClick={() => setProductdb(dataJs)} type="checkbox" value="" name='test1' />
        <span className='checkMark'></span>All
      </label>

      {data_product2.map(val => (

        <label className='sidebar-label-container'>
          <input onClick={() => filterItems2(val)} type="checkbox" value={val} name='test' />
          <span className='checkMark'></span>{val}
        </label>

      ))}


    </div>
  )
}

export default Features;