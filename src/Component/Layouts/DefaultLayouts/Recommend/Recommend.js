import Button from '../Content/Button';
import './Recommend.scss';

 function Recommend({handleClick}) {
  return (
    <div>
      <h3 className='type-title'>Sản phẩm</h3>
      <div className="type-btn">
        <Button onClickHandler={handleClick} value="Apple" title="Iphone"/>
        <Button onClickHandler={handleClick} value="Oppo" title="Oppo"/>
        <Button onClickHandler={handleClick} value="Xiaomi" title="Xiaomi"/>
        <Button onClickHandler={handleClick} value="SamSung" title="SamSung"/>
        <Button onClickHandler={handleClick} value="ViVo" title="ViVo"/>
      </div>
    </div>
  )
}
export default Recommend;