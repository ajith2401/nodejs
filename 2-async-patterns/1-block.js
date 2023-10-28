const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    for(let i=0;i<1000;i++){
        for(let j=0;i<1000;j++){
            console.log(`${i} ${j}`)
        }
    }
    res.end("about page");
  } else {
    res.end("error page");
  }
});

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
