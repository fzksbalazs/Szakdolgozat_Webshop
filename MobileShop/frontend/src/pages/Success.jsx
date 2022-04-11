
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { SuccessFullOrder } from "../redux/apiCalls";
import { clearCart } from "../redux/cartRedux";
import { userRequest } from "../requestMethods";

const Success = (e) => {
  
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        console.log(res.data)
        setOrderId(res.data._id);
        
      } catch(err) {console.log(err)}
    };
    data && createOrder();
    
  }, [cart, data, currentUser,],
  
  );

  const handleSuccess = () =>  {
    SuccessFullOrder(dispatch)
  }
  
 

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
      {orderId
        ? `Order has been created successfully. Your order number is ${orderId}`
        : `Successfull. Your order is being prepared...`}
        <a href="/">
      <button   style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </a>
    </div>
  );
};

export default Success;
