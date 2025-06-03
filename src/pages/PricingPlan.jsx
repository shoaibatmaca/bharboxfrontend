import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import yearly from '../assets/12-month-img-subs.png';
import sixMonthls from '../assets/6-month-subscription.png';
import monthly from '../assets/monthly-subscription.png';
import guaranteeBadge from '../assets/scouts-img.png';

function SubscriptionPlanStep() {
  const [billingType, setBillingType] = useState('monthly'); // 'monthly' or 'prepay'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.siteData?.contact?.email || '';

  const plans = {
    monthly: [
      {
        label: '12 Month Subscription',
        subLabel: 'DOUBLE DELUXE',
        price: '$29/mo.',
        tag: 'BEST VALUE',
        value: '12mo',
      },
      {
        label: '6 Month Subscription',
        subLabel: 'DOUBLE DELUXE',
        price: '$35/mo.',
        value: '6mo',
      },
      {
        label: 'Monthly Subscription',
        price: '$45/mo.',
        value: 'monthly',
      },
    ],
    prepay: [
      {
        label: '12 Month Subscription',
        subLabel: 'DOUBLE DELUXE',
        price: '$26.10/mo',
        yearly: '$313.20/year',
        tag: 'SAVE $34.80!',
        value: '12mo-prepay',
      },
      {
        label: '6 Month Subscription',
        subLabel: 'DOUBLE DELUXE',
        price: '$31.50/mo',
        yearly: '$189.00/6 months',
        tag: 'SAVE $21.00!',
        value: '6mo-prepay',
      },
    ],
  };

  const handleToggle = () => {
    setBillingType((prev) => (prev === 'monthly' ? 'prepay' : 'monthly'));
    setSelectedPlan(null); 
  };

  const handleContinue = () => {
    if (selectedPlan) {
      navigate('/checkout', {
        state: {
    billingType,
    selectedPlan,
    email
  }      });
    }
  };

  return (
    <div className="subscription-container">
      <h1 className='theme-title'>Choose a 6 or 12 Mo. Plan and Get Double Your First Box!</h1>

      <div className="billing-toggle">
        <span className={billingType === 'monthly' ? 'active' : ''}>Monthly</span>
        <div className="toggle-switch" onClick={handleToggle}>
          <div className={`toggle-circle ${billingType === 'prepay' ? 'right' : ''}`} />
        </div>
        <span className={billingType === 'prepay' ? 'active' : ''}>
          Prepay <span className="save-label">SAVE 10%</span>
        </span>
      </div>

      <div className="plans">
        {plans[billingType].map((plan, index) => (
          <div
            key={index}
            className={`plan-card ${selectedPlan === plan.value ? 'selected' : ''}`}
            onClick={() => setSelectedPlan(plan.value)}
          >
            {plan.tag && <div className="tag">{plan.tag}</div>}

            <img
              src={
                billingType === 'monthly'
                  ? index === 0
                    ? yearly
                    : index === 1
                    ? sixMonthls
                    : monthly
                  : index === 0
                  ? yearly
                  : sixMonthls
              }
              alt="Plan Icon"
              className="plan-icon"
            />

            <h4>{plan.label}</h4>
            {plan.subLabel && <p className="sub-label">{plan.subLabel}</p>}
            <p className="price">{plan.price}</p>
            {plan.yearly && <p className="yearly">{plan.yearly}</p>}
          </div>
        ))}
      </div>

      <div className="guarantee">
        <img src={guaranteeBadge} alt="Scout's Honor" />
        <p>
          <strong>100% Happy Guarantee</strong><br />
          If a toy isn't tough enough, we'll replace it, 100% free of charge. No proof needed.
          No time limits. No questions asked.
        </p>
      </div>

      <p className="billing-note">
        {billingType === 'monthly'
          ? 'Plans are billed monthly and automatically renew.'
          : 'Pay upfront and automatically renews.'}
        <br />
        You are committing to the length of your Super Chewer plan.
      </p>

      <button
        className="continue-button"
        disabled={!selectedPlan}
        onClick={handleContinue}
      >
        CONTINUE
      </button>
    </div>
  );
}

export default SubscriptionPlanStep;
