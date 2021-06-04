import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 1rem;
  align-items: center;
  cursor: pointer;

  &:hover {
    img {
      top: -30%;
    }
  }
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
  position: relative;
  top: -25%;
  margin-bottom: -25%;
  max-width: 12.5rem;
  transition: all 0.3s ease;
`;
