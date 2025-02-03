import "reflect-metadata";
import setupServer from "./server";

async function bootstrap() {
  const server = await setupServer();
  
  server.get('/', (req, res) => {
    res.send('Hello World!');
  });

  server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on localhost:${process.env.SERVER_PORT}`);
  });
}

bootstrap();
