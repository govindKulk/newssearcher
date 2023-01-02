import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import News from './News'

const Search = () => {
  const [name, setName] = useState(null) 
  const [data, setData] = useState([]) 
  const [renderNews, setRenderNews] = useState(null)
  const handleSearch = async ()=>{
    let url = `https://gnews.io/api/v4/search?q=${name}&token=9c84ca032468685fed7f5db8492d377c&max=20`;
    const response = await fetch(url)
    const responseData = await response.json();
    setData(responseData.articles);
    
    

  }
  return (
    <View style={styles.searchContainer}>
        <View style={styles.inputForm}>
        <TextInput  value={name} onChangeText={(val) => setName(val)} style={styles.searchInput} placeholder='Enter a movie name' />
        <Button style={styles.submitButton} title="Search" onPress={handleSearch} color="lightcoral"/>
        </View>
        
        <View style={styles.flatlist}>
        {data && <FlatList  data={data} renderItem={({item}) =>{
            const {image, title, description, url} = item; 

            return <News image={image} title={title} description={description} url={url} key={Math.random()}/>
        } }/>}
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    searchInput: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        backgroundColor: "aliceblue"
    },
    searchContainer: {
        flex: 1,
       
    },
    inputForm:{
        flex: 3/12,
        justifyContent: "center",
        

    },
    flatlist: {
        flex: 1,
    }
})
export default Search
