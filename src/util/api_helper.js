const handleApiResponse = async (response) => {

    const content = await response.text();

    if(!content && response.status===200) {
        return{
            code: response.status,
            ok: true
        }
    }
    else{
        return{
            code: response.status,
            ok: false,
            error: 'Server Error'
        }

    }
}