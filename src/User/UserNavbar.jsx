import Logout from "../components/Logout";
import classes from "./UserNavbar.module.css";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  };

  return (
    <div>
      <div id="mySidenav" className={classes.sidenav}>
        <div className={classes.closebtn} onClick={closeNav}>
          &times;
        </div>
        <Link to="/user">Dashboard</Link>
        <Link to="/user/grades">Grades</Link>
        <a href="#">Clients</a>
        <Logout />
      </div>

      <span onClick={openNav}>
        <img src={menu} className={classes.icons} alt="menu icon" />
      </span>
    </div>
  );
};

export default UserNavbar;

// import Logout from "../components/Logout";
// import classes from "./UserNavbar.module.css";
// import menu from '../assets/menu.png'
// import { Link } from "react-router-dom";

// const UserNavbar = () => {
//   function openNav() {
//     document.getElementById("mySidenav").style.width = "250px";
//   }

//   function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//   }

//   return (
//     <div>
//       <div id="mySidenav" className={classes.sidenav}>
//         <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
//           &times;
//         </a>
//         <a href="#"><Link to='/user'>Dashboard</Link></a>
//         <a href="#"><Link to='/user/grades'>Grades</Link></a>
//         <a href="#">Clients</a>
//         <a href="#"><Logout/></a>
//       </div>

//       <span onClick={openNav}>
//         <img src={menu} className={classes.icons} alt="menu icon"/>
//       </span>
//     </div>
//   );
// };

// export default UserNavbar;
