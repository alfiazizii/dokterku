import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {fonts, colors} from '../../../utils';
import TimeAgo from './TimeAgo';

const NewsItem = ({title, publishedAt, urlToImage, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <Text numberOfLines={2} style={styles.title}>
          {title}
        </Text>
        <TimeAgo time={publishedAt} />
      </View>
      <Image source={urlToImage} style={styles.image} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingBottom: 12,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    maxWidth: '90%',
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
