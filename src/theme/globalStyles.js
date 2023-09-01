import "focus-visible/dist/focus-visible";
import { css } from "@emotion/react";
const GlobalStyles = css`
  .js-focus-visible :focus:not([data-focus-visible-added]) {
    outline: none;
    box-shadow: none;
  }
`;
export default GlobalStyles;
