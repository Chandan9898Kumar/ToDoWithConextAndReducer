const reducer = (state, action) => {
  
  switch (action.type) {
    case "Add": {
      return [
        ...state,
        {
          id: action.payload.id,
          text: action.payload.text,
        },
      ];
    }

    case "Deleted": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "Edit": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        } else {
          return item;
        }
      });
    }

    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
export default reducer;
