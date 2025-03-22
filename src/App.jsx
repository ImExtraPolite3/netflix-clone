import Profiles from './components/Proflies';
import Browse from './components/Browse';
import users from './components/allProfiles';
import { useParams } from 'react-router-dom';
import './App.css';

function App() {
  let { name } = useParams();

  return (
    <>
      {name === 'profiles' ? (
        <Profiles allUsers={users} />
      ) : name === 'browse' ? (
        <Browse />
      ) : (
        <Profiles allUsers={users} />
      )}
    </>
  );
}

export default App;
