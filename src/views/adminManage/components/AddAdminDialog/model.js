
const FORM_COLS_1 = {
  span: 24,
  id: "form_xx_1",
  label: "用户名称",
  placeholder: "请输入用户名称",
  type: "text",
};
const FORM_COLS_2 = {
  span: 24,
  id: "form_xx_2",
  label: "手机号",
  placeholder: "请输入手机号",
  type: "text",
};
const FORM_COLS_3 = {
  span: 24,
  id: "form_xx_3",
  label: "密码",
  placeholder: "请输入密码",
  type: "password",
};

const formColumns = [
  FORM_COLS_1,
  FORM_COLS_2,
  FORM_COLS_3
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
        message: "请输入用户名称",
        trigger: "change",
      },
    ],
    form_xx_2: [
      {
        required: true,
        message: "请输入手机号",
        trigger: "change",
      },
    ],
    form_xx_3: [
      {
        required: true,
        message: "请输入密码",
        trigger: "change",
      },
    ]
  }
};