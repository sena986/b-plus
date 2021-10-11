import styled from "styled-components";
import { useState } from "react";

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
  @media only screen and (max-width: 900px) {
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
  transform: translateY(-200px);
  opacity: 0.8;
  height: 200px;
  border-bottom-left-radius: 15px;
  transform: ${({ display }) =>
    display ? "translateY(0)" : "translateY(-200px)"};
  transition: transform 0.5s ease-in-out;
  @media only screen and (min-width: 900px) {
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
            <a href="#top">TOP</a>
          </Menu>
          <Menu>
            <a href="#about">ABOUT US</a>
          </Menu>
          <Menu>
            <a href="#contact">CONTACT</a>
          </Menu>
          <Menu>
            <a href="#recruit">RECRUIT</a>
          </Menu>
        </List>
      </Navi>
      <MiniNavi display={display}>
        <MiniList>
          <MiniMenu>
            <a href="#top" onClick={linked}>
              TOP
            </a>
          </MiniMenu>
          <MiniMenu>
            <a href="#about" onClick={linked}>
              ABOUT US
            </a>
          </MiniMenu>
          <MiniMenu>
            <a href="#contact" onClick={linked}>
              CONTACT
            </a>
          </MiniMenu>
          <MiniMenu>
            <a href="#recruit" onClick={linked}>
              RECRUIT
            </a>
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
