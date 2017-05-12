import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Sidebar from './Sidebar';
import SettingsIcon from 'material-ui/svg-icons/action/settings';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = (open) => {
      this.setState({ open: typeof open !== 'boolean' ? !this.state.open : open });
  }

  render() {
      const items = [
        { name: 'about0', path: 'about', icon: <SettingsIcon /> },
        { name: 'about1', path: 'about', icon: <SettingsIcon /> },
        { name: 'about2', path: 'about', icon: <SettingsIcon /> },
        { name: 'about3', path: 'about', icon: <SettingsIcon /> },
      ];

    return (
      <div>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />

        <Sidebar open={this.state.open} toggleDrawer={this.toggleDrawer} items={items} />

        <div style={{ textAlign: 'center' }}>
          {this.props.children}

          <RaisedButton
            label="Toggle Drawer"
            onTouchTap={this.toggleDrawer}
          />
        </div>

      </div>
    )
  }
}

export default App
