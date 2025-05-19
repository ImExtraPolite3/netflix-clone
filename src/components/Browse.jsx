import { useState } from 'react';
import './browse.css';
const mainLinks = [
  'Home',
  'TV Shows',
  'Movies',
  'New & Popular',
  'My List',
  'Browse by Languages',
];

function MainLink({ name, hide, allLinks }) {
  return (
    <ul className={name} style={{ display: hide }}>
      {allLinks.map((links) => {
        return (
          <li>
            <a href="#">{links}</a>
          </li>
        );
      })}
    </ul>
  );
}

function Small() {
  const [hideLink, setHideLinks] = useState('none');

  const handleOnLinks = () => setHideLinks('block');
  const handleOffLink = () => setHideLinks('none');

  return (
    <>
      <div
        className="show-options"
        onMouseEnter={handleOnLinks}
        onMouseLeave={handleOffLink}
      >
        Browse
      </div>
      <MainLink name={'small-links'} hide={hideLink} allLinks={mainLinks} />
    </>
  );
}

export default function Browse({ profileInfo }) {
  return (
    <div id="browse-section">
      <nav id="browse-nav">
        <div className="left">
          <div className="logo">
            <img src="/browse-logo.png" alt="" />
          </div>
          <div className="links">
            {/* <Small /> */}
            <MainLink name={'some'} hide={'flex'} allLinks={mainLinks} />
          </div>
        </div>
        <div className="right">
          {console.log(profileInfo)}
          <img src="/magnify.svg" alt="magnify" />
          <a href="#">Kids</a>
          <img src="/bell-outline.svg" alt="bell-outline" />
          <div className={`small-img ${profileInfo.img}`}></div>
        </div>
      </nav>
      <div className="browse-content">
        <video autoPlay>
          <source src="/trailer.mp4" type="video/mp4" />
        </video>
        <div className="movie-info"></div>
      </div>
    </div>
  );
}
