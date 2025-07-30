"use client";

import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
  isNew?: boolean;
}

const menuData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Products",
    href: "/products/",
    submenu: [
      { label: "EMR for Dental Practice", href: "/products/dental-emr/" },
      { label: "EMR for Eye Care Delivery", href: "/products/eye-care-emr/" },
      { label: "EMR for Ortho Care", href: "/products/ortho-care-emr/" },
      { label: "EMR for Dermatology", href: "/products/dermatology-emr/" },
    ],
  },
  { label: "Portfolio", href: "/portfolio/" },
  { label: "Contact", href: "/contact/" },
  { label: "Subscription", href: "/subscriptionplan/" },
];

const Navbar: React.FC = () => {
  const currentRoute = usePathname();
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [menu, setMenu] = useState<boolean>(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState<number | null>(null);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      setShowMobileServices(false);
      if (window.scrollY > 170) {
        header?.classList.add("is-sticky");
      } else {
        header?.classList.remove("is-sticky");
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMenu = (items: MenuItem[]) => {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 992;

    return items.map((item, index) => {
      const hasSubmenu = !!item.submenu;
      const isSubmenuOpen = openSubmenuIndex === index;

      return (
        <li className="nav-item" key={index}>
          <div className="d-flex align-items-center w-100">
            <Link
              href={item.href}
              className={`nav-link ${
                item.href === currentRoute ? "active" : ""
              }`}
            >
              {item.label} {item.isNew && <span className="new">New</span>}
            </Link>

            {hasSubmenu && (
              <span
                className={`dropdown-toggle-icon ${
                  isMobile && isSubmenuOpen ? "rotate" : ""
                }`}
                onClick={(e) => {
                  if (isMobile) {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenSubmenuIndex(isSubmenuOpen ? null : index);
                  }
                }}
              >
                <Icon.ChevronDown size={16} />
              </span>
            )}
          </div>

          {hasSubmenu && (
            <ul
              className={`dropdown-menu ${
                isMobile && !isSubmenuOpen ? "d-none" : ""
              }`}
            >
              {renderMenu(item.submenu!)}
            </ul>
          )}
        </li>
      );
    });
  };

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom health-tech-navbar">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/" className="navbar-brand">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={180}
                height={56}
              />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto">{renderMenu(menuData)}</ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
