import Input from '../../Content/Input';
import './Features.scss'

function Features({ handleChange }) {
  return (
    <div className='pr feature-marL'>
      <h2 className="sidebar-title price-title">Tính năng</h2>

      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name='test1' />
        <span className='checkMark'></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="Vân tay"
        category="Vân tay"
        name="test1"
      ></Input>

      <Input
        handleChange={handleChange}
        value="Chống thấm"
        category="Chống thấm"
        name="test1"
      ></Input>

      <Input
        handleChange={handleChange}
        value="Mở khóa khuôn mặt"
        category="Mở khóa khuôn mặt"
        name="test1"
      ></Input>

      <Input
        handleChange={handleChange}
        value="Lưng mặt kính"
        category="Lưng mặt kính"
        name="test1"
      ></Input>
    </div>
  )
}

export default Features;