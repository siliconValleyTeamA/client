/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getJjimListAPI } from 'api/jjimAPI';

function useJjim() {
  const [jjimList, setJjimList] = useState([]);

  useEffect(() => {
    getJjimListAPI().then(result => {
      setJjimList(result.data);
    });
  }, []);

  function onRemove(jjim_id) {
    setJjimList(jjimList.filter(jjim => jjim.jjim_id !== jjim_id));
  }

  return { jjimList, onRemove };
}

export default useJjim;
