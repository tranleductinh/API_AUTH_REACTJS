import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Scroll, User } from "lucide-react";
import React, { useContext } from "react";
import { Button } from "../ui/button";
import AuthContext from "@/contexts/authContext";

const Header = () => {
  const { logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="flex items-center justify-between py-6 px-8 border-b">
        <div className="flex gap-4 items-center">
          <Scroll />
          <span className="font-bold text-xl">Logo</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {" "}
              <User />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={()=> logOut()}>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
