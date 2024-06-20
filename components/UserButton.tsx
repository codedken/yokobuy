import { LogOut, Settings } from "lucide-react";
import { User } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import toast from "react-hot-toast";
import AlertDialogMenu from "@/app/components/AlertDialogMenu";

interface UserButtonProps {
  user: User;
}

export default function UserButton({ user }: UserButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          className="flex-none border w-11 h-11 border-primary/30 rounded-full"
        >
          <Image
            src={user.image || "/avatar_placeholder.png"}
            alt="User profile picture"
            width={50}
            height={50}
            className="aspect-square rounded-full bg-white object-cover"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{user.name || "User"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/settings">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="cursor-pointer">
          <AlertDialogMenu
            action={() => {
              signOut({ callbackUrl: "/" });
              toast.success("You logged out successfully...");
            }}
          >
            <button className="flex w-full text-sm py-1.5 rounded-sm hover:bg-gray-100 items-center">
              <LogOut className="mx-2 h-4 w-4" /> Sign Out
            </button>
          </AlertDialogMenu>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
