import axios from "axios";

// const URL = "https://rab-rideabike.herokuapp.com";

const URL = "http://localhost:5051";

export const signupUser = async (userDetails) => {
    axios.post(`${URL}/users/signup`, JSON.stringify(userDetails))
};
