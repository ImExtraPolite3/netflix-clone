import Profiles from './components/Proflies';
import users from './components/allProfiles';
import './App.css';

function App() {
  return (
    <>
      <Profiles allUsers={users} />
    </>
  );
}

export default App;
