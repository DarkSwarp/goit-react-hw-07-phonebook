import css from './filter.module.css';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { filterContacts } from 'components/redux/actions/actions';
import { filterContacts } from '../../redux/slice/filterSplice';

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const filterChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <label className={css.label}>
      Find contact by name
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        onChange={filterChange}
      />
    </label>
  );
}
