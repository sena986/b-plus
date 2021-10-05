import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 70vh;
  margin: -10px;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Title = styled.div`
  font-size: 30px;
  padding: 100px 0;
  width: 100%;
  text-align: center;
`;

const TitleOne = styled.span`
  color: #f0f4f5;
`;

const TitleTwo = styled.span`
  color: #d49466;
`;

const Dis = styled.div`
  font-size: 23px;
  color: #d49466;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
  }
`;

const Pone = styled.p`
  margin-bottom: 50px;
  color: #f0f4f5;
`;

const Ptwo = styled.p`
  margin: 0;
  color: #d49466;
`;

const Img = styled.div`
  width: 40vw;
  height: 40vh;
  background: url("img/about.jpg");
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

function About() {
  return (
    <Main id="about">
      <Title>
        <TitleOne>ABOUT </TitleOne>
        <TitleTwo>US</TitleTwo>
      </Title>

      {window.innerWidth < 768 ? (
        <Dis>
          <Img alt="about" />
          <div style={{ margin: "20px 0px" }}>
            <Pone>システム収納家具専門</Pone>
            <Ptwo>壁一面を美しい収納スペースへと</Ptwo>
            <Ptwo>進化することができる優秀な家具</Ptwo>
          </div>
        </Dis>
      ) : (
        <Dis>
          <div style={{ margin: "20px 0px" }}>
            <Pone>システム収納家具専門</Pone>
            <Ptwo>壁一面を美しい収納スペースへと</Ptwo>
            <Ptwo>進化することができる優秀な家具</Ptwo>
          </div>
          <Img alt="about" />
        </Dis>
      )}
    </Main>
  );
}

export default About;