import server from "./presentation/server";
import dbConnection from "./infrastructure/database/dbConnection";
import { runConsumer } from "./infrastructure/kafka/consumers/userConsumer";

(async () => {
  try {
    server;
    await dbConnection().catch((err: any) => {
      console.log(err?.message);
      process.exit(1);
    });
    await runConsumer().catch(console.error);
  } catch (error: any) {
    console.log(error?.message);
  }
})();
