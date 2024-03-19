import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: "BasisGrotesquePro";
    src: url("../../fonts/BasisGrotesquePro-Regular.eot");
    src: url("../../fonts/BasisGrotesquePro-Regular.eot") format("embedded-opentype"),
      url("../../fonts/BasisGrotesquePro-Regular.woff2") format("woff2"),
      url("../../fonts/BasisGrotesquePro-Regular.woff") format("woff"),
      url("../../fonts/BasisGrotesquePro-Regular.ttf") format("truetype");
    font-weight: 400;
  }

  @font-face {
    font-family: "BasisGrotesquePro";
    src: url("../../fonts/BasisGrotesquePro-Medium.eot");
    src: url("../../fonts/BasisGrotesquePro-Medium.eot") format("embedded-opentype"),
      url("../../fonts/BasisGrotesquePro-Medium.woff2") format("woff2"),
      url("../../fonts/BasisGrotesquePro-Medium.woff") format("woff"),
      url("../../fonts/BasisGrotesquePro-Medium.ttf") format("truetype");
    font-weight: 500;
  }

  @font-face {
    font-family: "BasisGrotesquePro";
    src: url("../../fonts/BasisGrotesquePro-Bold.eot");
    src: url("../../fonts/BasisGrotesquePro-Bold.eot") format("embedded-opentype"),
      url("../../fonts/BasisGrotesquePro-Bold.woff2") format("woff2"),
      url("../../fonts/BasisGrotesquePro-Bold.woff") format("woff"),
      url("../../fonts/BasisGrotesquePro-Bold.ttf") format("truetype");
    font-weight: 700;
  }

body {
    font-family: "BasisGrotesquePro", sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

a {
  text-decoration: none;
}

.scale-in-center {
	-webkit-animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    opacity: 1;
  }
}

`

export default GlobalStyles
