import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";
import { useState } from "react";

const Navi = styled.nav`
  position: fixed;
  width: 100%;
  background-color: #263343;
  color: #f0f4f5;
  margin-left: -10px;
  z-index: 10;
`;

const List = styled.ul`
  height: 100%;
  min-height: 5vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 30px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    transform: translateY(-200px);
    flex-direction: column;
    animation: ${(props) => (props.display ? props.appear : props.disappear)} 1s
      linear forwards;
  }
`;

const Menu = styled.li`
  margin: 0px 40px;
  height: 100%;
  text-align: center;
  font-size: 15px;
  &:hover {
    color: #d49466;
  }
  @media only screen and (min-width: 1900px) {
    font-size: 20px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 25px;
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;

const displayAppear = keyframes`
from {
  opacity: 0;
  transform: translateY(-200px);
}
to {
  opacity: 1;
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
  transform: translateY(-200px);
}
`;

const Line = styled.div`
  border: 1px darkgray solid;
  align: left;
  width: 100%;
`;

const Icon = styled(FontAwesomeIcon)`
  display: none;
  position: absolute;
  right: 32px;
  top: 25px;
  @media only screen and (max-width: 768px) {
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
      console.log(display);
    } else {
      setDisplay(false);
      console.log(display);
    }
  };

  return (
    <Navi>
      <List
        display={display}
        appear={displayAppear}
        disappear={displayDisAppear}
      >
        <Menu
          display={display}
          appear={displayAppear}
          disappear={displayDisAppear}
        >
          <a href="#top">TOP</a>
        </Menu>
        <Menu
          display={display}
          appear={displayAppear}
          disappear={displayDisAppear}
        >
          <a href="#about">ABOUT US</a>
        </Menu>
        <Menu
          display={display}
          appear={displayAppear}
          disappear={displayDisAppear}
        >
          <a href="/">CONTACT</a>
        </Menu>
        <Menu
          display={display}
          appear={displayAppear}
          disappear={displayDisAppear}
        >
          <a href="#recruit">RECRUITMENT</a>
        </Menu>
      </List>
      <a href="/" onClick={hamburg}>
        <Icon className="i" icon={faBars} size={"2x"} />
      </a>
      <Line />
    </Navi>
  );
}

export default Nav;
