/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getHistoryAPI } from 'api/historyAPI';

function useHistory() {
  const [historyList, setHistoryList] = useState([]);

  useEffect(() => {
    getHistoryAPI().then(result => {
      setHistoryList(result.data);
    });
  }, [historyList]);

  return historyList;
}

export default useHistory;
