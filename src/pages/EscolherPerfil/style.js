import styled from 'styled-components';

export const Container = styled.View`
  background-color: #ffffe5;
  height: 100%;
  padding: 0 20px;
  align-items: center;
`;

export const Header = styled.View `
flex: 0.4;
justify-content: center;
`;

export const Main = styled.View `
  justify-content: flex-start;
`;

export const BotaoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Logo = styled.View`
  width: 100%;
  justify-content:center;
  align-items:center;
`;

export const TextoBoasVindas = styled.Text`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  text-align: center;

  margin-bottom: 30px;
`;

export const TextoPerfil = styled.Text`
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-align: center;

  margin-bottom: 30px;
`;

export const TextoDestacado = styled.Text`
  color: #800080;
`;
