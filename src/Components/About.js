import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 80vh;
  min-height: 500px;
  padding-top: 150px;
  @media only screen and (max-width: 768px) {
    height: 90vh;
    padding-top: 0px;
  }
`;

const Title = styled.div`
  padding: 50px 0px 100px 0px;
  font-size: 30px;
  width: 100%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    padding: 50px 0px;
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
  background-image: url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGlkZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
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

      {window.innerWidth < 800 ? (
        <Dis>
          <Img alt="about" />
          <div>
            <Pone>Retail Store for U</Pone>
            <Ptwo>Imports your daily life.</Ptwo>
            <Ptwo>Provide with your essentials.</Ptwo>
          </div>
        </Dis>
      ) : (
        <Dis>
          <div>
            <Pone>Retail Store for U</Pone>
            <Ptwo>Imports your daily life.</Ptwo>
            <Ptwo>Provide with your essentials.</Ptwo>
          </div>
          <Img alt="about" />
        </Dis>
      )}
    </Main>
  );
}

export default About;
