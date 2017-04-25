import messagesReducer from './messages';
import * as types from '../actions/chatActions';


describe('messages reducer', () => {
  it('should return the initial state', () => {
    expect(
      messagesReducer(undefined, {})
    ).toEqual({
      items: [],
      isFetching: false,
      didInvalidate: false
    })
  });

  it('should handle REQUEST_ALL_MESSAGES', () => {
    expect(
      messagesReducer(undefined, {
        type: types.REQUEST_ALL_MESSAGES
      })
    ).toEqual({
      items: [],
      isFetching: true,
      didInvalidate: false
    });
  });
  it('should handle RECEIVE_ALL_MESSAGES', () => {
    expect(
      messagesReducer(undefined, {
        type: types.RECEIVE_ALL_MESSAGES,
        payload: { messages: [{
          msg: 'foo',
          time: 0,
          user: { username: 'bar' }
        }] }
      })
    ).toEqual({
      items: [{
        id: 0,
        text: 'foo',
        author: {username: 'bar'},
        time: 0
      }],
      isFetching: false,
      didInvalidate: false
    });
  });
  it('should handle FAIL_ALL_MESSAGES', () => {
    expect(
      messagesReducer(undefined, {
        type: types.FAIL_ALL_MESSAGES,
        payload: {error: 'some error'}
      })
    ).toEqual({
      items: [],
      isFetching: false,
      didInvalidate: true,
      error: 'some error'
    });
  });
});
