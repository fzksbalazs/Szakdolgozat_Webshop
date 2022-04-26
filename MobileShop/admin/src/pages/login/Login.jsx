import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
    if(admin)
    { history.push("/welcome")}
    else {

    }
   
    
  };

  return (
    <div
      style={{
        backgroundImage: `url("https://cutewallpaper.org/23/admin-account-wallpaper-hd/115462483.jpg")`,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
      style={{
        backgroundColor: "white",
        boxShadow: "5px 7px 13px black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
      }}>
        <h1
        style={{
          padding: "5px",
          margin: "0px 0px 10px 0px",
        }}>
          BEJELENTKEZÉS
        </h1>
      <input
        style={{ padding: 15, marginBottom: 20}}
        type="text"
        name="username"
        placeholder="FELHASZNÁLÓNÉV"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 15, marginBottom: 20 }}
        name="password"
        type="password"
        placeholder="JELSZÓ"
        onChange={(e) => setPassword(e.target.value)}
      />
    
      <button  onClick={handleClick} style={{ padding: 10, width:170 , boxShadow: "1px 2px 10px black",}}>
        <h2>BEJELENTKEZÉS</h2>
      </button>
      
      </div>
    </div>
  );
};

export default Login;
