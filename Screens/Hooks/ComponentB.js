import React, { useContext, memo } from 'react'
import { View, Text } from 'React-Native'
import { MyContext } from './UseContextHook'

const ComponentB = ({counter}) => {
    console.log("FunctionTwo");
    return(
        <View>
            <Text>{counter}</Text>
        </View>
    )
}

export default memo(ComponentB)


// const values1 = useContext(MyContext)
// return (
//     <View>
//         <Text>{values1}</Text>
//     </View>
// )