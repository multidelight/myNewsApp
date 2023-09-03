import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Main = () => {
  const navigation = useNavigation();

  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch('https://saurav.tech/NewsAPI/everything/bbc-news.json')
      .then(res => res.json())
      .then(output => {
        // console.log(output);
        setNews(output.articles);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#000',
      }}>

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
      <View style={{marginTop: 20, height: 170}}>
        <FlatList
          data={[
            {title: 'technology', image: require('../images/tech.webp')},
            {title: 'health', image: require('../images/health.jpeg')},
            {title: 'business', image: require('../images/business.jpeg')},
          ]}
          horizontal
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  width: 200,
                  height: 150,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 15,
                  borderWidth: 1,
                  borderColor: '#fff',
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

      
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          fontWeight: '800',
          marginLeft: 20,
          marginTop: 20,
        }}>
        Headlines
      </Text>
      <View>
        <FlatList
          data={news}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={{
                  borderColor: '#fff',
                  borderWidth: 1,
                  width: '90%',
                  height: 100,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => {
                  navigation.navigate('NewsDetails', {
                    data: item,
                  });
                }}>
                <Image
                  source={{uri: item.urlToImage}}
                  style={{
                    width: 100,
                    height: 90,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                  }}
                />
                <View style={{padding: 10}}>
                  <Text
                    style={{
                      color: '#fff',
                      width: '45%',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      width: '70%',
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                    {item.description.substring(0, 30) + '...'}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Main;
