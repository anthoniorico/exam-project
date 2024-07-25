// eslint-disable-next-line no-unused-vars
import React from 'react';

const SideBar = () => {
return (
<div className="sidebar">
  {/* SideBar content */}
      <ul className="p-4">
        <a href="https://www.facebook.com/greenfieldintegratedservice/" target="_blank" rel="noopener noreferrer">
        <button className="sidebar-link">Facebook Page</button></a>
        <a href="https://www.upwork.com/freelancers/~019eccfbd2d75bdd0b" target="_blank" rel="noopener noreferrer">
        <button className="sidebar-link">Upwork Page</button></a>
       <a href="https://www.linkedin.com/public-profile/settings?trk=public-profile" target="_blank" rel="noopener noreferrer">
        <button className="sidebar-link">Linkedin Page</button></a>
        <a href="https://ng.indeed.com/m/?from=profOnboarding#" target="_blank" rel="noopener noreferrer">
        <button className="sidebar-link">Indeed Page</button></a>
      </ul>
    </div>
);
}

export default SideBar;
