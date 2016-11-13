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

const mergedArgs = (state, itemId, args) => {
  const prev = state[itemId] || {}
  return { ...prev, ...args }
}

const comments = (state = initialState, action) => {
  switch (action.type) {
  case 'UPDATE_COMMENT':
    return {
      ...state,
      [action.itemId]: mergedArgs(state, action.itemId, action.args)
    };
  default:
    return state;
  }
};

export default comments;
