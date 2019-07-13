interface IActions {
  type : string,
  event? : boolean | React.MouseEvent,
}
const side_bar_open_action : IActions = { 
  type : 'side_bar_open',
  event: false,
};

export { side_bar_open_action };