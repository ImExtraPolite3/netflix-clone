import './browse.css';

export default function Browse({ profileInfo }) {
  return (
    <div id="browse-section">
      <nav id="browse-nav">
        <div className="left">
          <div className="logo">
            <img src="/browse-logo.png" alt="" />
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">TV Shows</a>
              </li>
              <li>
                <a href="#">Movies</a>
              </li>
              <li>
                <a href="#">New & Popular</a>
              </li>
              <li>
                <a href="#">My List</a>
              </li>
              <li>
                <a href="#">Browse by Languages</a>
              </li>
            </ul>
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
    </div>
  );
}
