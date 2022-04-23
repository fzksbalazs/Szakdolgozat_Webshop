import "./welcome.css";
import { useSelector } from "react-redux";


  


export default function Welcome() {
  const admin = useSelector((state) => state.user.currentUser)

  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    
    
    <div className="home">

      <h1 className="title" >ADMIN OLDAL</h1>
      <h1 className="welcomeTo">Üdvözöljük az admin oldalon,  {admin.username}!</h1>
      <h2 className="email">({admin.email})</h2>
      <p className="email">Az oldal összes komponensének megfelelő betöltéséhez, kérem frissitse az oldalt! </p>
      <button className="button" onClick={refreshPage}>FRISSITÉS!</button>

      
  
    </div>

  );
}
