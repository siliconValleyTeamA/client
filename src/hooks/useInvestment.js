/* External dependencies */
import { useState, useEffect } from 'react';

/* Internal dependencies */
import { getInvestmentAPI } from 'api/investmentAPI';

function useInvestment() {
  const [investmentList, setInvestmentList] = useState([]);

  useEffect(() => {
    getInvestmentAPI().then(result => {
      setInvestmentList(result.data);
    });
  }, []);

  return investmentList;
}

export default useInvestment;
