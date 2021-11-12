import { useState } from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import './Filter.scss';
import 'react-toastify/dist/ReactToastify.css';

export default function Filter({ onSubmit }) {
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (filter.trim() === '') {
      return toast.error('Author ID Cannot be empty');
    }
    if (filter.trim() > 10) {
      return toast.error('Author ID cannot be more than 10');
      // due to API returns only 10 authors we limit the query
    }
    onSubmit(filter);
    setFilter('');
  };

  return (
    <>
      <form className="filterForm" onSubmit={handleSubmit}>
        <input
          type="number"
          name="filter"
          value={filter}
          className="filterForm__input"
          autoComplete="off"
          placeholder="Author's id number: (max:10)"
          onChange={e => setFilter(e.target.value)}
        />
        <button type="submit" className="filterForm__btn">
          Search
        </button>
      </form>
      <ToastContainer transition={Zoom} autoClose={3000} />
    </>
  );
}
