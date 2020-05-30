import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {Header} from '../../components';

const News = ({navigation, route}) => {
  const newsUrl = route.params;
  return (
    <View style={{flex: 1}}>
      <Header title="Artikel" onPress={() => navigation.goBack()} />
      <WebView
        source={{
          uri: newsUrl.url,
        }}
        startInLoadingState
        scalesPageToFit
        style={{flex: 1}}
      />
    </View>
  );
};

export default News;
