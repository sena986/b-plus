import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navi = styled.nav`
  min-height: 70px;
  height: 9vh;
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #263343;
  color: #f0f4f5;
  z-index: 10;
  border-bottom: 2px darkgray solid;
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;

const List = styled.ul`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

const Menu = styled.li`
  margin: 0px 40px;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 15px;
  &:hover {
    color: #d49466;
  }
  @media only screen and (min-width: 1900px) {
    font-size: 20px;
  }
`;

const MiniNavi = styled.nav`
  margin: 0;
  position: fixed;
  right: 0;
  background-color: #263343;
  color: #f0f4f5;
  width: 80vw;
  opacity: 0.95;
  height: 100vh;
  transform: ${({ display }) =>
    display ? "translateX(0)" : "translateX(550px)"};
  transition: transform 0.5s ease-in-out;
  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

const MiniList = styled.ul`
  list-style: none;
`;

const MiniMenu = styled.li`
  font-size: 25px;
  color: #f0f4f5;
`;

const Icon = styled.div`
  width: 2rem;
  height: 2rem;
  display: none;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;

  @media (max-width: 900px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ display }) => (display ? "#d49466" : "#f0f4f5")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ display }) => (display ? "rotate(45deg)" : "retate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ display }) =>
        display ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ display }) => (display ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ display }) => (display ? "rotate(-45deg)" : "retate(0)")};
    }
  }
`;

function Nav() {
  const [display, setDisplay] = useState(false);

  const linked = (e) => {
    const dis = display;
    if (dis === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <>
      <Navi>
        <List>
          <Menu>
            <Link to="/">MAIN</Link>
          </Menu>
          <Menu>
            <Link to="/about">ABOUT US</Link>
          </Menu>
          <Menu>
            <Link to="/contact">CONTACT</Link>
          </Menu>
        </List>
      </Navi>
      <MiniNavi display={display}>
        <MiniList>
          <MiniMenu>
            <Link to="/" onClick={linked}>
              MAIN
            </Link>
          </MiniMenu>
          <MiniMenu>
            <Link to="/about" onClick={linked}>
              ABOUT US
            </Link>
          </MiniMenu>
          <MiniMenu>
            <Link to="/contact" onClick={linked}>
              CONTACT
            </Link>
          </MiniMenu>
        </MiniList>
      </MiniNavi>

      <Icon display={display} onClick={() => setDisplay(!display)}>
        <div />
        <div />
        <div />
      </Icon>
    </>
  );
}

export default Nav;
