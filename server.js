const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const { token } = req.query;
  if (token === "api_tolkien") {
    res.json({
      msg: "Accepted token.",
      data: "Almost done, guys. Hang on a little longer =)",
    });
  }
  res.json({
    msg: "No API token or incorrect token sent. Request rejected.",
    data: null,
  });
});

app.listen(PORT, () => console.log("Server listening."));
