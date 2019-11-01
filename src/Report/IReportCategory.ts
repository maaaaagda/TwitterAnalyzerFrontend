export interface IReportCategoryBase {
  id: number;
  title: string;
}

export interface IReportCategory extends IReportCategoryBase {
  getForm: Function;
}

export interface IReportCategoryComponent extends IReportCategoryBase {
  onClick: Function;
  selectedReportCategoryId: number;
}
