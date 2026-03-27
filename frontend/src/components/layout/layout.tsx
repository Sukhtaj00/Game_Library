import { Outlet } from "react-router-dom";

import Nav from "../nav/nav";
 
function Layout() {

  return (
<>
<header>
<h1>Game Library Tracker</h1>
<Nav />
</header>
 
      <main>
<Outlet />
</main>
 
      <footer>
<p>Project by: Sukhtaj and Beerdavinder</p>
</footer>
</>

  );

}
 
export default Layout;

 