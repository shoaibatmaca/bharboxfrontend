import { useEffect, useState } from 'react';

const DogProfile = () => {
  const [dog, setDog] = useState(null);
const API_URL = process.env.REACT_APP_API_URL 
  useEffect(() => {
    const fetchDog = async () => {
      const token = localStorage.getItem('access'); // or wherever your JWT is stored

      try {
        const res = await fetch('${API_URL}/api/dog/profile/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        const data = await res.json();
        setDog(data);
      } catch (error) {
        console.error('Failed to fetch dog profile', error);
      }
    };

    fetchDog();
  }, []);

  if (!dog) return <p>Loading dog profile...</p>;

  return (
    <div className="dog-profile-container">
      <div className="profile-header">
        <h1 className="theme-title ">{dog.name}'s Profile</h1>
        <button className="edit-profile-btn">
          <span className="edit-icon">✏️</span>
          Edit Profile
        </button>
      </div>

      <div className="dog-info-section animate-bottom">
        {/* <div className="dog-avatar">
          {dog.image && <img src={dog.image_url} alt="Dog" className="rounded-circle" />}
        </div> */}
        <div
  className="dog-avatar"
  style={{
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: '#eee',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {dog.image_url && (
    <img
      src={dog.image_url}
      alt="Dog"
      className="rounded-circle"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%',
      }}
    />
  )}
</div>


        <div className="dog-basic-info">
          <h2 className="dog-name">{dog.name}</h2>
          <p className="dog-details">
            {dog.primaryBreed} {dog.secondaryBreed ? `& ${dog.secondaryBreed}` : ''} • {dog.adoptionDate}
          </p>
          <div className="dog-size-badge">
            <span className="size-text">{dog.size} Dog</span>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="preferences-section animate-left">
          <h3 className="section-title">Preferences</h3>
          <div className="preference-item">
            <span className="preference-label">Toy Type:</span>
            <span className="preference-value">Plush Toys</span>
          </div>
          <div className="preference-item">
            <span className="preference-label">Activity Level:</span>
            <span className="preference-value">High Energy</span>
          </div>
          <div className="preference-item">
            <span className="preference-label">Chew Strength:</span>
            <span className="preference-value">Moderate</span>
          </div>
        </div>

        <div className="allergies-section animate-right">
          <h3 className="section-title">Allergies & Restrictions</h3>
          {dog.allergies?.map((item, i) => (
            <div className="allergy-item" key={i}>
              <span className="allergy-text">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DogProfile;
