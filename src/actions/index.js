export const selectUser = (user) => {
  console.log('You click on user:', user.first);
  return {
    type: "USER_SELECTED",
    payload: user
  }
};
