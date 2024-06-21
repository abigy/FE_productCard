import { useState, useEffect } from "react";
import ViewDetails from "../Product/ViewDetails/ViewDetails";
import toggleModal from "../Product/ViewDetails/ViewDetails"
import { IoCloseCircle } from "react-icons/io5";

function ViewCard({ productdb }) {
  const [modal, setModal] = useState(false)
  // const [productdb, setProductdb] = useState([])

  const [detail, setDetail] = useState({
    id: '',
    img: '',
    title: '',
    price: '',
    salePrice: '',
    description: '',
  })

  const toggleModal_getData = (id) => {
    setModal(!modal)
    fetch(`http://localhost:8000/data/${id}`)
      .then(response => response.json())
      .then(res => setDetail(res))
  }

  const toggleModal = () => {
    setModal(!modal)
  }

  // const getData = () => {
  //   fetch('http://localhost:8000/data')
  //     .then(response => response.json())
  //     .then(res => setProductdb(res))
  // }


  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <div className="cardContainer">
      {modal && (
        <div className="model_Container">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="details-container">
            <button onClick={toggleModal} className='close-icon'> <IoCloseCircle /></button>
            <div className="detail-content ">
              <div>
                <div className="details-info">
                  <div className="img_box">
                    <img className='img-details' src={detail.img} alt="Hình nhạy cảm" />
                  </div>
                  <div className="product-details">
                    <h2 className="detail-title">{detail.title}</h2>
                    <span className="container-price flex">
                      <h3 className="detail-price red">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(detail.price)}</h3>
                      <del className="detail-price price-sale mar_20px">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(detail.salePrice)}</del>
                    </span>
                    <div className="detail-des">{detail.description}</div>
                    <button className="add-cart" >Thêm vào giỏ hàng</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      )}
      {/* card-product */}
      {productdb.map((name, index) =>
        <section key={index} className="card">
          <img className='card-img'
            src={name.img}
            alt={name.title} />
          <div className="card-details">
            <h3 className="card-title">{name.title}</h3>
            <div className="card-price">
              <div className="main-price">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(name.price)}</div>
              <span className="card-sale">
                <del className="price">{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(name.salePrice)}</del>
              </span>
            </div>
            <div className="card-description">
              <span className="promotion">{name.description}</span>
            </div>
          </div>
          <div className="Cart">
            <button onClick={(e) => toggleModal_getData(name.id)} className="cart-btn button">
              Xem chi tiết
            </button>
          </div>
        </section>
      )}
      {/* end-card-product */}
    </div>
  )
}

export default ViewCard;