import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background:#000;
    height:80px;
    display:flex;
    justify-content:space-between;
    padding:1rem;
    z-index:10;
`
 
export const NavLink = styled(Link)`
    color:#fff;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding:0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        color:#ff0000;

    }
`

export const NavMenu = styled.div`
    display:flex;
    align-items:center;
    margin-right:-24px;

    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavBtn = styled.nav`
    display:flex;
    align-items:center;
    margin-rigth:24px;
    @media screen and (max-width:768px){
        display:none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius:4px;
    background:#ff0000;
    padding:10px 22px;
    color:#fff;
    border:none;
    outline:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition:all 0.2s ease-in-out;
        background:#fff;
        color:#000000;
    }
`