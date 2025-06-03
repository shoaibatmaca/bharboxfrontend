import axios from 'axios';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sendEmail } from '../utils/sendEmail'; // 👈 import at the top

function CheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
const { billingType, selectedPlan, email: passedEmail } = location.state || {};



  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: passedEmail || '',
    country: 'United States',
    address: '',
    city: '',
    state: '',
    zip: '',
    useShippingAsBilling: true,
    instructions: '',
  });

  const planDetails = {
    '12mo': { title: '12 Month Subscription', price: '$29.00' },
    '6mo': { title: '6 Month Subscription', price: '$35.00' },
    'monthly': { title: 'Monthly Subscription', price: '$45.00' },
    '12mo-prepay': { title: '12 Month Prepay Subscription', price: '$313.20' },
    '6mo-prepay': { title: '6 Month Prepay Subscription', price: '$189.00' },
  };

  const selected = planDetails[selectedPlan] || {};
  const API_URL = process.env.REACT_APP_API_URL || 'https://bharbhoxbackend-production.up.railway.app';

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      billing_type: billingType,
      selected_plan: selectedPlan,
      email: form.email,
      first_name: form.firstName,
      last_name: form.lastName,
      address: form.address,
      city: form.city,
      state: form.state,
      zip: form.zip,
      use_shipping_as_billing: form.useShippingAsBilling,
      payment_method: 'Cash on Delivery',
    };

    try {
  const response = await axios.post(`${API_URL}/api/checkout/`, payload);
  console.log('✅ Order placed:', response.data);

  await sendEmail("order_confirmation", form.email, {
  name: `${form.firstName} ${form.lastName}`,
  plan: selected.title,
  price: selected.price,
  address: `${form.address}, ${form.city}, ${form.state}, ${form.zip}`,
});


  navigate('/thank-you');
} catch (err) {
  console.error('❌ Order failed:', err.response?.data || err.message);
  alert('Order failed. Please try again.');
}


  };

  return (
    <div className="checkout-container">
      <div className="checkout-left col-lg-6">
        <h2 className="theme-title">Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            required
          />

          <div className="input-row">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              value={form.zip}
              onChange={handleChange}
              required
            />
          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              name="useShippingAsBilling"
              checked={form.useShippingAsBilling}
              onChange={handleChange}
            />
            Use shipping address as billing address
          </label>

          <h3 className="theme-title">Cash on Delivery</h3>

          <button type="submit" className="pay-button">Confirm Order</button>
        </form>
      </div>

      <div className="checkout-right col-lg-6">
        <div className="order-summary">
          <h4>Order Summary</h4>
          <div className="summary-item">
            <div>
              <strong>{selected.title || 'BarkBox Monthly Subscription'}</strong><br />
              Includes 2 toys, 2 treats, 1 chew. Free shipping.
            </div>
            <div>{selected.price || '$35.00'}</div>
          </div>
          <div className="discount-box">
            <input type="text" placeholder="Discount code or gift card" />
            <button className="apply-code">Apply</button>
          </div>
          <div className="summary-total">
            <div>Subtotal:</div>
            <div>{selected.price || '$35.00'}</div>
          </div>
          <div className="summary-total bold">
            <div>Total:</div>
            <div>{selected.price || '$35.00'}</div>
          </div>
          {selectedPlan === 'monthly' && (
            <p className="recurring-note">Recurring subtotal: $45.00/month</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
