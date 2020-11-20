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
} ,

create:function(userData){
  console.log(userData); 
  return fetch(`${apiURL}users/`, {
   method:"POST",
   headers: {
       'Content-Type': 'application/x-www-form-urlencoded',

   },
   body:(qs.stringify(userData))
}).then(res=> {console.log(res);return res.json()}).then(data=>{return (data);}).catch(err=>null)
} 
//want a get route called "sheets" that returns all of a user's sheets (and especially the keys of the character's name and the link to the page of the sheet itself) when given the userID
  
  //want a post route called "newSheet" that makes a new character sheet that has a name and class immediately associated with said sheet
}

module.exports = API;