import React, { FormEvent } from 'react';

import * as S from './Search-styles';

type SearchProps = {
  search: string;
  setSearch: (name: string) => void;
};

const Search = ({ search, setSearch }: SearchProps) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Search
        name="search"
        id="search"
        type="text"
        placeholder="Input the pokemon name..."
        required
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
      {/* <S.Button type="submit"></S.Button> */}
    </S.Form>
  );
};

export default Search;
