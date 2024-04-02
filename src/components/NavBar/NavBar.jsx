import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import LoginForm from "../LoginForm/LoginForm";


export default function NavBar({isLoggedIn, user, setUser}) {
  function handleLogOut() {
 userService.logOut();
 setUser(null);
  }
  if (isLoggedIn) {
    return(
      <nav>
         <span>Welcome, {user.name}</span>
         &nbsp;&nbsp;{" "}
         <Link to="" onClick={handleLogOut}>
       Log Out
      </Link>
      </nav>
    );
  } else {
    return (
      <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/new">New Order</Link>
        &nbsp;&nbsp;
        </nav>


    );
  }
}
  


// export default function NavBar({ user, setUser }) {
//   function handleLogOut() {
//     userService.logOut();
//     setUser(null);
//   }

//   return (
    
//     <nav>
//       <Link to="/orders">Order History</Link>
//       &nbsp; | &nbsp;
//       <Link to="/orders/new">New Order</Link>
//       &nbsp;&nbsp;
//       {/* <span>Welcome, {user.name}</span>
//       &nbsp;&nbsp;{" "} */}
//       <Link to="" onClick={handleLogOut}>
//         Log Out
//       </Link>
//     </nav>
//   );
// }

