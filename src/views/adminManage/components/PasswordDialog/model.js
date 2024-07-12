
const FORM_COLS_1 = {
  span: 24,
  id: "form_xx_1",
  label: "旧密码",
  placeholder: "请输入旧密码",
  type: "text",
};
const FORM_COLS_2 = {
  span: 24,
  id: "form_xx_2",
  label: "新密码",
  placeholder: "字母+数字且长度大于8",
  type: "password",
  // showPassword: true
};

const formColumns = [
  FORM_COLS_1,
  FORM_COLS_2
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
        message: "请输入旧密码",
        trigger: "change",
      },
    ],
    form_xx_2: [
      {
        required: true,
        message: "请输入新密码",
        trigger: "change",
      },
    ]
  }
};