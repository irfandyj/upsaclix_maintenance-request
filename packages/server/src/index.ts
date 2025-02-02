import "reflect-metadata";
import server from './server';

const PORT = 3000;

server.get('/', (req, res) => {
  res.send('Hello World!');
});

server.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
