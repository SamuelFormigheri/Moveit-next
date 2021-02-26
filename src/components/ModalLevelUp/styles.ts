import styled from 'styled-components';


export const Overlay = styled.div`
  background: var(--overlay);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;
  border-radius: 10px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;

  header{
    font-size: 8.25rem;
    font-weight: 600;
    color: var(--blue);
    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong{
      font-size: 2.25rem;
      color: var(--title);
  }

  p{
      font-size: 1.25rem;
      color: var(--text);
      margin-top: 0.25rem;
  }

  button{
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      background: transparent;
      border: 0;
      font-size: 0;
  }
`;