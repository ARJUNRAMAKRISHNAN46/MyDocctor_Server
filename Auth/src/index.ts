import server from "./presentation/server";
import dbConnection from "./infrastructure/database/dbConnection";
import { runConsumer } from "./infrastructure/kafka/consumer";

(async () => {
  try {
    console.log("🌿🌿🌿🌿🌿🌿🌿  Entry Point   🔰🔰🔰🔰🔰🔰🔰");

    server;
    await dbConnection().catch((error: any) => {
      console.log(error?.message);
      process.exit();
    });
    await runConsumer().catch(console.error);
  } catch (error: any) {
    console.log(error?.message);
  }
})();
