//
import { NavLink } from "react-router-dom";
 
function Nav() {
  return (
<nav>
<NavLink to="/collection">Game Collection</NavLink>{" | "}
<NavLink to="/progress">Game Progress</NavLink>
</nav>
  );
}
 
export default Nav;