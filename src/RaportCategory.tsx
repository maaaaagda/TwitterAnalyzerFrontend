import React from "react";

const RaportCategory: React.FC<{title: string, onClick: any}> = ({title, onClick}) => {
    return <div className="raport-category">
        <div>
            {title}
        </div>
    </div>

}

export default RaportCategory