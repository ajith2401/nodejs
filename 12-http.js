const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("home page");
    } else if (req.url === '/about') {
        res.end("about page");
    } else {
        res.end(`
        <h1>Ooops</h1>
        <p>We can't find the page you are looking for</p>
        <a href="/">Home page</a>`);
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
