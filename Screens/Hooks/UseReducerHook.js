import React, {useReducer} from 'react';
import { View, Text, TouchableOpacity } from 'React-Native';

const UseReducerHook = () => {

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  };

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <View style={{ flex: 1, flexDirection: "row",alignSelf: "center",alignItems: "center",justifyContent: "center" }}>
      <TouchableOpacity style={{width: 130,height: 40,alignItems: "center",justifyContent: "center", borderRadius: 10, backgroundColor: "green"}} onPress={() => dispatch({ type: "INCREMENT" })}>
        <Text>INCREMENT</Text>
      </TouchableOpacity>

      <Text style={{paddingHorizontal: 20}}>Count: {state.count}</Text>
      
      <TouchableOpacity style={{width: 130,height: 40,alignItems: "center",justifyContent: "center", borderRadius: 10, backgroundColor: "green"}} onPress={() => dispatch({ type: "DECREMENT" })}>
        <Text>DECREMENT</Text>
      </TouchableOpacity>
    </View>
  );
}

export default UseReducerHook;

      


