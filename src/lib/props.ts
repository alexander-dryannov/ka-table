
import { EditingMode, FilteringMode, SortingMode } from './enums';
import { ChildComponents, Column, EditableCell, Group, VirtualScrolling } from './models';
import { DispatchFunc, Field, FormatFunc, ValidationFunc } from './types';

interface IRowCommonProps {
  childComponents: ChildComponents;
  columns: Column[];
  dispatch: DispatchFunc;
  editableCells: EditableCell[];
  editingMode: EditingMode;
  rowData: any;
  rowKeyField: string;
  rowKeyValue: any;
  selectedRows: any[];
}

export interface ICellProps {
  childComponents: ChildComponents;
  column: Column;
  dispatch: DispatchFunc;
  editingMode: EditingMode;
  editorValue?: any;
  field: Field;
  format?: FormatFunc;
  hasEditorValue?: any;
  isDetailsRowShown: boolean;
  isEditableCell: boolean;
  isSelectedRow: boolean;
  rowData: any;
  rowKeyField: string;
  rowKeyValue: any;
  selectedRows: any[];
  validation?: ValidationFunc;
  validationMessage?: string;
  value: any;
}

export interface IFilterRowEditorProps {
  childComponents: ChildComponents;
  column: Column;
  dispatch: DispatchFunc;
}

export interface ICellEditorProps extends IFilterRowEditorProps {
  autoFocus?: boolean;
  editingMode: EditingMode;
  editorValue?: any;
  field: Field;
  isDetailsRowShown: boolean;
  isSelectedRow: boolean;
  rowData: any;
  rowKeyField: string;
  rowKeyValue: any;
  value: any;
  selectedRows: any[];
  validationMessage?: string;
  validation?: ValidationFunc;
}

export interface ICellTextProps {
  childComponents: ChildComponents;
  column: Column;
  dispatch: DispatchFunc;
  editingMode: EditingMode;
  field: Field;
  format?: FormatFunc;
  isDetailsRowShown: boolean;
  isSelectedRow: boolean;
  rowData: any;
  rowKeyField: string;
  rowKeyValue: any;
  selectedRows: any[];
  value: any;
}

export interface IDataRowProps extends IRowCommonProps {
  format?: FormatFunc;
  validation?: ValidationFunc;
  isDetailsRowShown: boolean;
  isSelectedRow: boolean;
  rowEditableCells: EditableCell[]
}

export interface IGroupRowProps {
  childComponents: ChildComponents;
  column: Column;
  contentColSpan: number;
  dispatch: DispatchFunc;
  groupIndex: number;
  groupKey: any[];
  isExpanded: boolean;
  text: string; // TODO: consider to pass the value insted of formatted text
}

export interface IHeadCellResizeProps {
  dispatch: DispatchFunc;
  column: Column;
  currentWidth: any;
  childComponents: ChildComponents;
}
export interface IHeadCellProps {
  areAllRowsSelected: boolean;
  childComponents: ChildComponents;
  columnReordering?: boolean;
  columnResizing?: boolean;
  column: Column;
  dispatch: DispatchFunc;
  sortingMode: SortingMode;
}

export interface INoDataRowProps {
  childComponents: ChildComponents,
  columns: Column[];
  groupColumnsCount: number;
}

export interface ITableHeadProps {
  columnReordering?: boolean;
  columnResizing?: boolean;
  areAllRowsSelected: boolean;
  childComponents: ChildComponents;
  columns: Column[];
  dispatch: DispatchFunc;
  filteringMode: FilteringMode;
  groupColumnsCount: number;
  sortingMode: SortingMode;
}

export interface ITableBodyProps {
  childComponents: ChildComponents;
  columns: Column[];
  data: any[];
  detailsRows?: any[];
  dispatch: DispatchFunc;
  editableCells: EditableCell[];
  editingMode: EditingMode;
  format?: FormatFunc;
  groupColumnsCount: number;
  groupedColumns: Column[];
  groups?: Group[];
  groupsExpanded?: any[][];
  rowKeyField: string;
  rowReordering: boolean;
  selectedRows: any[];
  validation?: ValidationFunc;
  virtualScrolling?: VirtualScrolling;
}

export interface INewRowProps {
  childComponents: ChildComponents;
  columns: Column[];
  dispatch: DispatchFunc;
  editableCells: EditableCell[];
  format?: FormatFunc;
  groupColumnsCount: number;
  rowKeyField: string;
  validation?: ValidationFunc;
}

export interface IRowProps extends IRowCommonProps {
  format?: FormatFunc;
  groupColumnsCount: number;
  isDetailsRowShown: boolean;
  isSelectedRow: boolean;
  rowEditableCells: EditableCell[],
  rowReordering: boolean;
  trRef?: any;
  validation?: ValidationFunc;
}

export interface IEmptyCellsProps {
  count: number;
  isTh?: boolean;
  className?: string;
}

export interface ICellEditorValidationMessageProps {
  message: string;
}

export interface IFilterRowProps {
  childComponents: ChildComponents;
  columns: Column[];
  dispatch: DispatchFunc;
  groupColumnsCount: number;
}

export interface IHeadRowProps {
  areAllRowsSelected: boolean;
  childComponents: ChildComponents;
  columnReordering?: boolean;
  columnResizing?: boolean;
  columns: Column[];
  dispatch: DispatchFunc;
  groupColumnsCount: number;
  sortingMode: SortingMode;
}

export interface ILoadingProps {
  enabled?: boolean;
  text?: string;
}

export interface IPagingProps {
  childComponents: ChildComponents;
  dispatch: DispatchFunc;
  enabled?: boolean;
  pageIndex?: number;
  pageSize?: number;
  pageSizes?: number[];
  pagesCount?: number;
}
export interface IPagingSizeProps extends IPagingProps {
  value: number;
}

export interface IPagingIndexProps extends IPagingProps {
  isActive: boolean;
  pageIndex: number;
  text: any;
}

export interface IPagingPagesProps extends IPagingProps {
  pages?: number[]; // TODO: will be deprecated next major release
}

