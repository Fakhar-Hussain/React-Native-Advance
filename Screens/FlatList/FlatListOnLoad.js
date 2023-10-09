import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'React-Native'
import axios from "axios"

const FlatListOnLoad = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    // Simulated data fetching function
    const fetchData = async () => {
        setLoading(true);

        try {
            let NewResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${page}`)
            let newLimit = NewResponse.data;

            setData([...data, ...newLimit]);
            setPage(page + 1)

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => {
                    return (
                        <View key={item} style={{ padding: 16 }}>
                            <Text>({item.id}) {item.title}</Text>
                        </View>
                    )
                }}
                onEndReached={fetchData}
                onEndReachedThreshold={.5} // Trigger when within 10% of the list's end
            />

            {loading && <ActivityIndicator size="large" color="blue" />}
        </View>
    )
}

export default FlatListOnLoad