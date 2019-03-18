import styled from 'styled-components'

export const StyleImage = styled.div`
    @media (min-width: 768px) {
        width: 240px;
        height: 200px;      
    }

    width: 200px;
    height: 160px;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-size: cover;

    :hover::after{
        @media (min-width: 768px) {
            width: 240px;
            height: 200px;
        }

        content: 'veja mais';
        position: absolute;
        width: 200px;
        height: 160px;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(0deg, rgba(36, 36, 36, 0.9), rgba(36, 36, 36, 0.9)), url(${props => props.image});
        background-repeat: no-repeat;
        background-size: cover;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: normal;
        text-align: justify;
    }
`

export const StylePortfolio = styled.section`
    background: #FFF;
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
        color: #293347;
        margin-bottom: 20px;
    }

    .portfolio {
        display: flex;
        align-items: center;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        section {
            border-radius: 5px;
            margin: 10px;

            p {
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 17px;
                line-height: normal;
                text-align: center;
                color: #293347;
            }
        }
    }


`

