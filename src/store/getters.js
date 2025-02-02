const getters = {
  sidebar: (state) => state.app.sidebar,
  size: (state) => state.app.size,
  device: (state) => state.app.device,
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  nickName: (state) => state.user.nickName,
  introduction: (state) => state.user.introduction,
  roles: (state) => state.user.roles,
  permissions: (state) => state.user.permissions,
  isStaff: (state) => state.user.isStaff,
  deptId: (state) => state.user.deptId,
  dept: (state) => state.user.dept,
  userId: (state) => state.user.userId,
  component: (state) => state.user.component,
  salesmanId: (state) => state.user.salesmanId,
  salesmanName: (state) => state.user.salesmanName,
  permission_routes: (state) => state.permission.routes,
  routesCollect: (state) => state.permission.routesCollect,
  homeCompData: (state) => state.home.homeCompData,
  homeFromData: (state) => state.home.searchFromData,
  affixActive: (state) => state.home.affixActive,
  isFormSubmit: (state) => state.settings.isFormSubmit,
  getIsRepeatedClick: (state) => state.settings.isRepeatedClick,
};
export default getters;
