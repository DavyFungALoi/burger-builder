import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/Navigationitems";
import "./SideDrawer.css";
import Backdrop from '../../UI/Backdrop/Backdrop'

export default function SideDrawer(props) {

    let AttachedClasses ='SideDrawer Close' 
    if (props.open) {
        AttachedClasses='SideDrawer Open' 
    }

  return (
      <>
      <Backdrop show = {props.open} clicked={props.closed}/>
    <div className={AttachedClasses}>
        <div className='LogoSideDrawer'>
      <Logo/>
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
    </>
  );
}
