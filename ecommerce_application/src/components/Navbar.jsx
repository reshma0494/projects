import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const listItems = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Collection', path: '/collection' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' },
  ];
  const [visible, setVisible] = useState(false);
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="logo image" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {listItems.map((listItem) => {
          return (
            <NavLink
              key={listItem.id}
              to={listItem.path}
              className="flex flex-col items-center gap-1"
            >
              <p>{listItem.name.toUpperCase()}</p>
              <hr className="w-2/4 h-[1.5px] bg-gray-700 hidden"></hr>
            </NavLink>
          );
        })}
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor pointer"
        />
        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="profile-icon"
            className="w-5 cursor-pointer"
          />
          <div className="group-hover:block hidden dropdown-menu absolute right-0 top-6">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to={'/cart'} className="relative">
          <img
            src={assets.cart_icon}
            alt="cart-icon"
            className="w-5 cursor-pointer"
          />
          <p className="bg-gray-900 absolute bottom-[-5px] right-[-5px] w-4 leading-4 text-center text-amber-400 aspect-square rounded-full text-[8px]">
            100
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          alt="menu-icon"
          className="cursor-pointer w-5 sm:hidden"
        ></img>
      </div>
      {visible && (
        <div
          className={`absolute right-0 top-0 bottom-0 bg-white overflow-hidden flex flex-col p-4 transition-all ${
            visible ? 'w-full' : 'w-0'
          }`}
        >
          <div
            className="flex items-center cursor-pointer py-2"
            onClick={() => setVisible(false)}
          >
            <img
              src={assets.dropdown_icon}
              alt="dropdown-icon"
              className="h-3 rotate-180"
            />
            <p className="px-2">Back</p>
          </div>
          {listItems.map((listItem) => {
            return (
              <NavLink
                key={listItem.id}
                to={listItem.path}
                className="gap-1 p-2"
                onClick={() => setVisible(false)}
              >
                <p>{listItem.name.toUpperCase()}</p>
              </NavLink>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Navbar;
