import React from 'react';

const OrderSuccess = ({ onClose }) => {
  return (
    <div className="orderSuccessOverlay">
      <div className="orderSuccessCard">
        <h2>Order Placed Successfully!</h2>
        <p>Your order has been placed and will be delivered soon.</p>
        <button onClick={onClose} className="closeSuccessButton">
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
