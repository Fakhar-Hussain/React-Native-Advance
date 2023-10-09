import { View, Text } from 'React-Native'
import React from 'react'

const Extra = () => {
  return (
    <View>
      <Text>Extra</Text>
    </View>
  )
}

export default Extra


// const response = await fetch(`YOUR_API_ENDPOINT?page=${page}`);
// // const limit = 10;
// // let response = await axios.get(`https://jsonplaceholder.typicode.com/todos?limit=${limit}`)
// // console.log(response.data);
// const newData = response.data;



// console.log(NewResponse.data);

// let response = await axios.get("https://jsonplaceholder.typicode.com/todos")
// const allFetchData = response.data;

// const limitData = (data, page, itemsPerPage) => {
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   return data.slice(startIndex, endIndex);
// }

// const maxItemsPerPage = 20;
// const limitedData = limitData(allFetchData, currentPage, maxItemsPerPage);