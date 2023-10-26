export const ProductItem = (props) => {
  const { product, handleProductDetails, handleCart} = props;
  return (
    <div className="col-3 mt-3">
      <div className="card cardItem">
        <img src={product.image} alt="" />
        <div className="cardInfo">
          <h4>{product.name}</h4>
          <p>Price: {product.price}$</p>
          <div className="d-flex justify-content-between btnAction">
            <button className="btn btn-success" onClick={() => {
              handleCart(product)
            }}>BUY</button>
            <button
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#detailsModal"
              onClick={() => {
                handleProductDetails(product);
              }}
            >
              DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
