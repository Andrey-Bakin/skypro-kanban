import styled from "styled-components";

export const RegModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & input:not(:last-child) {
    margin-bottom: 7px;
  }
`;

