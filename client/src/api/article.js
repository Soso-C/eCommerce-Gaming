import axios from "axios";

// Get Article by id
export async function getArticleById(urlEndPoint) {
  const articleResponse = await axios.get(urlEndPoint);
  if (!articleResponse) return "sorry, couldn’t load articles";
  return articleResponse.data.data;
}

// Get all Articles
export async function getArticles() {
  const articleResponse = await axios.get("http://localhost:3001/api/articles");
  if (!articleResponse) return "sorry, couldn’t load articles";
  return articleResponse.data.data;
}

// Get Nouveautés

export async function getNewsProd() {
  const articleResponse = await axios.get(
    "http://localhost:3001/api/articles/newArticles"
  );
  if (!articleResponse) return "sorry, couldn’t load articles";
  return articleResponse.data.data;
}

// Get BestSelling

export async function getBestSelling() {
  const articleResponse = await axios.get(
    "http://localhost:3001/api/articles/bestArticles"
  );
  if (!articleResponse) return "sorry, couldn’t load articles";
  return articleResponse.data.data;
}
