import axios from 'axios'

const API_URL = "http://localhost:8080/api/auth/"

const Register = (username, email, password) => {
   
    return axios.post(API_URL, {
        username,
        email,
        password
    })

   
}

const Login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const Logout = () => {
  localStorage.removeItem("user");
};

export const authServices = { Register, Login, Logout };