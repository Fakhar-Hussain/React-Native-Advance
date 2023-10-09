import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'

let fruits = [
    "Apple",
    "Banana",
    "Pear",
    "Strawberry",
    "Orange",
    "Kiwi",
    "BlueBerry",
    "Avacado",
    "Tangelo",
    "Grape",
]

const Main = () => {
    const [textInput, setTextInput] = useState("");
    const [search, setSearch] = useState(fruits);
    const [filtered, setFiltered] = useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(null);

    // console.log(textInput);
    // let filteredList = search.filter((item) => item.toLowerCase().includes(textInput.toLowerCase()))

    const handleTextChange = (txt) => {
        setTextInput(txt);

        if (debounceTimeout) {
            clearTimeout(debounceTimeout)
        }

        const FakeDebounce = setTimeout(() => {
            let filteredList = search.filter((item) => item.toLowerCase().includes(txt.toLowerCase()))
            setFiltered([...filteredList])
        }, 800);

        setDebounceTimeout(FakeDebounce)
    }


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <TextInput
                style={{ borderColor: "#000", borderRadius: 5, borderWidth: 1, width: 240, padding: 7 }}
                placeholder='Search'
                value={textInput}
                onChangeText={(text) => handleTextChange(text)}
            />
            <FlatList
                data={textInput == "" ? search : filtered}
                keyExtractor={item => item}
                renderItem={({ item, index }) => {
                    return (
                        <View>
                            <Text style={{ padding: 10, marginTop: 7 }}>{item}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Main



// const handleTextChange = (input) => {
//     setTextInput(input);

//     if (debounceTimeout) {
//         clearTimeout(debounceTimeout);
//     }

//     const newDebounceTimeout = setTimeout(() => {
//         let filteredList = search.filter((item) => item.toLowerCase().includes(input.toLowerCase()))
//         setFiltered([...filteredList])
//     }, 800);

//     setDebounceTimeout(newDebounceTimeout);
// };