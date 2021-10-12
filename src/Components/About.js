import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  min-height: 500px;
  padding-top: 50px;
  @media only screen and (max-width: 768px) {
    height: 100vh;
  }
`;

const Title = styled.div`
  margin: 50px 0px 80px 0px;
  font-size: 30px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    margin: 50px 0px 50px 0px;
  }
`;

const TitleOne = styled.span`
  color: #f0f4f5;
`;

const TitleTwo = styled.span`
  color: #d49466;
`;

const Dis = styled.div`
  color: #d49466;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 20px;
  }
`;

const Pone = styled.p`
  margin-bottom: 50px;
  font-size: 25px;
  color: #f0f4f5;
`;

const Ptwo = styled.p`
  margin: 0;
  font-size: 20px;
  color: #d49466;
`;

const Img = styled.div`
  width: 30vw;
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

      {window.innerWidth < 900 ? (
        <Dis>
          <Img alt="about" />
          <div style={{ margin: "20px 0px" }}>
            <Pone>システム収納家具</Pone>
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
