export default {
  namespace: 'ListNsp',
  state: {
    isFetching: false,
    fetchingTxt: '',
    count: 0,
  },
  reducers: {
    updateStore(state: any, { datas }: { datas: any }) {
      return { ...state, ...datas };
    },
  },
  effects: {},
  subscriptions: {},
};
