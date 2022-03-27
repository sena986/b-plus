import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 90vh;
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
        <TitleTwo>本社</TitleTwo>
      </Title>
      <Content>
        <Pone>株式会社　 バイマイビー</Pone>
        <Pone>〒556-0022 大阪府浪速区桜川 1-2-4</Pone>
      </Content>
      <Map>
        <iframe
          title="mapping"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.523449342514!2d135.49176941491248!3d34.6667361925448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e70c3a7bd95d%3A0x967319303d69f876!2s1-ch%C5%8Dme-2-4%20Sakuragawa%2C%20Naniwa%20Ward%2C%20Osaka%2C%20556-0022!5e0!3m2!1sko!2sjp!4v1648284830536!5m2!1sko!2sjp"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "100%" }}
        />
      </Map>
    </Main>
  );
}

export default Contact;
