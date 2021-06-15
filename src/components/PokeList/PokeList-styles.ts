import styled from 'styled-components';

export const List = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 75rem) {
    grid-template-columns: repeat(2, auto);
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;
