import styled from "styled-components";

const Img = styled.div`
  width: 100vw;
  height: 90vh;
  margin: -10px;
  background: url("img/top.jpeg");
  background-position: left 15% bottom 90%;
  background-size: cover;
  opacity: 0.9;
  position: relative;
  z-index: -10;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  position: absolute;
  left: 10vw;
  top: 25vh;
  color: #f0f4f5;
`;

const Dis = styled.span`
  font-size: 25px;
  position: absolute;
  left: 10vw;
  top: 40vh;
  color: #d49466;
  @media only screen and (max-width: 768px) {
    color: #ff793f;
    font-size: 20px;
  }
`;

function Top() {
  return (
    <Img id="top" alt="top">
      <Title>B-plus</Title>
      <Dis>System interior & Storage Furniture</Dis>
    </Img>
  );
}

export default Top;
