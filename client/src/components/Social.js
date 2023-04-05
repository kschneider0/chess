import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BaseContainer from './BaseContainer';
import NavBar from './NavBar';

import Profile from './Profile';
import ActiveGames from './ActiveGames';
import UserList from './UserList';

function Social({ user, onLogout, onClickPlay }) {

  const { id } = useParams();

  const [profileData, setProfileData] = useState({});
  const [showFriends, setShowFriends] = useState(true);

  const handleClickButton = () => {
      console.log('fire!')
      setShowFriends(!showFriends);
  };

    useEffect(() => {
      fetch(`/users/${id}`)
        .then(res => res.json())
        .then(data => setProfileData(data));
    }, []);    

    return (
        <BaseContainer>
          <NavBar 
            user={user}
            onLogout={onLogout} 
            onClickPlay={onClickPlay}
          />
          <Profile user={user} profileData={profileData}/>
          <UserList onClickButton={handleClickButton}/>
        </BaseContainer>
    );
}

export default Social;