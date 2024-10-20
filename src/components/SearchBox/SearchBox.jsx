import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import FormGroup from '../FormGroup/FormGroup';
import styles from './SearchBox.module.css';

function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = query => {
    dispatch(changeFilter(query));
  };

  return (
    <div className={styles.searchBox}>
      <FormGroup
        id="filter"
        label="Find contacts by name"
        value={filter}
        onChange={e => handleChangeFilter(e.target.value)}
        isControlled
      />
    </div>
  );
}

export default SearchBox;
