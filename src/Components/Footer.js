import styled from "styled-components";

const Foot = styled.div`
  height: 60vh;
  width: 100vw;
  background-color: #4b4b4b;
  @media only screen and (max-width: 768px) {
    height: 8vh;
  }
`;

const Box = styled.div`
  height: 90%;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ImgOne = styled.div`
  background: url("img/bot1.jpeg");
  background-position: center;
  background-size: cover;
  width: 25%;
`;

const ImgTwo = styled.div`
  background: url("img/bot2.jpg");
  background-position: center;
  background-size: cover;
  width: 25%;
`;

const ImgThree = styled.div`
  background: url("img/bot3.jpeg");
  background-position: center;
  background-size: cover;
  width: 25%;
`;

const ImgFour = styled.div`
  background: url("img/bot4.jpg");
  background-position: center;
  background-size: cover;
  width: 25%;
`;

const Copy = styled.footer`
  height: 10%;
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
      <Box>
        <ImgOne />
        <ImgTwo />
        <ImgThree />
        <ImgFour />
      </Box>
      <Copy>Copyright &copy; B-plus Inc. All rights reserved.</Copy>
    </Foot>
  );
}

export default Footer;
