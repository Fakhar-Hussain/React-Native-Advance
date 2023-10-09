import React, { createContext, useContext } from 'react'
import { View, Text } from 'React-Native'
import ComponentA from './ComponentA'

export const MyContext = createContext();

const UseContextHook = () => {
    let details = "Hello My name is Fakhar Hussain";
    return (
        <MyContext.Provider value={details}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ComponentA />
                <Text>Hello World I am Comming</Text>
            </View>
        </MyContext.Provider>
    )
}

export default UseContextHook