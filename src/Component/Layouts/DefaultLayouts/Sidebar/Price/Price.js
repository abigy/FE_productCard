import Input from '../../Content/Input';
import './Price.scss'
function Price({ handleChange }) {
  return (
    <div className='pr marL'>
      <h2 className="sidebar-title price-title">Giá Tiền</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name='test2' />
        <span className='checkMark'></span>All
      </label>

      <Input
        handleChange={handleChange}
        value={5000000}
        category="0 - 5.000.000"
        name="test2"
      ></Input>

      <Input
        handleChange={handleChange}
        value={10000000}
        category="5.000.000 - 10.000.000"
        name="test2"
      ></Input>

      <Input
        handleChange={handleChange}
        value={12000000}
        category="10.000.000 - 22.000.000"
        name="test2"
      ></Input>

      <Input
        handleChange={handleChange}
        value={25000000}
        category="22.000.000 - 25.000.000"
        name="test2"
      ></Input>

    </div>
  )
}

export default Price;