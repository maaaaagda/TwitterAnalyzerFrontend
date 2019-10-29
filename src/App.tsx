import React from 'react';
import './styles/App.scss';
import ReportCategory from "./RaportCategory";
import HashtagInput from "./HashtagInput"

class App extends React.Component<{}> {
  constructor(props: any){
    super(props);
    this.state = {
      selectedOption: 1
    }
  }

  changeRaportCategory() {

  }

  onHashtagChange(){

  }

  render() {
    return (
      <div className="app-container">
          <div className='row height-100'>
            <div className='app-description'>
              <div className="app-header">
                Twitter #Hashtag Analyzer
              </div>
              <div className="description">
                This is a simple app to generate statistics regarding #hashtags used on Twitter. Simply input some #hashtag and report will be send to you email. Enjoy!
              </div>
            </div>
            <div className='app-content'>
              <div className='row'>
                <div className="report-category-container">
                  <ReportCategory title="Get general #hashtag statistics from given time period" onClick={this.changeRaportCategory.bind(this)}/>
                  <ReportCategory title="Get most popular posts for given #hashtag" onClick={this.changeRaportCategory.bind(this)}/>
                  <ReportCategory title="Get #hashtag popularity prediction" onClick={this.changeRaportCategory.bind(this)}/>
                </div>
              </div>
              <HashtagInput onChange={this.onHashtagChange.bind(this)}/>
            </div>
          </div>
      </div>
    );
  }  
}

export default App;
