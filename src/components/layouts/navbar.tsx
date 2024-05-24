import React from 'react';
import MaxWidthWrapper from '../utils/max-width-wrapper';
import { Menu, Moon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=" sticky inset-x-0 top-0 z-[100] h-20 w-full border-b bg-[#0F172A]/95 backdrop-blur-md  transition-all">
      <MaxWidthWrapper className="flex items-center justify-between ">
        <h1 className="text-md md:text-md font-bold text-white md:pr-5  ">Ｆｌａｓｈｅｙ</h1>
        {/* mobile menu */}
        <div className="mr-5 flex items-center justify-between gap-10">
          <div className="links hidden items-center justify-start text-white md:flex md:gap-8 lg:gap-12 xl:gap-16  ">
            <Link href="/">Home</Link>
            <Link href="/">Referral</Link>
            <Link href="/">FAQs</Link>
            <Link href="/">Our Team</Link>
            <Link href="/">Solutions</Link>
          </div>
        </div>
        <div className="mx-2 flex items-center gap-6">
          <Menu className="text-white md:hidden" />
          <Moon className="text-white" />
        </div>
      </MaxWidthWrapper>
      <div className="w-full  border-b border-slate-500" />
    </nav>
  );
};
export default Navbar;