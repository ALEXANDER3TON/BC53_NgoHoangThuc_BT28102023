export const ProductDetails = (props) => {
    const {productDetails} = props
  return (
    <div>
      <div
        className="modal fade"
        id="detailsModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src={productDetails.image} alt="..." />
                </div>
                <div className="col-6">
                    <p className="fw-bold fs-4">{productDetails.name}</p>
                    <p className="">{productDetails.description}</p>
                    <p className="fw-bold">Quantity: {productDetails.quantity}</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
