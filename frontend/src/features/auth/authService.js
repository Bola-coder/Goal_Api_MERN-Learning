import axios from "axios";

const API_URL = "http://localhost:5000/api/users/register";

// Register User
// const register = async (userData) => {
//   const response = await axios.post(API_URL, userData);
//   if (response.data) {
//     localStorage.setItem("user", JSON.stringify(response.data));
//   }

//   return response.data;
// };
const register = (userData) => {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
    }).catch(err =>{ console.log(err)})
};

const authService = {
  register,
};

export default authService;
