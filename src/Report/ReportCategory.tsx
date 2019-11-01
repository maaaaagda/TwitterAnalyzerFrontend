import React from "react";
import { IReportCategoryComponent } from "./IReportCategory";

const ReportCategory: React.FC<IReportCategoryComponent> = ({
  title,
  onClick,
  selectedReportCategoryId,
  id
}) => {
  let className = "report-category";
  if (selectedReportCategoryId === id) {
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
