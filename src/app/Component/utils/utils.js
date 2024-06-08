const createConfig = (url, accessToken) => {
    return {
        method: 'get',
        url, url,
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-type': 'application/json'
        },
    }
};

export default createConfig;