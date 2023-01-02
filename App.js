import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import News from './components/News';
import Search from './components/Search';

export default function App() {

const renderNews = (articles)=>{
  if(articles){
    const renderArray = articles.map(article => {
      
      return <News image={image} title={title} description={description} url={url} key={Math.random()}/>
    })
    return renderArray
  }
    
  }
  const newsItems = renderNews();
  return (
    
    <View style={styles.container}>
      <Search/>
      <StatusBar style="auto" renderNews={renderNews} />
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    
  },
});
