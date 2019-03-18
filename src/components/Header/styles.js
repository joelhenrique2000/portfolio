import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @media (min-width: 768px) and (max-width: 991.98px) {
    .only-mobile {
      display: none;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    .only-mobile {
      display: none;
    }
  }
  @media (min-width: 1200px) {
    .only-mobile {
      display: none;
    }
  }
  
`

export const StyleHeader = styled.header`
  font-family: "Roboto", Segoe UI, Oxygen, Ubuntu, Cantarell, "Open Sans",
    "Helvetica Neue", sans-serif;

  @media (max-width: 575.98px) {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .logo {
      font-weight: bold;
      font-size: 17px;

      span:nth-child(1) {
        color: #3b3b3b;
      }
      span:nth-child(2) {
        color: #5136d8;
      }
    }

    .menu-hamburger {
      height: 30px;
      width: 30px;
      background: #5136d8;
      @import url("https://fonts.googleapis.com/css?family=Lora");

      *,
      *:before,
      *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: #81ecec;
        color: #028b89;
        font-family: "Lora", serif;
      }

      .menu {
        background: #FFF;
        box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
        cursor: pointer;
        height: 30px;
        position: absolute;
        transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
        width: 30px;
        z-index: 2;
      }

      .menu:hover {
        box-shadow: 0 0 0 8px #fff, 0 0 0 8px #fff;
      }

      .hamburger {
        position: relative;
        top: 14px;
        width: 30px;
        height: 2px;
        background: #000;
        display: block;
        transform-origin: center;
        transition: 0.5s ease-in-out;
      }

      .hamburger:after,
      .hamburger:before {
        background: #000;
        content: "";
        display: block;
        transition: 0.5s ease-in-out;
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .hamburger:before {
        top: -10px;
      }

      .hamburger:after {
        bottom: -10px;
      }

      input {
        display: none;
      }

      input:checked ~ label .menu {
        box-shadow: 0 0 0 130vw #fff, 0 0 0 130vh #fff;
      }

      input:checked ~ label .hamburger {
        transform: rotate(45deg);
      }

      input:checked ~ label .hamburger:after {
        transform: rotate(90deg);
        bottom: 0;
      }

      input:checked ~ label .hamburger:before {
        transform: rotate(90deg);
        top: 0;
      }

      input:checked ~ ul {
        opacity: 1;
        visibility: visible;
      }

      ul {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        font-size: 35px;
        opacity: 0;
        transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
        visibility: hidden;
        z-index: 2;
      }

      a {
        color: #5136d8;
        display: block;
        margin-bottom: 1em;
        text-decoration: none;
      }

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        height: 100vh;
        text-align: center;
        width: 80%;
      }
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .logo {
      font-weight: bold;
      font-size: 17px;

      span:nth-child(1) {
        color: #3b3b3b;
      }
      span:nth-child(2) {
        color: #5136d8;
      }
    }

    .menu-hamburger {
      height: 30px;
      width: 30px;
      background: #5136d8;
      @import url("https://fonts.googleapis.com/css?family=Lora");

      *,
      *:before,
      *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        background: #81ecec;
        color: #028b89;
        font-family: "Lora", serif;
      }

      .menu {
        background: #FFF;
        box-shadow: 0 0 0 0 #fff, 0 0 0 0 #fff;
        cursor: pointer;
        height: 30px;
        position: absolute;
        transition: box-shadow 1.1s cubic-bezier(0.19, 1, 0.22, 1);
        width: 30px;
        z-index: 2;
      }

      .menu:hover {
        box-shadow: 0 0 0 8px #fff, 0 0 0 8px #fff;
      }

      .hamburger {
        position: relative;
        top: 14px;
        width: 30px;
        height: 2px;
        background: #000;
        display: block;
        transform-origin: center;
        transition: 0.5s ease-in-out;
      }

      .hamburger:after,
      .hamburger:before {
        background: #000;
        content: "";
        display: block;
        transition: 0.5s ease-in-out;
        position: absolute;
        width: 100%;
        height: 100%;
      }

      .hamburger:before {
        top: -10px;
      }

      .hamburger:after {
        bottom: -10px;
      }

      input {
        display: none;
      }

      input:checked ~ label .menu {
        box-shadow: 0 0 0 130vw #fff, 0 0 0 130vh #fff;
      }

      input:checked ~ label .hamburger {
        transform: rotate(45deg);
      }

      input:checked ~ label .hamburger:after {
        transform: rotate(90deg);
        bottom: 0;
      }

      input:checked ~ label .hamburger:before {
        transform: rotate(90deg);
        top: 0;
      }

      input:checked ~ ul {
        opacity: 1;
        visibility: visible;
      }

      ul {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        list-style: none;
        font-size: 35px;
        opacity: 0;
        transition: 0.25s 0.1s cubic-bezier(0, 1.07, 0, 1.02);
        visibility: hidden;
        z-index: 2;
      }

      a {
        color: #5136d8;
        display: block;
        margin-bottom: 1em;
        text-decoration: none;
      }

      h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        height: 100vh;
        text-align: center;
        width: 80%;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .logo {
      font-weight: bold;
      font-size: 17px;

      span:nth-child(1) {
        color: #3b3b3b;
      }
      span:nth-child(2) {
        color: #5136d8;
      }
    }

    .menu-hamburger {
      height: 50px;
      
      ul {
        display: flex;
        list-style-type: none;
        flex-direction: row;
        padding-inline-start: 0px;

        li {
          margin: 0 10px;
          
          a {
            text-decoration-line: none;
            color: #5136d8;
          }
        }
      }
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .logo {
      font-weight: bold;
      font-size: 17px;

      span:nth-child(1) {
        color: #3b3b3b;
      }
      span:nth-child(2) {
        color: #5136d8;
      }
    }

    .menu-hamburger {
      height: 50px;
      
      ul {
        display: flex;
        list-style-type: none;
        flex-direction: row;
        padding-inline-start: 0px;

        li {
          margin: 0 10px;
          
          a {
            text-decoration-line: none;
            color: #5136d8;
          }
        }
      }
    }
  }
  @media (min-width: 1200px) {
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    .logo {
      font-weight: bold;
      font-size: 17px;

      span:nth-child(1) {
        color: #3b3b3b;
      }
      span:nth-child(2) {
        color: #5136d8;
      }
    }

    .menu-hamburger {
      height: 50px;
      
      ul {
        display: flex;
        list-style-type: none;
        flex-direction: row;
        padding-inline-start: 0px;

        li {
          margin: 0 10px;
          
          a {
            text-decoration-line: none;
            color: #5136d8;
          }
        }
      }
    }
  }
`;
