import { useState } from 'react';
import { MESSAGE_KEYWORD_REQUIRED } from '../../utils/constants';
import './SearchForm.css';

function SearchForm({ onSearch, searchData: searchFields }) {
  const [searchData, setSearchData] = useState({
    keyword: searchFields ? searchFields.keyword : '',
    isShort: searchFields ? searchFields.isShort : true,
  });
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ?
      event.target.checked : event.target.value;
    setSearchData({
      ...searchData,
      [name]: value
    });
    setError('');
  }

  // function handleChecked(event) {
  // handleChange(event);
  // onSearch(searchFields);
  // }

  function handleSearch(event) {
    event.preventDefault();
    if (searchData.keyword) {
      onSearch(searchData);
      setError('');
    } else {
      setError(MESSAGE_KEYWORD_REQUIRED);
    }
  }

  return (
    <form className="search-form"
      onSubmit={handleSearch}
      name="search"
      noValidate>
      <div className="search-form__container-text">
        <label className="search-form__label-text">
          <input className="search-form__input"
            name="keyword"
            type="text"
            value={searchData.keyword}
            onChange={handleChange}
            placeholder="Фильм"
            required />
          <span className="search-form__input-error keyword-input-error">
            {error}
          </span>
        </label>
        <button className="search-form__button-find"
          type="submit" />
      </div>
      <div className="search-form__container-short">
        <label className="search-form__label-short">
          <input className="search-form__checkbox"
            name="isShort"
            type="checkbox"
            checked={searchData.isShort}
            onChange={handleChange} />
          <span className="search-form__visible-checkbox" />
          Короткометражки
        </label>
      </div>
    </form>
  );
}

export default SearchForm;