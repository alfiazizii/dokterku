import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {colors, fonts} from '../../utils';
import {Firebase} from '../../config';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });

    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.pages}>
      <ILLogo />
      <Text style={styles.title}>Dokterku</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  pages: {
    backgroundColor: colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    marginTop: 20,
  },
});
