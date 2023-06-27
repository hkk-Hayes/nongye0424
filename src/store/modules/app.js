const app = {
  state: {
    sidebar: true, // 菜单的开合状态  ，true 合起来  false 打开
  },
  // 修改状态值
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar = !state.sidebar;
      // console.log(111);
    },
  },
};

// 输出
export default app;
