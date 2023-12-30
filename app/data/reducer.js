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
    case "setUserClicked":
      return {
        ...state,
        userClicked: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
