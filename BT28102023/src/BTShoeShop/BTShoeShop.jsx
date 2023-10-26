import { useState } from "react";
import { ProductDetails } from "./ProductDetails";
import { ProductList } from "./ProductList";
import data from "./data.json";
import "../css/style.css";
import { CartModal } from "./CartModal";

export const BTShoeShop = () => {
  const [productDetails, setProductDetails] = useState({
    id: 1,
    name: "",
    alias: "",
    price: 350,
    description: "",
    shortDescription: "",
    quantity: 0,
    image: "",
    cartQuantity: 1, //so luong mua
  });
  const handleProductDetails = (product) => {
    setProductDetails(product);
  };

  const [cart, setCart] = useState([]);
  const handleCart = (product) => {
    setCart((preState) => {
      const index = preState.findIndex(value => value.id === product.id);
      if (index === -1) {
        preState.push({...product, cartQuantity:1})
      } else {
        preState[index].cartQuantity += 1;
      }
      console.log(preState);
      return [...preState];
    });
  };
  const handleCartQuantity = (productID, quantity) => {
    setCart((preState) => {
      const index = preState.findIndex((value) => value.id === productID);
      preState[index].cartQuantity =
        preState[index].cartQuantity + quantity || 1;
      return [...preState];
    });
  };

  const deleteProductFromCart = (productID) => {
    setCart((preState) => {
      return preState.filter((value) => value.id !== productID);
    });
  };

  const handleTotalQuantity = (cart) => {
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].cartQuantity;
    }
    return sum;
  };
  return (
    <div className="container mt-3">
      <div className="content">
        <h2>SHOE SHOP</h2>
        <div
          className="cart"
          data-bs-toggle="modal"
          data-bs-target="#cartModal"
        >
          <i className="fa-solid fa-cart-shopping fs-1" />
          <span className="cartNum">{handleTotalQuantity(cart)}</span>
        </div>

        <ProductList
          data={data}
          handleProductDetails={handleProductDetails}
          handleCart={handleCart}
        />
      </div>
      <ProductDetails productDetails={productDetails} />
      <CartModal
        cart={cart}
        handleCartQuantity={handleCartQuantity}
        deleteProductFromCart={deleteProductFromCart}
      />
    </div>
  );
};
