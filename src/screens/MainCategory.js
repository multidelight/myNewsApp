
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';



const MainCategory = () => {
  const navigation = useNavigation();

  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f03367ceebd244d39df6d385761b6078')
      .then(res => res.json())
      .then(output => {
        // console.log(output);
        setNews(output.articles);
      });
  };
  return (
    <View style={{flex:1, backgroundColor:'#000'}}>
           <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Categories
      </Text>
      <View style={{marginTop: 20,flex:1, flexDirection:'column'  }}>
        <FlatList
          data={[
            {title: 'business', image: require('../images/tech.webp')},
            {title: 'entertainment', image: require('../images/health.jpeg')},
            {title: 'sports', image: require('../images/business.jpeg')},
            {title: 'science', image: require('../images/tech.webp')},
            {title: 'health', image: require('../images/health.jpeg')},
            {title: 'technology', image: require('../images/business.jpeg')},
          ]}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                 width:'45%',
                 flexDirection:'row',
                 flexWrap:'nowrap',
                  height: 150,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                  borderWidth: 1,
                  borderColor: '#fff',
                  marginVertical:10,
                }}
                onPress={() => {
                  navigation.navigate('CategoryNews', {
                    category: item.title,
                  });
                 
                }}>
                <View style={{width: '100%', height: '100%', borderRadius: 20}}>
                  <Image
                    source={item.image}
                    style={{width: '100%', height: '100%', borderRadius: 20}}
                  />
                  <View
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 20,
                      position: 'absolute',
                      top: 0,
                      backgroundColor: 'rgba(0,0,0,.5)',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{color: '#fff', fontSize: 20, fontWeight: '700'}}>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  )
}

export default MainCategory


