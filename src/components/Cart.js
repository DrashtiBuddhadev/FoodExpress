import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice"; // Import actions
import OrderSuccess from "./OrderSuccess";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // Get cart items from the store
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleRemoveItem = (index) => {
    dispatch(removeItem(index));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validate address and payment method
    let errors = {};
    if (!address) errors.address = "Delivery address is required.";
    if (!paymentMethod) errors.paymentMethod = "Payment method is required.";
    setFormErrors(errors);

    // Check if there are no errors
    if (Object.keys(errors).length === 0) {
      // Mark order as placed
      setOrderPlaced(true);
      // Proceed with submission logic (could be added as per requirements)
      console.log("Address:", address);
      console.log("Payment Method:", paymentMethod);
    }
  };

  const handleCloseSuccess = () => {
    setOrderPlaced(false); // Close success card
    dispatch(clearCart()); // Optionally clear the cart after order is placed
  };

  if (!cartItems.length) {
    return <p>Your cart is empty.</p>; // Show a message when the cart is empty
  }

  return (
    <div className="cartPage">
      <div className="cartLeftSection">
        {/* Delivery Address Section */}
        <div className="cartStep">
          <h3>Delivery Address</h3>
          <form onSubmit={handleFormSubmit}>
            <textarea
              placeholder="Enter your delivery address here"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {formErrors.address && (
              <p className="error">{formErrors.address}</p>
            )}
          </form>
        </div>

        {/* Payment Section */}
        <div className="cartStep">
          <h3>Payment</h3>
          <form>
            <div className="paymentOptions">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="UPI"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                UPI
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="GPay"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                GPay
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Paytm"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                Paytm
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                />
                Cash on Delivery
              </label>
            </div>
            {formErrors.paymentMethod && (
              <p className="error">{formErrors.paymentMethod}</p>
            )}
          </form>
        </div>

        {/* Bill Details */}
        <div className="cartBillDetails">
          <h3>Bill Details</h3>
          <p>
            Item Total: ₹
            {cartItems.reduce(
              (total, item) =>
                total + (item.price / 100 || item.defaultPrice / 100),
              0
            )}
          </p>
          <p>Delivery Fee: ₹66</p> {/* Example delivery fee */}
          <p className="cartTotal">
            To Pay: ₹
            {cartItems.reduce(
              (total, item) =>
                total + (item.price / 100 || item.defaultPrice / 100),
              0
            ) + 66}
          </p>
        </div>
        <br />
        <br />

        {/* Submit Order Button */}
        <button className="submitOrderButton" onClick={handleFormSubmit}>
          Place Order
        </button>
      </div>

      <div className="cartRightSection">
        <div className="cartHeader">
          <h2>Your Cart</h2>
          <button className="clearCartButton" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
        <div className="cartItems">
          {cartItems.map((item, index) => (
            <div key={index} className="cartItem">
              <div className="cartItemDetails">
                <h2>{item.name}</h2>
                <p>₹{item.price / 100 || item.defaultPrice / 100}</p>
                <p>{item.description}</p>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="removeItemButton"
                >
                  Remove
                </button>
              </div>
              <div className="cartItemImage">
                <img
                  src={
                    item.imageId
                      ? `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_150,h_150,c_fit/${item.imageId}`
                      : "default_image.jpg"
                  }
                  alt={item.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Show Order Success Card */}
      {orderPlaced && <OrderSuccess onClose={handleCloseSuccess} />}
    </div>
  );
};

export default Cart;
