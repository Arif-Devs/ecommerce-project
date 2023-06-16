const express = require("express");
const app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/users", (req, res,) => {
    res.json([
        {
            "firstName": "Douglas Adams",
            "lastName": "rahman",
            "age": "33",
            "email": "douglas@gmail.com",
            "address": "moghbazar",

            
           
        }
    ]);
});