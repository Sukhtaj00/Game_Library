import { Outlet } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Nav from "../nav/nav";

function Layout() {
  return (
    <>
      <header style={{ position: "relative" }}>
        <h1>Game Library Tracker</h1>

        {/* Clerk Auth Controls */}
        <div style={{ position: "absolute", top: 10, right: 20 }}>
          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

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