/* External dependencies */
import { useState, useEffect } from 'react';
import { getProjectUserJjimAPI } from 'api/projectAPI';

/* Internal dependencies */
import { createJjimAPI, removeJjimAPI } from 'api/jjimAPI';

function useProjectJjim(projectId) {
  const [jjim, setJjim] = useState(false);

  useEffect(() => {
    getProjectUserJjimAPI({ projectId }).then(result => {
      setJjim(result.data.jjim_id);
    });
  }, [projectId]);

  const createJjim = () => {
    setJjim(true);
    createJjimAPI({ projectId });
  };

  const removeJim = () => {
    setJjim(false);
    removeJjimAPI({ jjimId: jjim });
  };

  return { jjim, createJjim, removeJim };
}

export default useProjectJjim;
