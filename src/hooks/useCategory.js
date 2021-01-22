/* External dependencies */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import { getCategoryProjectAPI } from 'api/projectAPI';
import { getCategoryListAPI } from 'api/categoryAPI';

function useCategory() {
  const filter = useSelector(state => state.filterReducer);
  const category = useSelector(state => state.categoryReducer);
  const [projectList, setProjectList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getCategoryProjectAPI({
      categoryId: category.id,
      filterType: filter,
    }).then(result => {
      setProjectList(result.data);
      console.log(result.data);
    });

    getCategoryListAPI().then(result => {
      setCategoryList(result.data);
      console.log(result.data);
    });
  }, [filter, category]);

  return { projectList, categoryList };
}

export default useCategory;
