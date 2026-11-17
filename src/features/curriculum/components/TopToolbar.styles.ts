import styled from "styled-components";

export const Header = styled.header`
  background-color: #fff;
  border-radius: 0 0 15px 15px;
  flex-direction: column;
  margin: 00px auto 20px auto;
  max-width: 1024px;
  z-index: 1;

  @media print {
    display: none;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;

export const ButtonControl = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
