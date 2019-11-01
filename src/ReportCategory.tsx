import React from "react";
import { IReportCategoryComponent } from "./IReportCategory";

const ReportCategory: React.FC<IReportCategoryComponent> = ({
  title,
  onClick,
  selectedId,
  id,
}) => {
  let className = "report-category";
  if (selectedId === id) {
    className += " selected";
  }

  return (
    <div
      className={className}
      id={id.toString()}
      onClick={() => {
        onClick(id);
      }}
    >
      <div>{title}</div>
    </div>
  );
};

export default ReportCategory;
