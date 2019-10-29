import React from "react";

const HashtagInput: React.FC<{onChange: () => void}> = ({onChange}) => {
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