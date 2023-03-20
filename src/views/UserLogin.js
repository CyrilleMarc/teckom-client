import { Link } from "react-router-dom";
import "../assets/styles/form.css";

function UserLogin() {
  return (
    <div className="formLogin">
      <h1>LOGIN</h1>
      <form>
        <label>Email</label>
        <input type="email" />
        <label>Password</label>
        <input type="password" />
        <button>Submit</button>
      </form>
      <Link to="/userRegister">Create an account</Link>
    </div>
  );
}

export default UserLogin;
