const axios = require("axios");
module.exports={

    get:async function(codeProduct){
        const {data} = await axios.get("http://product:8080/product/"+codeProduct);
        return data[0];
    },
}