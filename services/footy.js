const axios = require("axios");

const BASE = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;

const api = axios.create({
  baseURL: BASE,
  headers: {
    "X-API-Key": API_KEY
  }
});

exports.getLeagues = async () => {
  return await api.get("/leagues");
};

exports.getMatches = async (params) => {
  return await api.get("/matches", { params });
};

exports.getMatchById = async (id) => {
  return await api.get(`/match/${id}`);
};

