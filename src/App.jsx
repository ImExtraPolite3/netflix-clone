import Profiles from './components/Proflies';
import Browse from './components/Browse';
import Error from './components/Error';
import users from './components/allProfiles';
import { useParams } from 'react-router-dom';
import './App.css';
import { useState } from 'react';

function App() {
  let { name } = useParams();
  const [checkProfile, setCheckProfile] = useState('');

  return (
    <>
      {name === 'profiles' ? (
        <Profiles allUsers={users} checkProfile={setCheckProfile} />
      ) : name === 'browse' ? (
        <Browse profileInfo={checkProfile} />
      ) : (
        <Error />
      )}
    </>
  );
}

export default App;
