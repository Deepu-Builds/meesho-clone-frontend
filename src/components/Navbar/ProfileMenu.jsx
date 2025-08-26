import { useState } from "react";
import { User2Icon, ShoppingBagIcon } from "lucide-react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative font-bold"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Profile link */}
      <div className="flex flex-col h-18 justify-center items-center cursor-pointer text-[#353543] hover:text-[#9F2089] hover:cursor-default hover:border-b-2 duration-150">
        <User2Icon className="w-6 h-6 " />
        <p className="text-sm font-montserrat hover:cursor-text">Profile</p>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-[-70px] top-[67px] mt-2 w-50 h-60 bg-white rounded-b-xl shadow-sm border-gray-400 border-t-white  p-4 z-50">
          <h3 className="font-bold text-gray-800">Hello User</h3>
          <p className="text-xs text-gray-500 mb-3">
            To access your MeeStore account
          </p>

          {/* Sign Up button */}
          <button className="w-full bg-[#9F2089] text-white py-2 rounded-md font-medium hover:bg-[#8f227c]">
            Sign Up
          </button>

          <div className="border-t my-3"></div>

          {/* Orders */}
          <div className="flex items-center gap-2 py-2 hover:text-[#9F2089]  cursor-pointer">
            <ShoppingBagIcon className="w-4 h-4" />
            <span>My Orders</span>
          </div>

          <div className="border-t my-3"></div>

          {/* Delete account */}
          <p className="text-red-700 hover:text-red-900 cursor-pointer">
            Delete Account
          </p>
        </div>
      )}
    </div>
  );
}
