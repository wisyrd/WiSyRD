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
    }).then(res=> {console.log(res);return res.json()}).then(data=>{return (data);}).catch(err=>null)
  }, 

  getProfile:function(token){
    return fetch(`${apiURL}users/secretProfile`, {
     method:"GET",
     headers: {
         'authorization': `Bearer ${token}`

     },
 }).then(res=> {console.log(res);return res.json()}).then(data=>{return (data);}).catch(err=>null)
},

create:function(userData){
  console.log(userData); 
  return fetch(`${apiURL}users/`, {
   method:"POST",
   headers: {
       'Content-Type': 'application/x-www-form-urlencoded',

   },
   body:(qs.stringify(userData))
}).then(res=> {
  console.log(res);
  switch (res.status) {
    case 200:
    case 204:
      return res.json() 
    case 400:
      throw new Error(res.body); 
    default:
      throw new Error(res.body); 
  };
}).catch(err=>{console.error(err);return err})},

getSheets:function(userID){
  return fetch(`${apiURL}sheets/ownedby/${userID}`, {
    method:"GET",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',

  }
  }).then(res=> {console.log(res);return res.json()}).then(data=>{return (data);}).catch(err=>null)},

newSheets:function(newSheet){
  return fetch(`${apiURL}sheets`, {
    method:"POST",
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',

  },
  body:(qs.stringify(newSheet))
  }).then(res=> {console.log(res); return res.json()}).then(data=>{return (data);}).catch(err=>null)}
}

module.exports = API;