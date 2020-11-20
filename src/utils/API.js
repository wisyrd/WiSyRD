const qs = require('qs');
const apiURL = process.env.REACT_APP_API_URL || "http://lvh.me:8080/api/"


const API = {
    login:function(userData){
       console.log(userData); 
       return fetch(`${apiURL}users/login`, {
        method:"POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

        },
        body:(qs.stringify(userData))
    }).then(res=> {console.log(res);return res.json()}).then(data=>{console.log(data);}).catch(err=>null)
  } 
}

module.exports = API;