import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;

export const ActionWrapper = styled.div`
  grid-column: 1 / 12;
  grid-row: 1;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
