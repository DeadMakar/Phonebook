import styled from 'styled-components';

export const StyledContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: auto;
  width: 1200px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const StyledContactItem = styled.li`
  flex: 0 1 calc(25% - 20px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  transition: background-color 0.3s ease-in-out;
  background: rgba(103, 74, 74, 0.61);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(103, 74, 74, 0.33);

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StyledDeleteButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  padding: 5px 10px;
  border: none;
  width: 30px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #d63431;
  }
`;
