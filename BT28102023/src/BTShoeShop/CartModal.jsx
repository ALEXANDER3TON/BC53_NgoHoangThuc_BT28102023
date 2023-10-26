export const CartModal = (props) => {
  const { cart, handleCartQuantity, deleteProductFromCart} = props;
  return (
    <div>
      <div
        className="modal fade"
        id="cartModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Cart List
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {!cart.length && <h2>Vui Lòng Thêm Sản Phẩm</h2>}
              {!!cart.length && (
                <table className="table">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart?.map((product, index) => {
                      return (
                        <tr key={product.id}>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={product.image}
                              alt="..."
                              style={{ width: 100, height: 100 }}
                            />
                          </td>
                          <td>{product.name}</td>
                          <td>
                            <p style={{ width: 300 }}>{product.description}</p>
                          </td>
                          <td>{product.price}</td>
                          <td>
                            <button className="btn btn-success" onClick={() => {
                                handleCartQuantity(product.id, 1)
                            }}>+</button>
                            <span>{product.cartQuantity}</span>
                            <button className="btn btn-danger" onClick={() => {
                                handleCartQuantity(product.id, -1)
                            }}>-</button>
                          </td>
                          <td>{product.cartQuantity*product.price}</td>
                          <td>
                            <button className="btn btn-primary" onClick={() => {
                                deleteProductFromCart(product.id)
                            }}>x</button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
