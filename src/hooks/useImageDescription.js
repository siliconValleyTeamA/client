import { useState, useEffect } from 'react';
import { getImageDescriptionAPI } from 'api/projectAPI';

function useImageDescription(projectId, language) {
  const [data, setData] = useState({});

  useEffect(() => {
    getImageDescriptionAPI({ projectId, language }).then(result => {
      setData(result.data);
    });
  }, [projectId]);

  return data;
}

export default useImageDescription;
