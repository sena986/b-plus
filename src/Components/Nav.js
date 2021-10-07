import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
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
`;

const List = styled.ul`
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  list-style: none;
  @media only screen and (max-width: 900px) {
    height: 100%;
    transform: translateY(-200px);
    opacity: 0;
    flex-direction: column;
    animation: ${(props) =>
        props.display === true ? props.appear : props.disappear}
      1s linear forward;
  }
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
  @media only screen and (max-width: 900px) {
    font-size: 25px;
    display: none;
  }
`;

const displayAppear = keyframes`
from {
  opacity: 0;
  transform: translateY(-200px);
}
to {
  opacity: 1;
  display: block;
  transform: translateY(0);
}
`;

const displayDisAppear = keyframes`
from {
  opacity: 1;
  transform: translateY(0);
}
to {
  opacity: 0;
  display: none;
  transform: translateY(-200px);
}
`;

const Icon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 32px;
  top: 20px;
  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

function Nav() {
  const [display, setDisplay] = useState(false);

  const hamburg = (e) => {
    e.preventDefault();
    const dis = display;
    if (dis === false) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <Navi>
      <List
        display={display}
        appear={displayAppear}
        disappear={displayDisAppear}
      >
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
          <a href="#recruit">RECRUITMENT</a>
        </Menu>
      </List>
      <a href="/" onClick={hamburg}>
        <Icon className="i" icon={faBars} size={"2x"} />
      </a>
    </Navi>
  );
}

export default Nav;
