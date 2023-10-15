const express = require("express");
const cors = require("cors");
const axios = require("axios"); // Don't forget to import axios

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "ff36c596-f3db-467a-ae92-045de129bdd0" } }
    );
    return res.status(200).json(response.data); // 200 for success
  } catch (error) {
    return res.status(500).json({ error: error.message }); // 500 for internal server error
  }
});

app.listen(3001);
