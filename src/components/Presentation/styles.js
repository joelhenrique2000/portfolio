import styled from "styled-components";
import imagePresentation from "../../imagePresentation.jpg";

export const StylePresentation = styled.section`
  background: linear-gradient(
      0deg,
      rgba(36, 36, 36, 0.9),
      rgba(36, 36, 36, 0.9)
    ),url(${imagePresentation});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  p:nth-child(1) {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: normal;
    text-align: justify;
    color: #ffffff;
  }

  p:nth-child(2) {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    line-height: normal;
    text-align: center;
    color: #ffffff;
  }

  @media (max-width: 575.98px) {
    padding: 90px 19px;
    
    p:nth-child(1) {
      font-size: 24px;
    }

    p:nth-child(2) {
      font-size: 16px;
    }
  }
  @media (min-width: 576px) and (max-width: 767.98px) {
    padding: 140px 69px;

    p:nth-child(1) {
      font-size: 34px;
    }

    p:nth-child(2) {
      font-size: 26px;
    }
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    padding: 130px 130px;
    p:nth-child(1) {
      font-size: 44px;
    }

    p:nth-child(2) {
      font-size: 26px;
    }
  }
  @media (min-width: 992px) and (max-width: 1199.98px) {
    padding: 130px 169px;

    p:nth-child(1) {
      font-size: 44px;
    }

    p:nth-child(2) {
      font-size: 26px;
    }
  }
  @media (min-width: 1200px) {
    padding: 120px 399px;

    p:nth-child(1) {
      font-size: 44px;
    }

    p:nth-child(2) {
      font-size: 26px;
    }
  }
`;
