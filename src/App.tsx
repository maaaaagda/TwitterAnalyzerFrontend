import React from "react";
import "./styles/App.scss";
import ReportCategory from "./Report/ReportCategory";
import { IReportCategory } from "./Report/IReportCategory";
import GeneralStatisticsForm from "./Report/GeneralStatisticsForm";
import MostPopularPosts from "./Report/MostPopularPosts";
import HashtagPopularityPrediction from "./Report/HashtagPopularityPrediction";
import {
  IGeneralStatisticsRequest,
  IMostPopularPostsRequest,
  IHashtagPopularityPrediction
} from "./Report/IReportRequest";
import {
  getGeneralStatistics,
  getMostPopularPosts,
  getHashtagPopularityPrediction
} from "./api";

interface IState {
  selectedReportCategoryId: number;
  hashtag: string;
  email: string;
  reportCategorySpecificData: any;
}

const categories: IReportCategory[] = [
  {
    id: 1,
    title: "Get general #hashtag statistics",
    getForm: (props: any) => <GeneralStatisticsForm {...props} />,
    callApi: getGeneralStatistics
  },
  {
    id: 2,
    title: "Get most popular posts for given #hashtag",
    getForm: (props: any) => <MostPopularPosts {...props} />,
    callApi: getMostPopularPosts
  },
  {
    id: 3,
    title: "Get #hashtag popularity prediction",
    getForm: (props: any) => <HashtagPopularityPrediction {...props} />,
    callApi: getHashtagPopularityPrediction
  }
];

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedReportCategoryId: categories[0].id,
      hashtag: "",
      email: "",
      reportCategorySpecificData: {}
    };
  }

  changeReportCategory(id: number) {
    this.setState({ selectedReportCategoryId: id });
  }

  onSave(
    data:
      | IGeneralStatisticsRequest
      | IMostPopularPostsRequest
      | IHashtagPopularityPrediction
  ) {
    if (Object.values(data).every(key => key)) {
      categories
        .find(cat => cat.id === this.state.selectedReportCategoryId)!
        .callApi(data)
        .then(() => {
          alert("Data posted! Report will be sent to provided email");
        })
        .catch((err: Error) => {
          alert("Getting statistics failed. Error: " + JSON.stringify(err));
        });
    } else {
      alert("Validation failed. Please provide all data needed");
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="row height-100">
          <div className="app-description">
            <div className="app-header">Twitter #Hashtag Analyzer</div>
            <div className="description">
              This is a simple app to generate statistics regarding #hashtags
              used on Twitter. Simply input some #hashtag and report will be
              send to your email. Enjoy!
            </div>
          </div>
          <div className="app-content">
            <div className="row">
              <div className="report-category-container" id={"2"}>
                {categories.map(cat => (
                  <ReportCategory
                    id={cat.id}
                    key={cat.id}
                    title={cat.title}
                    selectedReportCategoryId={
                      this.state.selectedReportCategoryId
                    }
                    onClick={this.changeReportCategory.bind(this)}
                  />
                ))}
              </div>
            </div>
            {categories
              .find(cat => cat.id === this.state.selectedReportCategoryId)!
              .getForm({ onSave: this.onSave.bind(this) })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
