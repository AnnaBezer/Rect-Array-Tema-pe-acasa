import './ProductCard.css';
// ProductCard.jsx

const ProductCard = (props) => {

  return (
    <div class="prod-card-container">
      <img class="product-card-image" src={props.image} alt="image"  />
      <div class="product-card-content">
      <h1 class="hexx">#{props.id}</h1>
      <h2 class="product-card-title">{props.title}</h2>
      <p class="product-card-description">{props.description}</p>
      <p class= "category">{props.category}</p>
      <p class="rating">Rating: {props.rating.rate}{props.rating.count}</p>
      <p class="product-card-price">{props.price}$</p>
      </div>
    </div>
  );
};

export default ProductCard;