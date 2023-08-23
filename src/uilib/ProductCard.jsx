const ProductCard = ({
  title = "Card title",
  desc = "This is description",
  price = "20DT",
  oldPrice = "10DT",
  discount = "30%",
}) => {
  return (
    <div className="card_container">
      <img
        className="card_container__img"
        src="https://images.pexels.com/photos/7512030/pexels-photo-7512030.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div style={{padding:"0px 15px"}}>
        
      <div className="card_container__overlay">
        <button className="card_container__overlay__button">Add to Cart</button>
        {/* <p className="card_container__overlay__desc">share</p> */}
      </div>
      <span className="card_container__badge">-{discount}</span>
      <h1 className="card_container__title">{title}</h1>
      <h3 className="card_container__description">{desc}</h3>
      <div className="card_container__prices">
        <p className="card_container__prices--1">{price}</p>
        <p className="card_container__prices--2">{oldPrice}</p>
      </div>
</div>
    </div>
  );
};

export default ProductCard;
