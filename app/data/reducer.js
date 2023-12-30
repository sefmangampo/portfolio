export default function pageReducer(state, action) {
  switch (action.type) {
    case "getData":
      return {
        ...state,
      };
    case "setSelectedPage":
      return {
        ...state,
        selectedPage: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
