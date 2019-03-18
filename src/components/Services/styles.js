import styled from 'styled-components'

export const StyleServices = styled.section`
    background: #8C43FF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 14px;

    .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: normal;
        text-align: justify;
        color: #FFF;
    }

    .service {
        margin: 13px 0;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: normal;
        color: #8C43FF;
        background: #FFF;
        border-radius: 2px;
        display: flex;
        justify-content: start;

        @media (max-width: 575.98px) {
            padding: 15px;
        }
        @media (min-width: 576px) and (max-width: 767.98px) {
            padding: 15px;
        }
        @media (min-width: 768px) and (max-width: 1199.98px) {
            padding: 15px 30px;
            font-size: 17px;
        }
        @media (min-width: 1200px) {
            padding: 25px 30px;
            font-size: 20px;
        }
    }

    li {
        list-style-type: none;
    }
`