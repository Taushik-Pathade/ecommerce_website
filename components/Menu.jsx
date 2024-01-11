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
  { id: 1, name: "Jordan", doc_count: 11,  slug: "jordan"},
  { id: 2, name: "Sneakers", doc_count: 8,  slug: "sneakers"},
  { id: 3, name: "Running shoes", doc_count: 64, slug:"running-shoes" },
  { id: 4, name: "Football shoes", doc_count: 107,slug:"football-shoes"},
];

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className=" hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <span key={item.id}>
            {item?.subMenu ? (
              <li
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
                className="cursor-pointer flex items-center gap-2 relative"
              >
                {item.name}
                <Icon.Bs.BsChevronDown size={14} />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((submenu) => (
                      <Link
                      href={`/category/${submenu.slug}`}
                      key={submenu.id}
  onClick={() => setShowCatMenu(false)}
>
  <li className="h-12 flex justify-between items-center px-3 hover:bg-black/5 rounded-md">
    {submenu.name}
    <span className="opacity-50 text-sm">{submenu.doc_count}</span>
  </li>
</Link>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer ">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </span>
        );
      })}
    </ul>
  );
};

export default Menu;
