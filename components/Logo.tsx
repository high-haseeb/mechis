import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-[2.5%] w-[95%] left-[2.5%] flex items-center justify-between z-50">
      <Logo />
      <Login />
    </div>
  );
};
const Login = () => {
  return (
    <div className="flex gap-4">

      <button className="bg-gray-700 font-bold text-white px-6 py-2 rounded-2xl">login</button>
      <button className="bg-brLime font-bold text-white px-6 rounded-2xl">signup</button>
      <button className="">
        <Image src={'/language.svg'} width={40} height={100} alt="menu" className="object-cover text-brLime" />
      </button>
      <button className="">
        <Image src={'/menu.svg'} width={40} height={100} alt="menu" className="object-cover text-brLime" />
      </button>

    </div>
  );
};
const Logo = () => {
  return (
    <div>
      <Image
        src="/logo-full.svg"
        width={150}
        height={400}
        className="object-cover"
        alt="mechis-logo"
      />
    </div>
  );
};

export default Navbar;
