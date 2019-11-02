import React from "react";
import {
  IHashtagPopularityPrediction,
  IPredictionTimeOption
} from "./IReportRequest";
import HashtagInput from "./HashtagInput";

interface IProps {
  onSave: (params: IHashtagPopularityPrediction) => void;
}

class HashtagPopularityPrediction extends React.Component<
  IProps,
  IHashtagPopularityPrediction
> {
  constructor(props: any) {
    super(props);
    this.state = {
      predictionTime: IPredictionTimeOption.MONTH,
      hashtag: "",
      email: ""
    };
    this.onSelectOptionChange = this.onSelectOptionChange.bind(this);
  }

  onSelectOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      predictionTime: event.target.value as IPredictionTimeOption
    });
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    } as Pick<IHashtagPopularityPrediction, any>);
  }

  capitalise(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
  }

  render() {
    return (
      <React.Fragment>
        <HashtagInput onChange={this.onInputChange.bind(this)} />
        <div className="filters row">
          <div className="filter">
            <div>Prediction time</div>
            <select
              name="predictionTime"
              onChange={this.onSelectOptionChange}
              value={this.state.predictionTime}
            >
              {Object.values(IPredictionTimeOption).map(option => (
                <option
                  value={option}
                  selected={this.state.predictionTime === option}
                >
                  {this.capitalise(option)}
                </option>
              ))}
            </select>
          </div>
        </div>
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
              <div
                className="send-button"
                onClick={() =>
                  this.props.onSave({
                    ...this.state
                  })
                }
              >
                Send
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HashtagPopularityPrediction;
