// import users from './allProfiles';

export default function Profiles({ allUsers }) {
  return (
    <div id="profle-section">
      <h1>Who's watching?</h1>

      {allUsers.map((user, index) => {
        return (
          <div id="profile" key={index}>
            <a href="#">
              <img src={user.img} alt={user.img} />
              <h3>{user.name}</h3>
            </a>
          </div>
        );
      })}
    </div>
  );
}
