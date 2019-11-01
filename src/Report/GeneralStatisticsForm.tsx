import React from "react";
import { IGeneralStatisticsRequest } from "./IReportRequest";

interface IProps {
  onSave: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class GeneralStatisticsForm extends React.Component<
  IProps,
  IGeneralStatisticsRequest
> {
  constructor(props: any) {
    super(props);
    this.state = {
      country: "Poland",
      timePeriod: {
        startTime: "01/01/2019",
        endTime: "01/10/2019"
      }
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.name === "startTime" || event.target.name === "endTime") {
      const timePeriod = {
        [event.target.name]: event.target.value
      };
      this.setState({
        timePeriod: { ...this.state.timePeriod, ...timePeriod }
      });
    } else {
      this.setState({ [event.target.name]: event.target.value } as Pick<
        IGeneralStatisticsRequest,
        any
      >);
    }
  }

  render() {
    return (
      <div className="filters row">
        <div className="filter">
          <div>Start time</div>
          <input
            name="startTime"
            onChange={this.onInputChange}
            value={this.state.timePeriod.startTime}
          />
        </div>
        <div className="filter">
          <div>End time</div>
          <input
            name="endTime"
            onChange={this.onInputChange}
            value={this.state.timePeriod.endTime}
          />
        </div>
        <div className="filter">
          <div>Country</div>
          <input
            name="country"
            onChange={this.onInputChange}
            value={this.state.country}
          />
        </div>
      </div>
    );
  }
}
export default GeneralStatisticsForm;
