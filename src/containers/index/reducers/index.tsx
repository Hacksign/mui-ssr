const default_state = {
  menuAnchorEl: null,
  mobileMenuAnchorEl: null,
};

export default (state : any = default_state, action : any) : any => {
  let new_state = state;
  switch (action.type) {
    case 'side_bar_open':
      return {
        menuAnchorEl: action.event.currentTarget
      };
    default:
      return state;
  }
}