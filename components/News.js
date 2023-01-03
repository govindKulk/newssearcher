import React from 'react'
import { StyleSheet, View, Text, Image, Linking, useWindowDimensions } from 'react-native'

const News = ({image, title, description, url}) => {
    console.log(image)
    const {height, width} = useWindowDimensions();
  return (
    <View style={[styles.newsContainer,{width: width, height: height}]} >
        
        <Image source={{uri: image}} style={styles.image} />
       
        <Text style={styles.newsTitle} onPress={() => Linking.openURL(url)}>
            {title}
        </Text>
        <Text style={styles.newsPara}>
            {description}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    newsContainer: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: "aliceblue",
        marginVertical: 16,
        borderRadius: 14,
        overflow: "hidden",
        width: "100%"
    },
    image: {
       width: "100%",
       height: undefined,
       aspectRatio: 1
      

        
        

    },
    newsTitle: {
        fontWeight: "bold",
        fontSize: 24
    }

})

export default News
