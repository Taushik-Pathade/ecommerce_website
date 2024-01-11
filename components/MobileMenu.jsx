import { Icon } from "@/Icon";
import { imagedata } from "@/imagedata";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
];

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="  flex flex-col md:hidden items-center gap-8 font-bold absolute text-black top-12 left-0 w-full h-[calc(100vh-50px)] bg-white border-t ">
      {data.map((item) => {
        return (
          <span key={item.id}>
            {!!item?.subMenu ? (
              <li
                onClick={() => setShowCatMenu(!showCatMenu)}
                className="cursor-pointer py-4 px-5 border-b flex flex-row   relative"
              >
                {item.name}
                <div className="flex absolute right-0  justify-between items-center">
                  <Icon.Bs.BsChevronDown size={14} />
                </div>
                {showCatMenu && (
                  <ul className="mt-7 rounded-xl  absolute bg-white shadow-md -mx-10  -mb-4">
                    {subMenuData.map((submenu) => (
                      <Link
                      href={`/category/${submenu.slug}`}
                        key={submenu.id}
                        onClick={() => {
                          setShowCatMenu(false);
                          setMobileMenu(false);
                        }}
                      >
                        <li className="py-4   px-8 border-t justify-between">
                          {submenu.name}
                          <span className="ml-6 opacity-50 text-sm ">
                            {submenu.doc_count}
                          </span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b ">
                <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </span>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
