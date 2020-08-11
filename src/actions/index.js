import {AUTH_USER,AUTH_ERROR} from './types';
import axios from 'axios';

//signup action
//------------------
export const signup = (formProps,callback)=> async (dispatch)=>{
const response = await axios.post('http://localhost:3090/signup',formProps);
try {
dispatch ({type:AUTH_USER, payload: response.data.token});
localStorage.setItem('token',response.data.token);
callback();
}
catch (e){
  dispatch ({type:AUTH_ERROR, payload:'Error - invalid Email or Password'})
}
};

export const signout = ()=>{
  localStorage.removeItem('token');
  return {type:AUTH_USER,payload:''};
}

export const signin = (formProps,callback)=> async (dispatch)=>{
  const response = await axios.post('http://localhost:3090/signin',formProps);
  try {
  dispatch ({type:AUTH_USER, payload: response.data.token});
  localStorage.setItem('token',response.data.token);
  callback();
  }
  catch (e){
    dispatch ({type:AUTH_ERROR, payload:'Error - invalid Email or Password'})
  }
  };