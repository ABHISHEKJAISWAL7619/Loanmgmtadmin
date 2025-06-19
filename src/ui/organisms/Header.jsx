"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[58px] bg-white z-50 w-full">
      <div className="w-full h-full flex items-center justify-between px-4">
        {/* Left: LOGO */}
        <div className="font-nunito font-semibold text-[36px] leading-[20px] tracking-normal text-center  text-black ">
          Logo
        </div>

        {/* Right: Profile Icon + Name */}
        <div className="flex items-center gap-3 mr-10 px-6">
          <Link href="/auth-profile">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="profile"
              width={32}
              height={32}
              className="w-[32px] h-[32px] rounded-full object-cover"
            />
          </Link>
          <span className="text-sm font-medium text-[#475569]">
            Subhash Kumar
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
