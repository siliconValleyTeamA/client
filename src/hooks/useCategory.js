/* External dependencies */
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

/* Internal dependencies */
import { getCategoryProjectAPI } from 'api/projectAPI';
import { getCategoryListAPI } from 'api/categoryAPI';
import {postsearchAPI} from 'api/searchAPI';

function useCategory() {
  const filter = useSelector(state => state.filterReducer);
  const category = useSelector(state => state.categoryReducer);
  const [projectList, setProjectList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    // postsearchAPI().then(result => {
    //   console.log(result);
    // });
    getCategoryProjectAPI({
      categoryId: category.id,
      filterType: filter,
    }).then(result => {
      setProjectList(result.data);
    });

    getCategoryListAPI().then(result => {
      setCategoryList(result.data);
    });
  }, [filter, category]);

  return { projectList, categoryList };
}

export default useCategory;
