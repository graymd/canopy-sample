// import omit from './lodash/omit';

const initialState = {
  1: {
    author: "Travis N",
    body: "I finished all the work in your yard. It was a pleasure serving your!",
    id: 1,
    type: "tech",
  },
  2: {
    author: "Barry",
    body: "I thought you we're going to trim the trees. I am displeased.",
    id: 2,
    type: "customer",
  },
  3: {
    author: "Travis N",
    body: "Wat!?",
    id: 3,
    type: "tech",
  }
};

const comments = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_COMMENT':
    const updatedState = {...state};
    updatedState[action.itemId].body = action.updatedComment;
    return updatedState;
  default:
    return state;
  }
};

export default comments;
