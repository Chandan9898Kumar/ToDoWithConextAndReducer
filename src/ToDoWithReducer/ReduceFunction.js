const reduce = (state, action) => {
  switch (action.type) {

    case "Add": {
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.payload,
        },
      ];
    }

    case "Delete": {
      return state.filter((item) => item.id !== action.payload.id);
    }

    case "Change": {
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
export default reduce;
