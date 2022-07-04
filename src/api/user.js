// import axios from "axios";

const URL = "https://rab-rideabike.herouapp.com";


// export const signupUser = async (userDetails) => {
//     return axios.post(`${URL}/users/signup`, JSON.stringify(userDetails))
// };

export const signupUser = async(userDetails) => fetch(`${URL}/users/signup`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(userDetails)
})

