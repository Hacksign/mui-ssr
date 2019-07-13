import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

import { side_bar_open_action } from './actions';
import reducers from './reducers';
import IndexPage from '../../routes/indexPage';
import theme from '../../helpers/theme';

if (module.hot) {
  module.hot.accept();
}
const store = createStore(reducers);

const mapStateToProps = (state : any) => {
  return {
    menuAnchorEl: state.menuAnchorEl,
  };
}
const mapDispatchToProps = (dispatch : any) => {
  return {
    onMenuOpen: (e : React.MouseEvent) => {
      side_bar_open_action.event = e;
      dispatch(side_bar_open_action)
    },
  };
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexPage);

ReactDOM.hydrate(
  <Provider store={ store }>
    <ThemeProvider theme={ theme }>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app-content'),
  () => {
    // document.getElementById('app-styles')!.remove();
  }
)
