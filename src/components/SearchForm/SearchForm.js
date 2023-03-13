import { useState } from 'react';
import './SearchForm.css';

function SearchForm() {
  const [searchData, setSearchData] = useState({
    text: '',
    isShort: true
  });

  function handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox' ?
      event.target.checked : event.target.value;
    setSearchData({
      ...searchData,
      [name]: value
    });
  }

  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <form className="search-form"
      onSubmit={handleSearch}
      name="search"
      noValidate>
      <div className="search-form__container-text">
        <label className="search-form__label-text">
          <input className="search-form__input"
            name="text"
            type="text"
            value={searchData.text}
            onChange={handleChange}
            placeholder="Фильм"
            required />
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