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
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    margin: 50px 0px 50px 0px;
  }
`;

const TitleOne = styled.p`
  color: #f0f4f5;
  font-size: 30px;
`;
const TitleTwo = styled.p`
  font-size: 25px;
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
    width: 80%;
  }
`;

const Pone = styled.p`
  margin: 5px;
  font-size: 20px;
  color: #f0f4f5;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Map = styled.div`
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
      <Map>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6552.08519244975!2d135.67688742489065!3d34.804870181106224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60011bfc2bc9be2b%3A0x55f7ab7e6ce84b44!2z44CSNTczLTAxMzYg7Jik7IKs7Lm067aAIO2eiOudvOy5tO2DgOyLnCDqsIDsiqTqsIAg64uI7Iuc66eI7LmY!5e0!3m2!1sjp!2sjp!4v1633944860878!5m2!1sjp!2sjp"
          style={{ width: "100%", height: "100%" }}
        />
      </Map>
    </Main>
  );
}

export default Contact;
