import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 70vh;
  margin: -10px;
  @media only screen and (max-width: 768px) {
    height: 130vh;
  }
`;

const Title = styled.div`
  margin: 120px 0px 80px 0px;
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

const Dis = styled.div`
  font-size: 23px;
  color: #d49466;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: wrap;
  @media only screen and (max-width: 768px) {
    width: 100%;
    font-size: 20px;
  }
`;

const Img = styled.div`
  width: 30vw;
  height: 40vh;
  background: url("img/recruit.jpg");
  background-position: center;
  background-size: cover;
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
  }
`;

const Content = styled.div`
  margin: "20px 0px";
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const Pone = styled.p`
  margin: 0;
  font-size: 25px;
  color: #d49466;
`;

const Ponetwo = styled.p`
  margin-bottom: 35px;
  font-size: 25px;
  color: #d49466;
`;

const Ptwo = styled.p`
  margin: 5px;
  font-size: 20px;
  color: #f0f4f5;
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
          <Ponetwo>仲間を募集しています</Ponetwo>
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
