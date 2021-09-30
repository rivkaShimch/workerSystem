import $ from "jquery";

const getUser = (id) => {
    $.ajax({
        url: "https://goofy-ride-8664d8.netlify.app/.netlify/functions/api/getUser",
        type: 'POST',
        body:{id},
        success: function (data) {
            console.log("the user", data.user);
            return data.user
        },
        error: function (err) {
            console.log("error", err);
            return "error"
        }
    })
   
   
    // return fetch("https://goofy-ride-8664d8.netlify.app/.netlify/functions/api/getUser",
    //     {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         "id": id
    //             })
    //     }
    //     .then((res) => {
    //         return res.json();
    //     })
    //     .then((result) => {
    //         console.log("user from getUser", result.user)
    //         return result.user
    //     }, (err) => {
    //         console.log("error", err);
    //     })
    // )
    }   
module.exports= {getUser}