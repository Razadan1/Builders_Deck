import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to My App</h1>
      <p>Your gateway to amazing features!</p>
      <div>
        <Link to="/signin">
          <button style={{ margin: "10px" }}>Sign In</button>
        </Link>
        <Link to="/signup">
          <button style={{ margin: "10px" }}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
