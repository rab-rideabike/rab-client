const URL = '';

export const signupUser = async(userDetails) => fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(userDetails)
})

