import React from 'react'

const Header = () => {
  return (
    <div className="flex list-none justify-between pb-10 pt-20  px-40">
      <nav className="flex gap-3">
        <li>
          <h1 className="font-extrabold font-sans">Notifications</h1>
        </li>
        <li className="bg-[#0A317B] text-white flex justify-center w-[30px] rounded-[5px]">
          <p>3</p>
        </li>
      </nav>
      <div>
        <p className="font-medium">Mark all as read</p>
      </div>
    </div>
  );
}

export default Header