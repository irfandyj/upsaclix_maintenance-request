import "reflect-metadata";
import setupServer from "./server";

const PORT = 3000;

async function bootstrap() {
  const server = await setupServer();
  
  server.get('/', (req, res) => {
    res.send('Hello World!');
  });

  server.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
  });
}

bootstrap();
