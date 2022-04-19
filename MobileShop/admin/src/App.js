import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Analytics from "./pages/analytics/analytics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";

import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Welcome from "./pages/welcome/welcome";
import { Redirect } from "react-router-dom";

function App() {
  
   const admin = useSelector((state) => state.user.currentUser?.isAdmin);
   

  return (
    <Router>
      <Switch>
      {!admin && ( <> <Redirect to="/login"/>  
      <Route path="/login">         
          <Login  />
        </Route>
       
        </>)}

        

      { admin && (
        <>
        <Topbar />
      <div className="container">
        <Sidebar />
        <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/analytics">
            <Analytics />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
         
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          
     
      </div>
       </> )}
      </Switch>
    </Router>
  );
}

export default App;
