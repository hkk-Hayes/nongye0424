const lang = {
  state: {
    locale: 'en',
  },
  mutations: {
    // 更改语言包是中文还是英文
    SET_LANG(state, alang) {
      state.locale = alang;
    },
  },
};
// 输出
export default lang;
