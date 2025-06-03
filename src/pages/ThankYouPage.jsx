import { Link } from 'react-router-dom';
// import thankYouImg from '../assets/thank-you-dog.png'; // 🐶 optional cute image

function ThankYouPage() {
  return (
    <div className="thank-you-container" style={styles.container}>
      {/* <img src={thankYouImg} alt="Thank You" style={styles.image} /> */}

      <h1 style={styles.heading}>Thank You for Your Order! 🎉</h1>
      <p style={styles.text}>
        Your subscription has been successfully received. Your dog is going to love it!
      </p>

      <Link to="/login" className="home-button" style={styles.button}>
        Go to Login
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '60px 20px',
    maxWidth: '600px',
    margin: '0 auto'
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1b4b91',
    marginBottom: '1rem'
  },
  text: {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '2rem'
  },
  image: {
    width: '200px',
    marginBottom: '1rem'
  },
  button: {
    backgroundColor: '#1b4b91',
    color: '#fff',
    padding: '12px 24px',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '1rem'
  }
};

export default ThankYouPage;
