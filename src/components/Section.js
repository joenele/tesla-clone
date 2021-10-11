import React from 'react';
import styled from "styled-components";
import Fade from 'react-reveal';
import Zoom from 'react-reveal/Zoom'



function Section({ title, description, leftBtnText, rightBtnText, backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <Fade up>
                    <h1>{ title }</h1>
                </Fade>
                <Zoom>
                    <p>{ description }</p>
                </Zoom>
            </ItemText>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <Fade left>
                            <LeftButton>
                                { leftBtnText}
                            </LeftButton>
                        </Fade>
                        <Fade right>
                        {rightBtnText && //only show right btn if it exists
                            <RightButton>
                                { rightBtnText}
                            </RightButton>
                        }
                        </Fade>
                    </ButtonGroup>
                </Fade>
                <DownArrow src="/images/down-arrow.svg"></DownArrow>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size:cover;
    background-position:center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical
    align-items: center; // horizontal
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

    h1{
        font-size: 4rem;
        font-weight: 500;
        line-height: 4.8rem;
        color: #393c41;
        animation: animateUp 1s;
    }

    p{
        color:#5c5d61;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 2rem;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1s;
`

const Buttons = styled.div`
`
