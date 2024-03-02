"use client";

import { logOut } from "@/hooks/useAuth";
import { LogOutIcon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Codeleap Network</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={logOut}>
          <LogOutIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
