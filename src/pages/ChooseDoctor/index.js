import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  DummyDoctor4,
  DummyDoctor5,
  DummyDoctor6,
  DummyDoctor7,
  DummyDoctor8,
} from '../../assets';
import {Header, ListDoctor} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = () => {
  return (
    <View style={styles.page}>
      <Header type="dark" title="Pilih Dokter Anak" />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor5}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor6}
        name="John McParker Steve"
        desc="Pria"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor7}
        name="Putri Hayza"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor8}
        name="James Rivilla"
        desc="Pria"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
