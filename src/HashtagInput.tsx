import React from "react";

interface IProps {
    onChange: any
}

const HashtagInput: React.FC<IProps> = ({onChange}) => {
    return (
        <div className="row">
            <div className="hashtag-input-container">
                <span># </span>
                <input className="hashtag-input" onChange={onChange} placeholder="hashtag"/>
            </div>
        </div>
    )

}

export default HashtagInput