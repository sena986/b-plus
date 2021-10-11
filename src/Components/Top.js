import styled from "styled-components";

const Img = styled.div`
  width: 100vw;
  height: 90vh;
  background: url("img/top.jpg");
  background-position: left 15% bottom 90%;
  background-size: cover;
  opacity: 0.9;
  position: relative;
  z-index: -10;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const Title = styled.div`
  font-size: 50px;
  position: absolute;
  left: 10vw;
  top: 25vh;
  color: #f0f4f5;
`;

const TitleOne = styled.span`
  color: #f0f4f5;
  font-size: 60px;
`;
const TitleTwo = styled.span`
  color: #f0f4f5;
  font-size: 40px;
`;

const Dis = styled.span`
  font-size: 25px;
  position: absolute;
  left: 10vw;
  top: 45vh;
  color: #d49466;
  @media only screen and (max-width: 768px) {
    color: #ff793f;
    font-size: 20px;
  }
`;

function Top() {
  return (
    <Img id="top" alt="top">
      <Title>
        <TitleOne>B-</TitleOne>
        <TitleTwo>plus</TitleTwo>
      </Title>
      <Dis>System interior & Storage Furniture</Dis>
    </Img>
  );
}

export default Top;
