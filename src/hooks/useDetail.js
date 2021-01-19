/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getProjectDetailAPI } from 'api/projectAPI';

function useDetail(projectId) {
  const [project, setProject] = useState({});

  useEffect(() => {
    getProjectDetailAPI({ projectId }).then(result => {
      setProject(result.data[0]);
    });
  }, [projectId]);

  return { project };
}

export default useDetail;
