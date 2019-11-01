import React from "react";
import {
  IHashtagPopularityPrediction,
  IPredictionTimeOption
} from "./IReportRequest";

interface IProps {
  onSave: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class HashtagPopularityPrediction extends React.Component<
  IProps,
  IHashtagPopularityPrediction
> {
  constructor(props: any) {
    super(props);
    this.state = {
      predictionTime: IPredictionTimeOption.MONTH
    };
    this.onSelectOptionChange = this.onSelectOptionChange.bind(this);
  }

  onSelectOptionChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      predictionTime: event.target.value as IPredictionTimeOption
    });
  }

  capitalise(word: string): string {
    return word[0].toUpperCase() + word.slice(1);
  }

  render() {
    return (
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
    );
  }
}
export default HashtagPopularityPrediction;
