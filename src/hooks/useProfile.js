/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getPointAPI } from 'api/userAPI';

function usePoint() {
  const [point, setPoint] = useState('');
  const [dialog, setDialog] = useState(false);

  const update = () => {
    getPointAPI().then(result => {
      setPoint(result.data);
    });
  };

  const closeDialog = () => {
    setDialog(false);
  };

  return { point, dialog, update, closeDialog, setDialog };
}

export default usePoint;
