/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getPopularProjectAPI } from 'api/projectAPI';

function usePopular() {
  const [popularProjectList, setPopularProjectList] = useState([]);

  useEffect(() => {
    getPopularProjectAPI().then(result => {
      setPopularProjectList(result.data);
    });
  }, []);

  return popularProjectList;
}

export default usePopular;
