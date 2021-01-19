/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getPointAPI } from 'api/userAPI';

function usePoint() {
  const [point, setPoint] = useState('');

  useEffect(() => {
    getPointAPI().then(result => {
      setPoint(result.data);
    });
  }, []);

  return point;
}

export default usePoint;
