
const SEARCH_COLS_1 = {
  span: 8,
  id: "search_cols_1",
  label: "手机号码：",
  placeholder: "手机号码",
  type: "text",
};
const searchColumns = [
  SEARCH_COLS_1,
];

const TABLE_COLS_INDEX = {
  type: "index",
  align: "center",
  width: 50,
  fixed: "left",
};
const TABLE_COLS_1 = {
  prop: "table_xx_1",
  label: "用户昵称",
  showOverflowTooltip: true,
  minWidth: 160,
  fixed: "left",
};
const TABLE_COLS_2 = {
  prop: "table_xx_2",
  label: "在职状态",
  minWidth: 160,
  customRow: true
};
const TABLE_COLS_3 = {
  prop: "table_xx_3",
  label: "手机号码",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_4 = {
  prop: "table_xx_4",
  label: "证件号",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_5 = {
  prop: "table_xx_5",
  label: "薪酬",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_6 = {
  prop: "table_xx_6",
  label: "入职时间",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_7 = {
  prop: "table_xx_7",
  label: "离职时间",
  showOverflowTooltip: true,
  minWidth: 160,
};
const TABLE_COLS_OPERATION = {
  label: "操作",
  prop: "operation",
  width: 135,
  columnOperation: true,
  fixed: "right",
};

const tableColumns = [
  TABLE_COLS_1,
  TABLE_COLS_2,
  TABLE_COLS_3,
  TABLE_COLS_4,
  TABLE_COLS_5,
  TABLE_COLS_6,
  TABLE_COLS_7,
  TABLE_COLS_OPERATION, // 操作
];

export { searchColumns, tableColumns };