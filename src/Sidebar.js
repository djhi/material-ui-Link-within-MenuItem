import React from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import { Link } from 'react-router-dom'

export default ({ open, items, toggleDrawer }) => (
    <Drawer
        docked={false}
        width={300}
        onRequestChange={toggleDrawer}
        open={open}
        >
        <MenuItem
            primaryText="home"
            containerElement={<Link to="/" />}
            leftIcon={<SettingsIcon />}
            onTouchTap={() => {
                console.log('going home')
                toggleDrawer()
            }}
        />
        <MenuItem
            primaryText="about"
            containerElement={<Link to="/about" />}
            leftIcon={<SettingsIcon />}
            onTouchTap={() => {
                console.log('about')
                toggleDrawer()
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
                toggleDrawer()
            }}
            />
        ))}
    </Drawer>
);
