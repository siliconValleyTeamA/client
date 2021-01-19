import { useState, useEffect } from 'react';
import { getUserAPI } from 'api/userAPI';

function useUser(userId) {
  const [user, setUser] = useState();

  useEffect(() => {
    getUserAPI().then(result => setUser(result.data));
  }, [userId]);

  return user;
}

export default useUser;
