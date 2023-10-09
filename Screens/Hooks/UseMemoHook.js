import { View, Text, TouchableOpacity } from 'React-Native'
import React, { useCallback, useMemo, useState } from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

const UseMemoHook = () => {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const FunctionOne = useCallback(() => {
    setCountOne(countOne + 1)
  }, [countOne])
  
  const FunctionTwo = useCallback(() => {
    setCountTwo(countTwo + 1)
  },[countTwo])


  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ComponentA counter={countOne} func={FunctionOne} />
      <TouchableOpacity onPress={() => FunctionOne()} style={{ backgroundColor: "violet", width: 100, marginVertical: 10, padding: 10, alignItems: "center" }}>
        <Text>Function 1:</Text>
      </TouchableOpacity>

      <ComponentB counter={countTwo} func={FunctionTwo} />
      <TouchableOpacity onPress={() => FunctionTwo()} style={{ backgroundColor: "orange", width: 100, marginVertical: 10, padding: 10, alignItems: "center" }}>
        <Text>Function 2:</Text>
      </TouchableOpacity>
      

    </View>
  )
}

export default UseMemoHook