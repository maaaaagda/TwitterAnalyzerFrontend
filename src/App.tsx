import React from "react";
import "./styles/App.scss";
import ReportCategory from "./ReportCategory";
import HashtagInput from "./HashtagInput";
import { IReportCategory } from "./IReportCategory";
import GeneralStatisticsForm from "./GeneralStatisticsForm";

interface IState {
  selectedReportCategoryId: number;
  hashtag: string;
  email: string;
}

const categories: IReportCategory[] = [
  {
    id: 1,
    title: "Get general #hashtag statistics",
    getForm: (props: any) => <GeneralStatisticsForm {...props} />
  },
  {
    id: 2,
    title: "Get most popular posts for given #hashtag",
    getForm: () => {}
  },
  { id: 3, title: "Get #hashtag popularity prediction", getForm: () => {} }
];

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedReportCategoryId: categories[0].id,
      hashtag: "",
      email: ""
    };
  }

  changeReportCategory(id: number) {
    this.setState({ selectedReportCategoryId: id });
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ [event.target.name]: event.target.value } as Pick<
      IState,
      any
    >);
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
                    title={cat.title}
                    selectedReportCategoryId={
                      this.state.selectedReportCategoryId
                    }
                    onClick={this.changeReportCategory.bind(this)}
                  />
                ))}
              </div>
            </div>
            <HashtagInput onChange={this.onInputChange.bind(this)} />
            {categories
              .find(cat => cat.id === this.state.selectedReportCategoryId)!
              .getForm()}
            <div className="stick-to-bottom  row">
              <div className="filter">
                <div>Email</div>
                <input
                  name="email"
                  placeholder="joe@gmail.com"
                  onChange={this.onInputChange.bind(this)}
                  value={this.state.email}
                />
              </div>
              <div className="filter">
                <div>
                  <div className="send-button">Send</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
