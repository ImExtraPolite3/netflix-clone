import './error.css';

export default function Error() {
  return (
    <div id="error-page">
      <nav>
        <img src="/netflix-logo.png" alt="" />
      </nav>

      <div className="content">
        <h1>Lost your way?</h1>
        <p>
          Sorry, we can't find that page. You'll find lots to explore on the
          home page
        </p>
        <button>Netfilx Home</button>
        <p>
          Error Code <span>NSES-404</span>
        </p>
      </div>
    </div>
  );
}
