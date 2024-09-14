import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {updateNumpad} from '../reducers/numpad';

interface Props {}

const App: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const numpadValue = useAppSelector(state => state.numpad.numpad);

  return (
    <View style={style.container}>
      <View style={style.counterContainer}>
        <Text style={style.text}>{numpadValue}</Text>
      </View>

      <View style={style.buttonContainer}>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            dispatch(updateNumpad(-1));
          }}>
          <Text>⬅️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.button}
          onPress={() => {
            dispatch(updateNumpad(1));
          }}>
          <Text>➡️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  button: {
    height: 70,
    width: 70,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#fffff',
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  },
});

export default App;
