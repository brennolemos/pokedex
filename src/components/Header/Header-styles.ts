import styled from 'styled-components';

export const Header = styled.header`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  position: relative;
`;

export const Logo = styled.h1`
  color: var(--gray-2);
  transition: all 0.3s ease;

  &:hover {
    color: var(--gray-3);
  }
`;
