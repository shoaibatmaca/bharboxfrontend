const OrderConfirmationEmail = ({ name, plan, price, address }) => (
  <div style={{ fontFamily: 'Arial', padding: '20px', background: '#f5f5f5' }}>
    <h2 style={{ color: '#4CAF50' }}>🎉 Order Confirmed!</h2>
    <p>Hi {name},</p>
    <p>Thanks for your BarkBox order. Here’s a quick summary:</p>
    <ul>
      <li><strong>Plan:</strong> {plan}</li>
      <li><strong>Price:</strong> {price}</li>
      <li><strong>Shipping Address:</strong><br />{address}</li>
    </ul>
    <p>We’re getting everything ready. You'll get another email when your BarkBox is on the way 🚚</p>
    <p style={{ marginTop: '30px' }}>With love,<br />The BarkBox Team</p>
  </div>
);

export default OrderConfirmationEmail;

// const OrderConfirmationEmail = ({ name, plan, price, address }) => `
//   <div style="font-family:Arial,sans-serif;padding:20px;background:#f5f5f5;">
//     <h2 style="color:#4CAF50;">🎉 Order Confirmed, ${name}!</h2>
//     <p>Thank you for your order of <strong>${plan}</strong>.</p>
//     <p>Total charged: <strong>${price}</strong></p>
//     <p>Shipping to: ${address}</p>
//     <p>We’ll notify you when it’s on the way 🐶</p>
//     <p style="margin-top:30px;">Cheers,<br/>The BarkBox Team</p>
//   </div>
// `;

// export default OrderConfirmationEmail;
