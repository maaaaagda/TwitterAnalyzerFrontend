import React from "react";
import { ITimePeriod } from "./IReportRequest";

interface IState {
  country: string;
  timePeriod: ITimePeriod;
}

interface IProps {
  onSave: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class GeneralStatisticsForm extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      country: "Poland",
      timePeriod: {
        startTime: "01/01/2019",
        endTime: "01/10/2019",
      },
    };
  }
  render() {
    return (
      <div className={"filters"}>
        <div>
          <input onChange={this.props.onSave} />
        </div>
      </div>
    );
  }
}
export default GeneralStatisticsForm;
