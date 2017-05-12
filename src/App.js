import React, { Component } from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import SettingsIcon from 'material-ui/svg-icons/action/settings';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  toggleDrawer = () => this.setState({ open: !this.state.open })

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

        <Drawer
          docked={false}
          width={300}
          onRequestChange={this.toggleDrawer}
          open={this.state.open}
        >
          <MenuItem
            primaryText="home"
            containerElement={<Link to="/" />}
            leftIcon={<SettingsIcon />}
            onTouchTap={() => {
              console.log('going home')
              this.toggleDrawer()
            }}
          />
          <MenuItem
            primaryText="about"
            containerElement={<Link to="/about" />}
            leftIcon={<SettingsIcon />}
            onTouchTap={() => {
              console.log('about')
              this.toggleDrawer()
            }}
          />
        {items.map(item => (
            <MenuItem
                key={item.name}
                containerElement={<Link to={`/${item.path}`} />}
                primaryText={item.name}
                leftIcon={item.icon}
              onTouchTap={() => {
                console.log('about')
                this.toggleDrawer()
              }}
            />
        ))}
        </Drawer>

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
