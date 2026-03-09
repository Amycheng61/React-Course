import "./Login.css";
import { Link } from "react-router";
import { useState } from "react";
import Header from "./Header";

type HeaderProps = {
  cart: { productId: string; quantity: number; deliveryOptionId: string }[];
};

function Login( {cart}: HeaderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    // Add your login logic here
  };

  return (
    <>
    <Header cart={cart} />
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup">Create one</Link>
        </p>
      </div>
    </div>
    </>
  );
}

export default Login;