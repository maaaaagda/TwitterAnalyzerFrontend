import React from "react";

const HashtagInput: React.FC<{onChange: () => void}> = ({onChange}) => {
    return (
        <div className="row">
                <input className="hashtag-input" onChange={onChange} placeholder="#hashtag"/>
        </div>
    )

}

export default HashtagInput