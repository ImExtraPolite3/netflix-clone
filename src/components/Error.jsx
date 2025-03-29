import './error.css';

export default function Error() {
  return (
    <div id="error-page">
      <nav id="error-nav">
        <a href="/profiles">
          <img src="/netflix-logo.png" alt="" />
        </a>
      </nav>

      <div className="content">
        <h1>Lost your way?</h1>
        <p className="error-message">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <form action="/profiles">
          <button className="return">Netfilx Home</button>
        </form>
        <p className="error-code">
          Error Code <span>NSES-404</span>
        </p>
        <div className="credits">
          FROM <span>LOST IN SPACE</span>
        </div>
      </div>
    </div>
  );
}
