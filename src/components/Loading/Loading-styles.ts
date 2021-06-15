import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.2);
`;

export const Loading = styled.div`
  margin: auto;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 10px solid rgba(255, 255, 255, 0.5);
  border-right-color: transparent;
  animation: loading 0.8s infinite;
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
