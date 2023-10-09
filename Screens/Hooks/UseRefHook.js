import { View, Text, TextInput, TouchableOpacity } from 'React-Native'
import React, { useRef } from 'react'

const UseRefHook = () => {

   let myViewRef = useRef(null);

  const FocusInput = () => {
    // console.log(myViewRef.current);
    myViewRef.current.setNativeProps({ style: { color: 'red' } });
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}> 
      <TextInput placeholder='Enter Name' ref={myViewRef} style={{padding: 12,}} />
      <TouchableOpacity onPress={() => FocusInput()} style={{padding: 10, width: 120, backgroundColor: "orange", borderRadius: 8,alignItems: "center",justifyContent: "center"}}>
        <Text>Focus</Text>
      </TouchableOpacity>

      <Text>hi</Text>
    </View>
  )
}

export default UseRefHook