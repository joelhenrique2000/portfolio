import styled from 'styled-components'

export const StyleAbout = styled.section`
    background: #8C43FF;
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: center;
    
    .photo {
        width: 118px;
        height: 118px;
        background: #FFF;
        border-radius: 50%;
    }
    p:nth-child(2) {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 22px;
        line-height: normal;
        text-align: center;
        color: #FFFFFF;
    }
    p:nth-child(3) {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: normal;
        text-align: center;
        color: #FFFFFF;
    }

    @media (max-width: 575.98px) {
        padding: 40px 31px;
    }
    @media (min-width: 576px) and (max-width: 767.98px) {
        padding: 80px 51px;
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        padding: 120px 111px;
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        padding: 120px 151px;
    }
    @media (min-width: 1200px) {
        padding: 120px 191px;
    }
`