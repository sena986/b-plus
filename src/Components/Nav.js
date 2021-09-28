import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useState } from "react";

const Navi = styled.nav`
  position: fixed;
  width: 100%;
  color: #f0f4f5;
  margin-left: -10px;
  }
`;

const List = styled.ul`
  height: 100%;
  min-height: 5vh;
  margin: 0;
  background-color: #263343;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 30px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
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
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;

const Line = styled.div`
  border: 1px #fbfcfc solid;
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
    e.preventDefault(e);
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
      <List>
        <Menu display={display}>
          <a href="/">TOP</a>
        </Menu>
        <Menu display={display}>
          <a href="/">ABOUT</a> US
        </Menu>
        <Menu display={display}>
          <a href="/">CONTACT</a>
        </Menu>
        <Menu display={display}>
          <a href="/">RECRUITMENT</a>
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
