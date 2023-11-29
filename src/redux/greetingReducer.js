const initialState = {
  greeting: '',
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_GREETING':
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export default greetingReducer;
