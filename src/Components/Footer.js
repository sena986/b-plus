import styled from "styled-components";

const Foot = styled.div`
  height: 10vh;
  width: 100vw;
  background-color: #4b4b4b;
  @media only screen and (max-width: 768px) {
    height: 8vh;
  }
`;

const Copy = styled.footer`
  height: 100%;
  margin-right: 50px;
  color: #f0f4f5;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 100%;
    font-size: 15px;
    margin: 0;
    justify-content: center;
  }
`;

function Footer() {
  return (
    <Foot>
      <Copy>Copyright &copy; BYMYB Inc. All rights reserved.</Copy>
    </Foot>
  );
}

export default Footer;
