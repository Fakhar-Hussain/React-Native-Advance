import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AddData } from './ReduxSlice';
import debounce from 'lodash.debounce';

const Main = () => {
    const [text, setText] = useState("")
    let dispatch = useDispatch();
    let data = {
        name: "John Doe",
        email: "john123@email.com"
    }

    useEffect(() => {
        dispatch(AddData(data))
    }, [])

    let response = useSelector((state) => state.data)

    const myFunction = () => {
        console.log("TextEnd")
        // setTimeout( () => {
        //     console.log(text);
        // }, 2000)
    };

    const myFuncEnd = () => {
        console.log("TextEnd");
    };

    // const debouncedFunction = debounce(myFunction, 2000);

    // const handleTextChange = (text) => {
    //     setText(text)
    //     debouncedFunction(text);
    // };


    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>{response[0]?.name}</Text>
            <Text>{response[0]?.email}</Text>
        </View>
    )
}

export default Main