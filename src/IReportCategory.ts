export interface IReportCategory {
    id: number,
    title: string
}

export interface IReportCategoryComponent extends IReportCategory {
    onClick: Function,
    selectedId: number
}