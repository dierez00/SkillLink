import app from "./src/app.js";
import consumeMessages from "./src/services/rabbitServiceEvent.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT || 5000);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

consumeMessages();
