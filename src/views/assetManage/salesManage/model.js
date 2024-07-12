const TABLE_COLS_INDEX = {
  type: "index",
  label: "ID",
  // align: "center",
  width: 80,
  fixed: "left",
};
const TABLE_COLS_1 = {
  prop: "table_xx_1",
  label: "配件编号",
  showOverflowTooltip: true,
  minWidth: 120,
  fixed: "left",
};
const TABLE_COLS_2 = {
  prop: "table_xx_2",
  label: "配件名称",
  showOverflowTooltip: true,
  minWidth: 200,
};
const TABLE_COLS_3 = {
  prop: "table_xx_3",
  label: "供应商名称",
  minWidth: 160,
};
const TABLE_COLS_4 = {
  prop: "table_xx_4",
  label: "客户名称",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_5 = {
  prop: "table_xx_5",
  label: "销售单价",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_6 = {
  prop: "table_xx_6",
  label: "销售数量",
  showOverflowTooltip: true,
  minWidth: 120,
};
const TABLE_COLS_7 = {
  prop: "table_xx_7",
  label: "销售总价",
  showOverflowTooltip: true,
  minWidth: 110,
};
const TABLE_COLS_8 = {
  prop: "table_xx_8",
  label: "销售员",
  showOverflowTooltip: true,
  minWidth: 110,
};
const TABLE_COLS_9 = {
  prop: "table_xx_9",
  label: "备注",
  showOverflowTooltip: true,
  minWidth: 200,
};
const TABLE_COLS_OPERATION = {
  label: "操作",
  prop: "operation",
  width: 135,
  columnOperation: true,
  fixed: "right",
};

const tableColumns = [
  TABLE_COLS_INDEX,
  TABLE_COLS_1,
  TABLE_COLS_2,
  TABLE_COLS_3,
  TABLE_COLS_4,
  TABLE_COLS_5,
  TABLE_COLS_6,
  TABLE_COLS_7,
  TABLE_COLS_8,
  TABLE_COLS_9,
  TABLE_COLS_OPERATION, // 操作
];

export { tableColumns };