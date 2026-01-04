import React from "react";

function Receipt({ receipt }) {
  if (!receipt) return null;

  const {
    receiptNumber,
    date,
    seller,
    buyer,
    vehicle,
    sale
  } = receipt;

  return (
    <div className="container my-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">CAR SALE RECEIPT</h2>

        {/* Receipt Info */}
        <div className="d-flex justify-content-between mb-3">
          <div>
            <strong>Receipt No:</strong> {receiptNumber}
          </div>
          <div>
            <strong>Date:</strong> {date}
          </div>
        </div>

        <hr />

        {/* Seller & Buyer */}
        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Seller Information</h5>
            <p><strong>Name:</strong> {seller.name}</p>
            <p><strong>Phone:</strong> {seller.phone}</p>
            <p><strong>Address:</strong> {seller.address}</p>
          </div>

          <div className="col-md-6">
            <h5>Buyer Information</h5>
            <p><strong>Name:</strong> {buyer.name}</p>
            <p><strong>Phone:</strong> {buyer.phone}</p>
            <p><strong>ID No:</strong> {buyer.idNumber}</p>
          </div>
        </div>

        <hr />

        {/* Vehicle Details */}
        <h5>Vehicle Details</h5>
        <table className="table table-bordered mb-3">
          <tbody>
            <tr>
              <td><strong>Make</strong></td>
              <td>{vehicle.make}</td>
              <td><strong>Model</strong></td>
              <td>{vehicle.model}</td>
            </tr>
            <tr>
              <td><strong>Year</strong></td>
              <td>{vehicle.year}</td>
              <td><strong>Color</strong></td>
              <td>{vehicle.color}</td>
            </tr>
            <tr>
              <td><strong>Engine No</strong></td>
              <td>{vehicle.engineNo}</td>
              <td><strong>Chassis / VIN</strong></td>
              <td>{vehicle.chassisNo}</td>
            </tr>
            <tr>
              <td><strong>Registration No</strong></td>
              <td>{vehicle.registrationNo}</td>
              <td><strong>Fuel Type</strong></td>
              <td>{vehicle.fuel}</td>
            </tr>
            <tr>
              <td><strong>Mileage</strong></td>
              <td colSpan="3">{vehicle.mileage}</td>
            </tr>
          </tbody>
        </table>

        <hr />

        {/* Sale Details */}
        <h5>Sale Details</h5>
        <table className="table table-bordered mb-3">
          <tbody>
            <tr>
              <td><strong>Sale Price</strong></td>
              <td>{sale.price}</td>
            </tr>
            <tr>
              <td><strong>Payment Method</strong></td>
              <td>{sale.paymentMethod}</td>
            </tr>
            <tr>
              <td><strong>Transaction Reference</strong></td>
              <td>{sale.transactionRef}</td>
            </tr>
          </tbody>
        </table>

        <hr />

        {/* Declaration */}
        <p>
          <strong>Declaration:</strong><br />
          I, the seller, confirm that I am the lawful owner of the vehicle described
          above and that it is sold as-is with no outstanding loans or encumbrances.
        </p>

        <hr />

        {/* Signatures */}
        <div className="row mt-4">
          <div className="col-md-6 text-center">
            <p>__________________________</p>
            <p><strong>Seller Signature</strong></p>
          </div>
          <div className="col-md-6 text-center">
            <p>__________________________</p>
            <p><strong>Buyer Signature</strong></p>
          </div>
        </div>

        <p className="text-center mt-4">
          <em>Thank you for your business</em>
        </p>
      </div>
    </div>
  );
}

export default Receipt;


 <div className="container my-4">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">CAR SALE RECEIPT</h2>

        {/* Receipt Info */}
        <div className="d-flex justify-content-between mb-3">
          <div>
            <strong>Receipt No:</strong> 
          </div>
          <div>
            <strong>Date:</strong> 
          </div>
        </div>

        <hr />

        {/* Seller & Buyer */}
        <div className="row mb-3">
          <div className="col-md-6">
            <h5>Seller Information</h5>
            <p><strong>Name:</strong></p>
            <p><strong>Phone:</strong> </p>
            <p><strong>Address:</strong> </p>
          </div>

          <div className="col-md-6">
            <h5>Buyer Information</h5>
            <p><strong>Name:</strong> </p>
            <p><strong>Phone:</strong> </p>
            <p><strong>ID No:</strong> </p>
          </div>
        </div>

        <hr />

        {/* Vehicle Details */}
        <h5>Vehicle Details</h5>
        <table className="table table-bordered mb-3">
          <tbody>
            <tr>
              <td><strong>Make</strong></td>
              <td></td>
              <td><strong>Model</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Year</strong></td>
              <td></td>
              <td><strong>Color</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Engine No</strong></td>
              <td></td>
              <td><strong>Chassis / VIN</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Registration No</strong></td>
              <td></td>
              <td><strong>Fuel Type</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Mileage</strong></td>
              <td colSpan="3"></td>
            </tr>
          </tbody>
        </table>

        <hr />

        {/* Sale Details */}
        <h5>Sale Details</h5>
        <table className="table table-bordered mb-3">
          <tbody>
            <tr>
              <td><strong>Sale Price</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Payment Method</strong></td>
              <td></td>
            </tr>
            <tr>
              <td><strong>Transaction Reference</strong></td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <hr />

        {/* Declaration */}
        <p>
          <strong>Declaration:</strong><br />
          I, the seller, confirm that I am the lawful owner of the vehicle described
          above and that it is sold as-is with no outstanding loans or encumbrances.
        </p>

        <hr />

        {/* Signatures */}
        <div className="row mt-4">
          <div className="col-md-6 text-center">
            <p>__________________________</p>
            <p><strong>Seller Signature</strong></p>
          </div>
          <div className="col-md-6 text-center">
            <p>__________________________</p>
            <p><strong>Buyer Signature</strong></p>
          </div>
        </div>

        <p className="text-center mt-4">
          <em>Thank you for your business</em>
        </p>
      </div>
    </div>