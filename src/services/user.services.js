const getUser = (id) => {
    return fetch("https://goofy-ride-8664d8.netlify.app/.netlify/functions/api/getUser",
        {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id": id
                })
        }
        .then((res) => {
            return res.json();
        })
        .then((result) => {
            console.log("user from getUser", result.user)
            return result.user
        }, (err) => {
        })
    )
    }   
module.exports= {getUser}