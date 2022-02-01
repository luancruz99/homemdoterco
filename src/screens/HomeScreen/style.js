import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components";



export const Background = styled(LinearGradient).attrs({
 colors: ['#dabe7b', '#fff']
})`
  flex:1;
  min-height: 650px;
`;

export const SafeView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  background-color: #fff;  
`;

export const BoasVindasArea = styled.View`
  width: 220px;
  height: 58px;
  background-color: #FFF;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  top: 10%;
  justify-content: center;
  align-items: center;
`;

export const BoasVindasText = styled.Text`
  color: #b69b4f;
  font-size: 22px;
  font-weight: bold;
`;

export const Logo = styled.Image`
  width: 135px;
  height: 137px;
  align-self: flex-end;
  margin-bottom: 20px;
  top: -2%;
  left: -4%;
`;

export const MenuArea = styled.View`
  flex: 1;
  width: 373px;
  min-height: 530px;
  max-height: 530px;
  align-self: center;
  background-color: #FFF;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: #FFF;
`;

export const MenuArea2 = styled.View`
  flex-direction: row;
  flex: 1;
  margin-top: 15px;
  margin-bottom: 15px;
  justify-content: space-evenly;
`;

export const MenuIcons = styled.TouchableOpacity.attrs({
  activeOpacity: 0.75
 })`
  background-color: #FFF;
  width: 97%;
  max-height: 97%;
  align-items: center;
  border-radius: 10px;
  flex: 1;
`;

export const MenuIconsBorder = styled(LinearGradient).attrs({
  colors: ['#F1DA9A', '#B69B4F']
 })`
  flex: 1;
  background-color: #CCC;
  max-width: 154px;
  max-height: 154px;
  min-width: 154px;
  min-height: 154px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  
 `;

export const IconsImage= styled.Image`
  margin-top: 12px;
  width: 102px;
  height: 102px;
`;

export const IconsText = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 15px;
`;