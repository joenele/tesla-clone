import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Container>
            <NotificationBar>
                <a href="/#">Read Tesla's 2020 Impact Report</a>
            </NotificationBar>
            <a href="/#">
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>
                {cars && cars.map((car, index)=>(
                <a key={index} href="/#">{car}</a>
                ))}
                <a href="/#">Solar Roof</a>
                <a href="/#">Solar Panels</a>
            </Menu>
            <RightMenu>
                <a href="/#">Shop</a>
                <a href="/#">Account</a>
                <a href="/#">Menu</a>
                <CustomMenu onClick={()=> setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show = { burgerStatus }>
                <CloseWrapper>
                    <CustomClose onClick={()=> setBurgerStatus(false)}/>
                </CloseWrapper>
                <li><a href="/#">Existing inventory</a></li>
                <li><a href="/#">Used inventory</a></li>
                <li><a href="/#">Trade-in</a></li>
                <li><a href="/#">Test Drive</a></li>
                <li><a href="/#">Cybertruck</a></li>
                <li><a href="/#">Roadster</a></li>
                <li><a href="/#">Semi</a></li>
                <li><a href="/#">Charging</a></li>
                <li><a href="/#">Powerwall</a></li>
                <li><a href="/#">Commercial Energy</a></li>
                <li><a href="/#">Utilities</a></li>
                <li><a href="/#">Find Us</a></li>
                <li><a href="/#">Support</a></li>
                <li><a href="/#">Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

const NotificationBar = styled.div`
    min-height:50px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    background: white;

    a{
        font-weight: 400;
        font-size: 1.4rem;
        color: #5c5d61;
        text-decoration: none;
        padding-bottom: 1px;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        width: fit-content;
    }
`

const Container = styled.div`
    min-height: 180px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    img {
        width: 130px;
        height: 15px;
    }
    `

const Menu= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight: 500;
        font-size: 1.4rem;
        text-transform: capitalize;
        padding: 4 8px;
        margin: 0 15px;
        flex-wrap: no-wrap;
        text-decoration: none;
        letter-spacing: 0.1rem;
        font-size: 1.5em;
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        font-weight: 600;
        text-transform: uppercase;


        font-weight: 500;
        font-size: 1.4rem;
        text-transform: capitalize;
        padding: 4 8px;
        margin: 0 15px;
        text-decoration: none;
        letter-spacing: 0.1rem;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer; 
`


const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 25px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);

        a {
            text-decoration: none;
            font-weight: 600;
            font-size: 1.4rem;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`
