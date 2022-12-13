import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CounterScreen from "../Screens/CounterScreen";


const {Screen, Navigator} = createNativeStackNavigator();


const Screens = () => {
  return(
    <Navigator initialRouteName="CounterScreen">
      <Screen name={"CounterScreen"} component={CounterScreen}/>
    </Navigator>
  )
}


export default Screens;