import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../redux/store';

const CounterScreen = () => {

  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // const increment = () => {
  //   dispatch({type: "INC"});
  // }

  // const decrement = () => {
  //   dispatch({type: "DEC"});
  // }

  // const addBy = () => {
  //   dispatch({type: "ADD", payload: 10});
  // }

  const increment = () => {
    dispatch(actions.increment());
  }

  const decrement = () => {
    dispatch(actions.decrement());
  }

  const addBy = () => {
    dispatch(actions.addBy(10));
  }

  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>COUNTER APP</Text>
      <Text>{counter}</Text>
    
    <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', width: '100%', paddingHorizontal: 10}}>   
      
      <TouchableOpacity onPress={() => increment()}>
        <Text>INCREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => decrement()}>
        <Text>DECREMENT</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => addBy()}>
        <Text>ADD BY 10</Text>
      </TouchableOpacity>

    </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});



export default CounterScreen;