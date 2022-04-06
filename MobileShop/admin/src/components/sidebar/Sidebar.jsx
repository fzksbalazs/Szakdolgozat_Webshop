import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  Storefront,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Általános</h3>
          <ul className="sidebarList">
            <Link to="/welcome" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Welcome Page
            </li>
            </Link>        
          </ul>
          <ul className="sidebarList">
            <Link to="/analytics" className="link">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" />
              Analytics
            </li>
            </Link>        
          </ul>
          
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Hozzáadás/Törlés/Szerkesztés</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </Link>        
          </ul>
        </div>     
      </div>
    </div>
  );
}
