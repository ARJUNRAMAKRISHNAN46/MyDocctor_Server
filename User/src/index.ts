import server from "./presentation/server";
import dbConnection from "./infrastructure/database/dbConnection";

(async () => {
  try {
    server;
    await dbConnection().catch((err: any) => {
      console.log(err?.message);
      process.exit(1);
    });
  } catch (error: any) {
    console.log(error?.message);
  }
})();
