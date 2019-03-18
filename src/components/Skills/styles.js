import styled from 'styled-components'

export const StyleSkillsPoints = styled.section`

    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        justify-content: end;
        align-items: center;
    }

    p:nth-child(1){
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: normal;
        text-align: center;
        color: #293347;
        margin-right: 17px;
    }
`

export const StyleSkills = styled.section`
    
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0;

    .title {
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: normal;
        text-align: justify;
        color: #293347;
    }

    .pointsTable {
        display: flex;
        flex-direction: row;
    }

    .point {
        background: #8C43FF;
    }

    @media (max-width: 767.98px) {
        .point {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            margin: 0 4px;
        }
    }
    @media (min-width: 768px) and (max-width: 991.98px) {
        .point {
            width: 44px;
            height: 24px;
            border-radius: 0;
            margin: 0;
        }
    }
    @media (min-width: 992px) and (max-width: 1199.98px) {
        .point {
            width: 54px;
            height: 29px;
            border-radius: 0;
            margin: 0;
        }
    }
    @media (min-width: 1200px) {
        .point {
            width: 64px;
            height: 29px;
            border-radius: 0;
            margin: 0;
        }
    }

    .gray {
        background: #C4C4C4;
    }
    
`