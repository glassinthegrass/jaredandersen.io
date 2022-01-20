import styled from "styled-components";
export const ExternalButton = styled.div`
    cursor: pointer;
    text-decoration: none;
    font-weight: bold;
    padding-left: 3px;
    padding-right: 3px;
    color: rgb(234, 234, 234);
    &:hover {
      color: rgb(234, 234, 234);
      text-shadow: -0.5px -0.5px 0 rgb(69, 91, 116),
        0.5px -0.5px 0 rgb(69, 91, 116), -0.5px 0.5px 0 rgb(69, 91, 116),
        0.5px 0.5px 0 rgb(69, 91, 116);
    }
    &:active {
      color: rgb(69, 91, 116);
      background-color: rgb(234, 234, 234);
      border-radius: 4px;
    }
    @media (min-width: 500px) {
      color: rgb(69, 91, 116);
      text-shadow: -0.7px -0.7px 0 rgb(234, 234, 234),
        0.7px -0.7px 0 rgb(234, 234, 234), -0.7px 0.7px 0 rgb(234, 234, 234),
        0.7px 0.7px 0 rgb(234, 234, 234);
    }
  `,
  InternalButton = styled.div`
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
    color: rgb(234, 234, 234);
    border: 1px solid rgb(234, 234, 234);
    border-radius: 4px;
    &:hover {
      color: rgb(69, 91, 116);
      text-shadow: -1px -1px 0 rgb(234, 234, 234),
        1px -1px 0 rgb(234, 234, 234), -1px 1px 0 rgb(234, 234, 234),
        1px 1px 0 rgb(234, 234, 234);
    }
    &:active {
      background-color: rgb(234, 234, 234);
      color: rgb(69, 91, 116);
    }
  `;
