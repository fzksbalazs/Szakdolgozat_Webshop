import { loginFailure, loginStart, loginSuccess, logout } from "./userRedux";
import { publicRequest, } from "../requestMethods";
import { clearCart, } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const Logout = async (dispatch) => {
  try {  
    dispatch(logout());
    dispatch(clearCart())
  } catch (err) {
    console.log(err)
  }
};

export const SuccessFullOrder = async (dispatch) => {
  try {  
    dispatch(clearCart())
  } catch (err) {
    console.log(err)
  }
};

// export const deleteCartItem = async (id, dispatch) => {
//   try {
//     const res = await userRequest.delete(`/products/${id}`);
//     dispatch(removeProduct(res.data));
//   } catch (err) {
   
//   }
// };

// export const register= async (user, dispatch) => {
//   dispatch(addUserStart());
//   try {
//     const res = await publicRequest.post(`/auth/register`, user);
//     dispatch(addUserSuccess(res.data));
//   } catch (err) {
//     dispatch(addUserFailure());
//   }
// };
