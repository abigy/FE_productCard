import Input from '../../Content/Input';
import './Features.scss'

function Features({ data_product2 }) {

  return (
    <div className='pr feature-marL'>
      <h2 className="sidebar-title price-title">Tính năng</h2>

      <label className="sidebar-label-container">
        <input type="radio" value="" name='test1' />
        <span className='checkMark'></span>All
      </label>

      {data_product2.map(val => (

        <label className='sidebar-label-container'>
          <input type="radio" value={val} name='test' />
          <span className='checkMark'></span>{val}
        </label>

      ))}


    </div>
  )
}

export default Features;