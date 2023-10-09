import React, { createContext, memo } from 'react'
import { View, Text } from 'React-Native'

const ComponentA = ({counter}) => {
    console.log("FunctionOne");
    return(
        <View>
            <Text>{counter}</Text>
        </View>
    )
}

export default memo(ComponentA)


// import ComponentB from './ComponentB'

// export const ComponentAContext = createContext();
// const ComponentA = () => {
//     let details = "I am a Software Engineer"
//     return (
//         <ComponentAContext.Provider value={details}>
//             <View>
//                 <ComponentB />
//             </View>
//         </ComponentAContext.Provider>
//     )
// }