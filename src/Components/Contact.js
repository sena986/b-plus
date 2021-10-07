import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 120vh;
  min-height: 500px;
  background-color: #4b4b4b;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    height: 130vh;
  }
`;

const Title = styled.div`
  margin: 50px 0px 50px 0px;
  font-size: 30px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    margin: 50px 0px 50px 0px;
  }
`;

const TitleOne = styled.p`
  color: #f0f4f5;
`;
const TitleTwo = styled.p`
  color: #d49466;
`;

const Content = styled.div`
  margin: "20px 0px";
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: start;
  @media only screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

const Pone = styled.p`
  margin: 5px;
  font-size: 25px;
  color: #f0f4f5;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Map = styled.img`
  margin-top: 50px;
  object-fit: cover;
  width: 60%;
  height: 30%;
  @media only screen and (max-width: 768px) {
    margin-top: 10px;
    width: 85%;
    height: 30%;
  }
`;

function Contact() {
  return (
    <Main id="contact">
      <Title>
        <TitleOne>CONTACT</TitleOne>
        <TitleTwo>本社/工場</TitleTwo>
      </Title>
      <Content>
        <Pone>株式会社　ビー・プラス</Pone>
        <Pone>〒573-0136 大阪府枚方市春日西町 1-8-1</Pone>
        <Pone>TEL / 072-858-7711</Pone>
        <Pone>FAX / 072-858-7787</Pone>
      </Content>
      <Map
        src={
          "https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
        }
      />
    </Main>
  );
}

export default Contact;
