import Profiles from './components/Proflies';
import users from './components/allProfiles';
import './App.css';

function App() {
  return (
    <>
      <Profiles userImg={users[0].img} userName={users[0].name} />
    </>
  );
}

export default App;
