import styled from "styled-components";

export const TopbarContainer = styled.div`
  .selected {
    color: red;
    text-decoration: underline;
    cursor: pointer;
  }

  .unselected {
    color: black;
    cursor: default;
    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  border: 1px solid black;
  width: 100px;
`;
