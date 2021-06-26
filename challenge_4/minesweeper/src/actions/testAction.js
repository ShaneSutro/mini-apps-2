export const testAction = () => dispatch => {
  dispatch({
    type: 'TEST_ACTION',
    payload: 'what_my_test_action_came_up_with'
  });
}