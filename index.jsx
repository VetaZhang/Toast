import 'babel-polyfill';
import React from "react";
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Toast from './src/index';
// import Toast from './dist/index';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div style={{
      padding: '40px 20px 0 20px',
    }}>
      <button onClick={() => Toast.msg('dgaergergaerave')}>show toast</button>
    </div>);
  }
}

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('app'),
);
