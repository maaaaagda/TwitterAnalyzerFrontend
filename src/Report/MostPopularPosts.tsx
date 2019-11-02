import React from "react";
import { IMostPopularPostsRequest } from "./IReportRequest";
import HashtagInput from "./HashtagInput";

interface IProps {
  onSave: (data: IMostPopularPostsRequest) => void;
}

class MostPopularPosts extends React.Component<
  IProps,
  IMostPopularPostsRequest
> {
  constructor(props: any) {
    super(props);
    this.state = {
      country: "Poland",
      timePeriod: {
        startTime: "01/01/2019",
        endTime: "01/10/2019"
      },
      nrOfPosts: 10,
      hashtag: "",
      email: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (
      event.currentTarget.name === "startTime" ||
      event.currentTarget.name === "endTime"
    ) {
      const timePeriod = {
        [event.currentTarget.name]: event.currentTarget.value
      };
      this.setState({
        timePeriod: { ...this.state.timePeriod, ...timePeriod }
      });
    } else {
      this.setState({
        [event.currentTarget.name]: event.currentTarget.value
      } as Pick<IMostPopularPostsRequest, any>);
    }
  }

  render() {
    return (
      <React.Fragment>
        <HashtagInput onChange={this.onInputChange.bind(this)} />
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
          <div className="filter">
            <div>Nr of posts</div>
            <input
              name="nrOfPosts"
              onChange={this.onInputChange}
              value={this.state.nrOfPosts}
            />
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
export default MostPopularPosts;
