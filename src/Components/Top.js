import styled from "styled-components";

const Img = styled.div`
  width: 100vw;
  height: 100vh;
  margin: -10px;
  background: url("img/top.jpg");
  background-position: left 15% bottom 90%;
  background-size: cover;
  opacity: 0.9;
  position: relative;
  z-index: -10;
`;

const Title = styled.h1`
  font-size: 50px;
  position: absolute;
  left: 10vw;
  top: 25vh;
  color: #f0f4f5;
`;

const Dis = styled.span`
  font-size: 20px;
  position: absolute;
  left: 10vw;
  top: 40vh;
  color: #d49466;
`;

function Top() {
  return (
    <Img alt="top">
      <Title>B-plus</Title>
      <Dis>System interior & Storage Furniture</Dis>
    </Img>
  );
}

export default Top;
