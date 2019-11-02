import React from "react";

interface IProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HashtagInput: React.FC<IProps> = ({ onChange }) => {
  return (
    <div className="row">
      <div className="hashtag-input-container">
        <span># </span>
        <input
          name="hashtag"
          className="hashtag-input"
          onChange={onChange}
          placeholder="hashtag"
        />
      </div>
    </div>
  );
};

export default HashtagInput;
