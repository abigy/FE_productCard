import { useState } from "react";
import ViewDetails from "../Product/ViewDetails/ViewDetails";
import toggleModal from "../Product/ViewDetails/ViewDetails"
import { IoCloseCircle } from "react-icons/io5";

function ViewCard({ img, price, category, feature, salePrice, description, title }) {
  const [modal, setModal] = useState(false)
  const toggleModal = () => {
    console.log("Bam cc  gi v ???")
    setModal(!modal)
  }
  return (
    <div>
      {modal && (
        <div className="overlay">
          <div className="details-container">
            <button onClick={toggleModal} className='close-icon'> <IoCloseCircle /></button>
            <div className="detail-content ">
              <div>
                <div className="details-info">
                  <div className="img_box">
                    <img className='img-details' src="https://product.hstatic.net/200000360909/product/8db3ee8cbec1258c3cd682b089ce5c8c_36bcb62936ab484da3ed6c8f025d0a22_master.jpg" alt="Hình nhạy cảm" />
                  </div>
                  <div className="product-details">
                    <h2 className="detail-title">ViVo 2050</h2>
                    <span className="container-price flex">
                      <h3 className="detail-price red">28.000.000</h3>
                      <del className="detail-price price-sale mar_20px">30.000.000</del>
                    </span>
                    <div className="detail-des">Điện thoại này là dòng điện thoại thứ dữ cùng với tinh chất thảo dược giúp da đầu mềm mượt như flow của binz</div>
                    <button className="add-cart" >Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* card-product */}
      <section className="card">
        <img className='card-img'
          src={img}
          alt={title} />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-price">
            <div className="main-price">{price}</div>
            <span className="card-sale">
              <del className="price">{salePrice}</del>
            </span>
          </div>
          <div className="card-description">
            <span className="promotion">{description}</span>
          </div>
        </div>
        <div className="Cart">
          <button onClick={toggleModal} className="cart-btn button">
            Xem chi tiết
          </button>
        </div>
      </section>
      {/* end-card-product */}
    </div>
  )
}

export default ViewCard;