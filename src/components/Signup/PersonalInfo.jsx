import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const PersonalInfo = () => {
  return (
    <div className="personal-info">
      <div className="heading">
        <p>Account Details</p>
        <span>Add your personal info</span>
      </div>
      <div className="third-party-buttons">
        <button>
          <FcGoogle />
          Sign in with Google
        </button>
        <button>
          <FaApple />
          Sign in with Apple
        </button>
      </div>
      <div className="divider">
        <p></p>
        Or with email
        <p></p>
      </div>
      <div className="input-container">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
      </div>
      <input type="text" placeholder="Creator Name" />
      <input type="email" placeholder="Email" />
      <input type="number" placeholder="Phone Nuumber" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <span className="checkbox-container">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms">
          I Accept the <a href="#">Terms</a>
        </label>
      </span>
      <button>Continue</button>
      <div className="have-account">
        Already have an Account? <a href="#">Sign in</a>
      </div>
    </div>
  );
};

export default PersonalInfo;
