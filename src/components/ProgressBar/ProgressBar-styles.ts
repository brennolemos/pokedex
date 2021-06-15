import styled from 'styled-components';

export const Progress = styled.div`
  display: flex;
  overflow: hidden;
  height: 1rem;
  line-height: 0;
  font-size: 0.75rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
  flex: 1;
`;

export const ProgressBar = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: var(--gray-3);
  transition: width 0.6s ease;
`;
