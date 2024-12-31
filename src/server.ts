import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import config from "./app/config";

async function main(): Promise<void> {
  const port = process.env.PORT || config.port;

  try {
    // connect to the database
    await mongoose.connect(config.db_url as string);

    // start the express server
    const server: Server = app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    // log any errors that occur during startup
    console.log(err);
  }
}

// call the main function
main();
