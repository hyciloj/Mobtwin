import axios from 'axios'
import {LoginModel, RegisterModel} from '../models/AuthModel'
import {PropertiesReturnModel, UserModel} from '../models/UserModel'
import {FormDataLogin, FormDataRegister, FormDataResetPassword} from "../models/Props";

const API_URL = process.env.REACT_APP_CORE_API_URL || 'api'

export const LOGIN_URL = `${API_URL}login`
export const GET_USER_BY_ACCESS_TOKEN_URL = `${API_URL}profile`
export const REGISTER_URL = `${API_URL}register`
export const REQUEST_PASSWORD_URL = `${API_URL}forgot-password`
export const RESET_PASSWORD = `${API_URL}reset-password`
export const LOGOUT_URL = `${API_URL}logout`;

// Server should return AuthModel
export function login<T>({email, password}: FormDataLogin) {

  const FormData = require('form-data');
  let data = new FormData();
  data.append('email', email);
  data.append('password', password);

  return axios.post<LoginModel>(LOGIN_URL, data)
}

// Server should return AuthModel
export function register<T>({email, password}: FormDataRegister) {

  let data = new FormData();
  data.append('email', email);
  data.append('password', password);

  return axios.post<RegisterModel>(REGISTER_URL, data)
}

export function requestPassword({email}:{email: string}) {
  return axios.post<PropertiesReturnModel>(REQUEST_PASSWORD_URL, {email})
}

export function resetPassword<T>({email, password, token, password_confirmation}: FormDataResetPassword) {
  return axios.post<PropertiesReturnModel>(RESET_PASSWORD, {email, password, token, password_confirmation})
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.post<UserModel>(GET_USER_BY_ACCESS_TOKEN_URL)
}

export function logout() {
  return axios.post(LOGOUT_URL)
}
