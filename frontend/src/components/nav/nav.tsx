import "./nav.css";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Nav() {
  return (
    <nav>
      <NavLink to="/collection">Game Collection</NavLink>{" | "}
      <NavLink to="/progress">Game Progress</NavLink>

      {" | "}

      <SignedOut>
        <SignInButton mode="modal">
          <button style={{ marginLeft: "10px" }}>Login</button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <span style={{ marginLeft: "10px" }}>
          <UserButton afterSignOutUrl="/" />
        </span>
      </SignedIn>
    </nav>
  );
}

export default Nav;