let express = require("express");
let app = express();
let bp = require("body-parser");
let path = require("path");
let session = require("express-session");
let port = 8000;

app.use(bp.json());
app.use(session({secret:"supersecretkey"}));
app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(bp.urlencoded({
    extended: true
  }));

require("./server/config/mongoose");
require("./server/config/routes")(app);

app.listen(port, function(){
    `We are listening on port ${port}`
})