import http from 'http';

const REDIRECT_TO = process.env.REDIRECT_TO;

const server = http.createServer((_req, res) => {
	if (REDIRECT_TO) {
		res.writeHead(302, { Location: REDIRECT_TO });
		res.end();
		return;
	}
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World');
});

server.listen(80, () => {
	console.log('Server is running on port 80');
});
