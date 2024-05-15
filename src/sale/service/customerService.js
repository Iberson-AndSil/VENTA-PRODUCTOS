const axios = require("axios");
module.exports={

    get:async function(dni){
        const {data} = await axios.get("http://customer:8080/customer/"+dni);
        return data;
    },
}