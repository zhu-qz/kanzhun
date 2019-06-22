const reducer = (state = {
  homeBannerList: []
}, action) => {
  const {type, data } = action
  switch (type) {
    case 'changeHomeBanerList':
      return Object.assign({}, state, {homeBannerList: data});
    default:
      return state;
  }
}

export default reducer;