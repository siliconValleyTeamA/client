/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import {
  getScheduleProjectListAPI,
  getSoonSuccessProjectListAPI,
} from 'api/projectAPI';

function useMainData() {
  const [scheduleProjectList, setScheduleProjectList] = useState([]);
  const [soonSuccessProjectList, setSoonSuccessProjectList] = useState([]);

  useEffect(() => {
    getScheduleProjectListAPI().then(result => {
      setScheduleProjectList(result.data);
    });
    getSoonSuccessProjectListAPI().then(result => {
      setSoonSuccessProjectList(result.data);
    });
  }, []);

  return { scheduleProjectList, soonSuccessProjectList };
}

export default useMainData;
