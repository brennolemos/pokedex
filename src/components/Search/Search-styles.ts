import styled from 'styled-components';

import icon from '../../assets/images/search.svg';

export const Form = styled.form`
  max-width: 600px;
  margin: 0 auto 1.5rem auto;
  position: relative;
  padding: 0 0.5rem;
`;

export const Search = styled.input`
  font-family: 'Nunito', sans-serif;
  border-radius: 0.25rem;
  border: 1px solid var(--white);
  padding: 1rem;
  padding-left: 4rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s ease;
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  border: none;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    transform: scale(1.1);
  }
`;

export const Button = styled.button`
  width: 4rem;
  height: 3.125rem;
  background: url(${icon}) no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  left: 0;
  right: 0;
  outline: none;
  box-shadow: none;
`;
