import styled, { css } from "styled-components"

import { Color } from "../../../constants"

const CustomButtonContainer = styled.button`
  background-color: ${({ isDanger, isDisabled }) => {
    if (isDanger) {
      return Color.DANGER
    }

    if (isDisabled) {
      return Color.DISABLED_PRIMARY
    }

    return Color.PRIMARY
  }} !important;
  align-items: center;
  border: none;
  border-radius: 8px;
  color: #fff;
  cursor: ${({ isDisabled }) =>
    isDisabled ? "not-allowed" : "pointer"} !important;
  display: flex;
  font-size: ${({ isSmall }) => (isSmall ? "0.75rem" : "1rem")};
  font-weight: 500;
  line-height: ${({ isSmall }) => (isSmall ? "26px" : "1.5")};
  padding: ${({ isSmall }) => (isSmall ? "4px 12px" : "8px 24px")};
  transition: background-color 0.1s, box-shadow 0.1s;

  :active,
  :focus {
    outline: none;
  }

  ${({ isDisabled }) =>
    isDisabled
      ? ""
      : css`
          :hover {
            background-color: ${({ isDanger }) =>
              isDanger ? "#eb7676" : "#54abff"} !important;
          }

          :focus {
            background-color: ${({ isDanger }) =>
              isDanger ? Color.DANGER : Color.PRIMARY};
            box-shadow: 0 0 0 2px
              ${({ isDanger }) => (isDanger ? "#eec1c1" : Color.LIGHT_BLUE)} !important;
          }

          :active {
            background-color: ${({ isDanger }) =>
              isDanger ? "#e35454" : "#3c97f0"} !important;
            box-shadow: none;
          }
        `}

  .button-spinner {
    animation: rotating 1s linear infinite;
    height: 24px;
    margin-right: 8px;
    vertical-align: unset;
    width: 24px;
  }
`

export default CustomButtonContainer
