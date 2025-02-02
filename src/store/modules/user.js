import { login, logout, getInfo } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

const user = {
  state: {
    token: getToken(),
    name: "",
    userId: "",
    nickName: "",
    avatar: "",
    roles: [],
    userInfo: {},
    permissions: [],
    component: {},
    isStaff: true,
    pageActiveName: "",
    deptId: "",
    deptName: "",
    salesmanId: "",
    salesmanName: "",
  },

  mutations: {
    SET_ACTIVENAME: (state, data) => {
      state.pageActiveName = data.activeName;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.userInfo = user;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_USER_ID: (state, userId) => {
      state.userId = userId;
    },
    SET_NICK_NAME: (state, nickName) => {
      state.nickName = nickName;
    },
    SET_DEPT_ID: (state, deptId) => {
      state.deptId = deptId;
    },
    SET_DEPT_NAME: (state, deptName) => {
      state.deptName = deptName;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions;
    },
    SET_COMPONENT: (state, component) => {
      state.component = component;
    },
    SET_SALESMAN: (state, { salesmanId, salesmanName }) => {
      state.salesmanId = salesmanId;
      state.salesmanName = salesmanName; // 业务部身份的当前登录人
    },
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim();
      const password = userInfo.password;
      const code = userInfo.code;
      const uuid = userInfo.uuid;
      //01-客户端  00 -员工端
      const userType = "00";
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid, userType)
          .then((res) => {
            setToken(res.token);
            commit("SET_TOKEN", res.token);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token)
          .then((res) => {
            const user = res.user;
            const avatar =
              user.avatar == ""
                ? require("@/assets/image/profile.jpg")
                : user.avatar.substr(0, 4) == "http"
                ? user.avatar
                : process.env.VUE_APP_BASE_API + user.avatar;
            if (res.roles && res.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", res.roles);
              commit("SET_PERMISSIONS", res.permissions);
            } else {
              commit("SET_ROLES", ["ROLE_DEFAULT"]);
            }
            commit("SET_USER", user);
            commit("SET_NAME", user.userName);
            commit("SET_USER_ID", user.userId);
            commit("SET_NICK_NAME", user.nickName);
            commit("SET_DEPT_ID", user.deptId);
            commit("SET_DEPT_NAME", user.dept?.deptName);
            commit("SET_AVATAR", avatar);
            commit("SET_COMPONENT", res.component);
            commit("SET_SALESMAN", res);
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            commit("SET_ROLES", []);
            commit("SET_PERMISSIONS", []);
            removeToken();
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise((resolve) => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    },
  },
};

export default user;
