export default function Profiles({ userImg, userName }) {
  return (
    <div id="profle-section">
      <h1>Who's watching?</h1>

      <div id="profile">
        <a href="#">
          <img src={userImg} alt={userImg} />
          <h3>{userName}</h3>
        </a>
      </div>
    </div>
  );
}
