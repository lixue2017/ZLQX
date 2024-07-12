
const FORM_COLS_1 = {
  span: 24,
  id: "form_xx_1",
  label: "新密码",
  placeholder: "字母+数字且长度大于8",
  type: "password",
};

const formColumns = [
  FORM_COLS_1,
]


export const config = {
  lists: [
    {
      fieldList: [
        {
          rows: [
            {
              cols: formColumns,
            },
          ],
        },
      ],
    },
  ],
  formRules: {
    form_xx_1: [
      {
        required: true,
        message: "请输入新密码",
        trigger: "change",
      },
    ],
  }
};