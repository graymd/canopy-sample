import * as actionTypes from '../constants/actionTypes';

export const updateScheduledItem = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.UPDATE_SCHEDULED_ITEM,
});


export const removeComment = (id) => ({
  id,
  type: actionTypes.REMOVE_COMMENT,
});
