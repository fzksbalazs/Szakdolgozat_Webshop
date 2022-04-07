import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../redux/apiCalls";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const history = useHistory();
  const admin = useSelector((state) => state.user.currentUser?.isAdmin);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    history.push("/welcome")
    
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        name="password"
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
    
      <button  onClick={handleClick} style={{ padding: 10, width:100 }}>
        Login
      </button>
      
      {error === true && <span >Something went wrong....</span>}
    </div>
  );
};

export default Login;
