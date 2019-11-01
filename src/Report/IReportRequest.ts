export interface IReportRequest {
  hashtag: string;
  email: string;
}

export interface ITimePeriod {
  startTime: string;
  endTime: string;
}

export enum IPredictionTimeOption {
  WEEK = "week",
  MONTH = "month",
  QUARTER = "quarter"
}

export interface IGeneralStatisticsRequest {
  timePeriod: ITimePeriod;
  country: string;
}

export interface IMostPopularPostsRequest extends IGeneralStatisticsRequest {
  nrOfPosts: number;
}

export interface IHashtagPopularityPrediction {
  predictionTime: IPredictionTimeOption;
}
