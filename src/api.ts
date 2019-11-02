import axios from "axios";
import {
  IGeneralStatisticsRequest,
  IMostPopularPostsRequest,
  IHashtagPopularityPrediction
} from "./Report/IReportRequest";

const api = axios.create({
  baseURL: "https://2wlmgufsdh.execute-api.us-east-1.amazonaws.com/test/",
  timeout: 10000,
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY
  }
});

export function getGeneralStatistics(
  data: IGeneralStatisticsRequest
): Promise<any> {
  return api.post("/generalstatistics", data);
}

export function getMostPopularPosts(
  data: IMostPopularPostsRequest
): Promise<any> {
  return api.post("/hashtagmostpopularposts", data);
}

export function getHashtagPopularityPrediction(
  data: IHashtagPopularityPrediction
): Promise<any> {
  return api.post("/hashtagpopularityprediction", data);
}
