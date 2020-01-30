


import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Bookmarks from '@material-ui/icons/Bookmarks';

class App extends Component {
  render() {
    return (
      <Button variant="outlined" color="primary">
        <Bookmarks></Bookmarks>
          React Js theming using material UI.
      </Button>
    );
  }
}

export default App;