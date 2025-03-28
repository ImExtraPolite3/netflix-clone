import { useEffect, useState } from 'react';
import './profiles.css';

export default function Profiles({ allUsers, checkProfile }) {
  const [whenOpen, setWhenOpen] = useState(null);

  useEffect(() => {
    setWhenOpen('whenOpen 500ms');
  }, []);

  if (whenOpen === null) return null;

  return (
    <div id="profile-section">
      <h1>Who's watching?</h1>

      <div id="all-profiles">
        {allUsers.map((user, index) => {
          return (
            <div id={user.id} key={index}>
              <a
                href="/browse"
                onClick={(e) => {
                  e.preventDefault();
                  checkProfile(index);
                  setTimeout(() => {
                    window.location.href = '/browse';
                  }, 500);
                }}
              >
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
