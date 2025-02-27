import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

const CategoryNews = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);

  const getNews = () => {
    fetch(
      // 'https://saurav.tech/NewsAPI/top-headlines/category/' +
      //   route.params.category +
      //   '/in.json',

      'https://newsapi.org/v2/top-headlines?country=in&apiKey=f03367ceebd244d39df6d385761b6078&category=' + route.params.category
    )
      .then(res => res.json())
      .then(output => {

        
        const apiResponse = output
          // Your API response here
        ;
        
        // Filter out entries with null urlToImage
        const filteredArticles = apiResponse.articles.filter(article => article.urlToImage !== null);
        
        // Now, filteredArticles contains only the entries with non-null urlToImage
        console.log(filteredArticles);


        // console.log(output.articles);
        
        setNews(filteredArticles);
      });
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
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
                      width: '60%',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    {item.title ? item.title.substring(0, 30) + '...' : '...'}
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      width: '40%',
                      fontSize: 12,
                      marginTop: 10,
                    }}>
                    {item.description
                      ? item.description.substring(0, 30) + '...'
                      : '...'}
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

export default CategoryNews;
