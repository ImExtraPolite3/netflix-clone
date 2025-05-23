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

function Rows({ rowClass, rowTitle }) {
  return (
    <div className={rowClass}>
      <h2>{rowTitle}</h2>
      <div>
        {Array(6)
          .fill(true)
          .map((_, i) => (
            <div className="show" key={i}></div>
          ))}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="socials">
        <img src="/facebook.svg" alt="facebook-logo" />
        <img src="/instagram.svg" alt="instagram-logo" />
        <img src="/twitter.svg" alt="twitter-logo" />
        <img src="/youtube.svg" alt="youtube-logo" />
      </div>
      <div className="extra-info">
        <ul>
          <li>Audio Description</li>
          <li>Investor Relations</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Legal Notices</li>
          <li>Do Not Sell or Share My Personal Information</li>
        </ul>
        <ul>
          <li>Gift Cards</li>
          <li>Netflix Shop</li>
          <li>Cookie Preferences</li>
          <li>Ad Choices</li>
        </ul>
        <ul>
          <li>Media Center</li>
          <li>Terms of Use </li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <button>Service Code</button>
      <p className="copyright">copyright stuff</p>
    </footer>
  );
}

export default function Browse({ profileInfo }) {
  return (
    <>
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
          <div className="info">
            <div className="movie-info">
              <img src="/movie-logo.png" alt="" width="600px" />
              <p>
                The film explores Clark Kent / Superman's journey to reconcile
                his Kryptonian heritage with his adoptive human family in
                Smallville, Kansas.
              </p>
              <div className="movie-buttons">
                <div className="play">
                  <img src="/play.svg" alt="" />
                  <p>Play</p>
                </div>
                <div className="more-info">
                  <img src="/information-outline.svg" alt="" />
                  <p>More Info</p>
                </div>
              </div>
            </div>
            <div className="all-shows">
              <div className="show-all-shows">
                <Rows rowClass={'row-one'} rowTitle={'Your Next Watch'} />
                <Rows
                  rowClass={'row-two'}
                  rowTitle={"Today's best picks for you"}
                />
                <Rows rowClass={'row-three'} rowTitle={'Romantic Movies'} />
                <Rows
                  rowClass={'row-four'}
                  rowTitle={'Critically Acclaimed TV Shows'}
                />
                <Rows rowClass={'row-five'} rowTitle={'Watch It Again'} />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
