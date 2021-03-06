import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/Navigationitems";
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

export default function Toolbar(props) {
  return (
    <header className="Toolbar">
     <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className="LogoToolbar">
        <Logo />
      </div>

      <nav className='DesktopOnly'>
        <NavigationItems />
      </nav>
    </header>
  );
}
