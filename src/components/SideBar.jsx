// eslint-disable-next-line no-unused-vars
import React from 'react';

const SideBar = () => {
return (
<div className="sidebar">
  {/* SideBar content */}
      <ul className="p-4">
        <button className="sidebar-link">Official Website</button>
        <button className="sidebar-link">Upwork Page</button>
        <button className="sidebar-link">Linkedin Page</button>
        <button className="sidebar-link">Indeed Page</button>
      </ul>
    </div>
);
}

export default SideBar;