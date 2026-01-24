import app from "./app";
import { connectToDatabase } from "./lib/mongoose";

const PORT = Number(process.env.PORT) || 4000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  });
