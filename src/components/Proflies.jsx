import './profiles.css';

export default function Profiles({ allUsers }) {
  return (
    <div id="profile-section">
      <h1>Who's watching?</h1>

      <div id="all-profiles">
        {allUsers.map((user, index) => {
          return (
            <div id={user.id} key={index}>
              <a href="#">
                <div className={`image ${user.img}`}></div>
                <h3>{user.name}</h3>
              </a>
            </div>
          );
        })}
      </div>

      <button id="manage-profiles">Manage Profiles</button>
    </div>
  );
}
