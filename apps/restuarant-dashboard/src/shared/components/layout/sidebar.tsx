import Image from "next/image";
import SideNav from "./side.nav";
import { Icons } from "../../../utils/Icon";

const Sidebar = () => {
  return (
    <div className="bg-[#111C43] h-screen">
      <div className="p-3 flex flex-col justify-around h-screen">
        <div className="w-[90%] flex flex-col items-center">
          <Image
            src=""
            alt="profile-pic"
            width={120}
            height={120}
            className="rounded-full border-3 border-[rgb(91_111_230)] bg-zinc-300"
          />
          <h5 className="pt-3 text-2xl">Restaurant</h5>
        </div>
        {/* sidenav */}
        <SideNav />
        <div className="flex items-center pl-3 cursor-pointer">
          <span className="text-3xl">{Icons.logOut}</span>
          <span className="block text-2xl px-2">Log Out</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
