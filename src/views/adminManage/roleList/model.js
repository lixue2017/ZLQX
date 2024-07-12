
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
  label: "ID",
  // align: "center",
  width: 80,
  fixed: "left",
};
const TABLE_COLS_1 = {
  prop: "table_xx_1",
  label: "角色名称",
  showOverflowTooltip: true,
  minWidth: 160,
  fixed: "left",
};
const TABLE_COLS_2 = {
  prop: "table_xx_2",
  label: "创建时间",
  showOverflowTooltip: true,
  minWidth: 160,
  fixed: "left",
};
const TABLE_COLS_3 = {
  prop: "table_xx_3",
  label: "修改时间",
  showOverflowTooltip: true,
  minWidth: 160,
  fixed: "left",
};
const TABLE_COLS_OPERATION = {
  label: "操作",
  prop: "operation",
  width: 250,
  columnOperation: true,
  fixed: "right",
};

const tableColumns = [
  TABLE_COLS_INDEX,
  TABLE_COLS_1, // 用户名称
  TABLE_COLS_2, // 创建时间
  TABLE_COLS_3, // 修改时间
  TABLE_COLS_OPERATION, // 关联任务
];

export { searchColumns, tableColumns };