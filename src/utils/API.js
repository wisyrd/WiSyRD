const API = {
    login:function(userData){
       console.log(userData); 
       return fetch("   ", {
        method:"POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(userData)
    }).then(res=> res.json()).catch(err=>null)
  } 
}

module.exports = API;