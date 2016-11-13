import * as actions from './index';
import * as types from '../constants/actionTypes';

describe('actions', () => {
  describe('service items', () => {
    it('should create an action to update a service item', () => {
      const itemId = 1;
      const args = { completed: false };
      const expectedAction = {
        args,
        itemId,
        type: types.UPDATE_SCHEDULED_ITEM,
      };

      expect(actions.updateScheduledItem(itemId, args)).toEqual(expectedAction);
    });
  });
  describe('comments', () => {
    it('should create an action to update a comment', () => {
      const itemId = 1;
      const updatedComment = 'updated text';
      const expectedAction = {
        itemId,
        updatedComment,
        type: types.UPDATE_COMMENT,
      };
      expect(actions.updateComment(itemId, updatedComment)).toEqual(expectedAction);
    });
  });
});
