import React from 'react'
import { StyleSheet, View, Text, Image, Linking } from 'react-native'

const News = ({image, title, description, url}) => {
    console.log(image)
  return (
    <View style={styles.newsContainer} >
        
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
    
        paddingVertical: 12,
        paddingHorizontal: 18,
        backgroundColor: "aliceblue",
        marginVertical: 16,
        borderRadius: 14,
    },
    image: {
        width: "100%",
        height: 200,
    },
    newsTitle: {
        fontWeight: "bold",
        fontSize: 24
    }

})

export default News
