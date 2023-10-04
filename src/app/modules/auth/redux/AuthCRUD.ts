import axios from 'axios'
import {LoginModel, RegisterModel} from '../models/AuthModel'
import {UserModel} from '../models/UserModel'
import {FormDataLogin, FormDataRegister} from "../models/Props";

const API_URL = process.env.REACT_APP_API_URL || 'api'

export const GET_USER_BY_ACCESS_TOKEN_URL = `${API_URL}profile`
export const LOGIN_URL = `${API_URL}login`
export const REGISTER_URL = `${API_URL}register`
export const REQUEST_PASSWORD_URL = `${API_URL}/auth/forgot-password`

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
  // data.append('password_confirmation', passwordConfirmation);
  // data.append('first_name', firstName);
  // data.append('last_name', lastName);

  return axios.post<RegisterModel>(REGISTER_URL, data)
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {email})
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  // Check common redux folder => setupAxios
  return axios.post<UserModel>(GET_USER_BY_ACCESS_TOKEN_URL)
}
