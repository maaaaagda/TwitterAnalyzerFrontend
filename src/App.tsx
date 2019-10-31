import React from 'react';
import './styles/App.scss';
import ReportCategory from "./ReportCategory";
import HashtagInput from "./HashtagInput"
import { IReportCategory } from './IReportCategory';

interface IState {
  selectedId: number,
  hashtag: string
}

const categories: IReportCategory[] =  [
    {id: 1, title: "Get general #hashtag statistics"},
    {id: 2, title: "Get most popular posts for given #hashtag"},
    {id: 3, title: "Get #hashtag popularity prediction"}
  ]

class App extends React.Component<{}, IState> {
  constructor(props: any){
    super(props);
    this.state = {
      selectedId: categories[0].id,
      hashtag: ""
    }
  }

  changeReportCategory(id: number) {
    this.setState({selectedId: id})
  }

  onHashtagChange(evt: React.ChangeEvent<HTMLSelectElement>){
    this.setState({hashtag: evt.target.value})
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
                This is a simple app to generate statistics regarding #hashtags used on Twitter. Simply input some #hashtag and report will be send to your email. Enjoy!
              </div>
            </div>
            <div className='app-content'>
              <div className='row'>
                <div className="report-category-container">
                {categories.map(cat => 
                    <ReportCategory id={cat.id} title={cat.title} selectedId={this.state.selectedId}
                    onClick={this.changeReportCategory.bind(this)}/>
                  )}                
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
