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
  }).then(res=> {console.log(res); return res.json()}).then(data=>{return (data);}).catch(err=>null)},

  getSpells:function(charClass) {
    return fetch(`${apiURL}spells/${charClass}`).then(res => {
      console.log(res);
      switch(res.status){
        case 200:
          return res.json();
        default:
          return [];
      }
    }).catch(err => {
        console.error(err);
    })
  },

  saveSheet:function(sheetId, sheetState){
    return fetch(`${apiURL}sheets/${sheetId}`, {
      method:"POST",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: qs.stringify(sheetState)
    }).then(res=>{
      return res.json();
    }).catch(err=>{
      return err;
    })
  },

  loadSheet:function(sheetId){
    return fetch(`${apiURL}sheets/${sheetId}`).then(res=>{
      console.log(res);
      switch(res.status){
        case 200:
          return res.json();
        default:
          return null;
      }
    }).catch(err=>{
      console.log(err);
      return err;
    })
  }
}

module.exports = API;