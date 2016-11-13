import * as actionTypes from '../constants/actionTypes';

export const updateScheduledItem = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.UPDATE_SCHEDULED_ITEM,
});

export const updateComment = (itemId, updatedComment) => ({
  itemId,
  updatedComment,
  type: actionTypes.UPDATE_COMMENT,
});
