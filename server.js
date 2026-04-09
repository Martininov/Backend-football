require("dotenv").config();
const express = require("express");
const cors = require("cors");

const footy = require("./services/footy");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Football Backend OK ✅");
});

// 🏆 Leagues
app.get("/api/leagues", async (req, res) => {
  try {
    const response = await footy.getLeagues();
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// 📅 Matches
app.get("/api/matches", async (req, res) => {
  try {
    const { date, tz } = req.query;
    const response = await footy.getMatches({ date, tz });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

// ⚽ Single Match
app.get("/api/match/:id", async (req, res) => {
  try {
    const response = await footy.getMatchById(req.params.id);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.response?.data || error.message });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
