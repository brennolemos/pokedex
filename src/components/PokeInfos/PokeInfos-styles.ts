import styled from 'styled-components';

export const Infos = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);

  @media (max-width: 768px) {
    grid-template-columns: auto;
  }
`;

export const Column = styled.div`
  padding: 1rem;
`;

export const Title = styled.h2`
  color: var(--white);
  text-transform: capitalize;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const Id = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-weight: bold;
  font-size: 1.125rem;
`;

export const Image = styled.img`
  max-width: 20rem;
  margin: 0 auto;
`;
