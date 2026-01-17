import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT || 8080;
app.use((req, res, next) => {
  console.log("REQ:", req.method, req.url);
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
