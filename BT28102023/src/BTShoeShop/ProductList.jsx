import { ProductItem } from "./ProductItem";

export const ProductList = (props) => {
  const { data, handleProductDetails, handleCart} = props;
  return (
    <div className="row">
      {data.map((product) => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            handleProductDetails={handleProductDetails}
            handleCart={handleCart}
          />
        );
      })}
    </div>
  );
};
