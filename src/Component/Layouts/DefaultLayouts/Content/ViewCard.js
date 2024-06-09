function ViewCard({ img, price, category, feature, salePrice, description, title }) {
  return (
    <div>
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
          <button className="cart-btn button">
            Xem chi tiết
          </button>
        </div>
      </section>
      {/* end-card-product */}
    </div>
  )
}

export default ViewCard;
