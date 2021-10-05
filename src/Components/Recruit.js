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

const Content = styled.div`
  margin: "20px 0px";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pone = styled.p`
  margin-top: 10px;
  font-size: 25px;
  color: #d49466;
`;

const Ptwo = styled.p`
  margin: 5px;
  font-size: 20px;
  color: #f0f4f5;
`;

const Img = styled.div`
  width: 40vw;
  height: 40vh;
  background: url("img/recruit.jpg");
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

function Recruit() {
  return (
    <Main id="recruit">
      <Title>
        <TitleOne>RECRUIT</TitleOne>
      </Title>
      <Dis>
        <Img alt="about" />
        <Content>
          <Pone>意欲あふれる</Pone>
          <Pone>仲間を募集しています</Pone>
          <Ptwo>お問合せ先</Ptwo>
          <Ptwo>株式会社　ビー・プラス</Ptwo>
          <Ptwo>e-mail：ht.nakanishi@bif.co.jp</Ptwo>
          <Ptwo>TEL：072-858-7711</Ptwo>
        </Content>
      </Dis>
    </Main>
  );
}

export default Recruit;
