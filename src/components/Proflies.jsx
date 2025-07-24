import { Link } from 'react-router-dom';
import './profiles.css';

export default function Profiles({ allUsers, checkProfile }) {
  return (
    <div id="profile-section">
      <h1>Who's watching?</h1>

      <div id="all-profiles">
        {allUsers.map((user, index) => {
          return (
            <div id={user.id} key={index}>
              <Link to="/browse" onClick={() => checkProfile(user)}>
                <div className={`image ${user.img}`}>
                  <img src={user.img} alt="" />
                </div>
                <h3>{user.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>

      <button id="manage-profiles">Manage Profiles</button>
    </div>
  );
}
