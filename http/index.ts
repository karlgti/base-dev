import axios from "axios";

const api = axios.create({
  baseURL: "https://base-strapi.onrender.com",
});

const api2 = axios.create({
  baseURL: "https://api.twitter.com/2",
  headers: {
    Authorization: `Bearer ${"AAAAAAAAAAAAAAAAAAAAAGualAEAAAAA4HcksQD7%2FnV8W3ztoWAPTcH2V4M%3DAeQmNKoz3hk6cSRD52xPxyCFXkAqDcVo6F949BNsqx01VmRhot"}`,
  },
});

export const fetchArticle = async () =>
  api2.get(
    `/users/2840576778/tweets?max_results=5&tweet.fields=created_at&expansions=attachments.media_keys&media.fields=preview_image_url,url`
  );

//Insight Articles
export const fetchArticles = async () =>
  api.get(`/api/insights?populate=*&sort[0]=blog_id`);
