import styled from "styled-components";

const Img = styled.div`
  width: 100vw;
  height: 90vh;
  background: url("https://images.unsplash.com/photo-1621416953228-87ad15716483?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGlkZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;
  position: relative;
  z-index: -10;
  @media only screen and (max-width: 768px) {
    background: url("https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGlkZWF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60");
    background-position: center;
    background-size: cover;
    height: 92vh;
  }
`;

const Title = styled.div`
  font-size: 50px;
  position: absolute;
  left: 10vw;
  top: 25vh;
  color: rebeccapurple;
`;

const TitleOne = styled.span`
  font-size: 80px;
`;

const Dis = styled.span`
  font-size: 30px;
  position: absolute;
  left: 10vw;
  top: 45vh;
  color: yellow;
  @media only screen and (max-width: 768px) {
    color: teal;
    font-size: 20px;
  }
`;

function Top() {
  return (
    <Img id="top" alt="top">
      <Title>
        <TitleOne>BYMYB</TitleOne>
      </Title>
      <Dis>Buy My Brilliant Ideas</Dis>
    </Img>
  );
}

export default Top;
