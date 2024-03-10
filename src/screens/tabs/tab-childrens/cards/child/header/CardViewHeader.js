import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import filterIcon from '../../../assets/Layer1.png';
import mapIcon from '../../../assets/Layer2.png';
import jaumoLogo from '../../../assets/Jaumo_logo.png';
const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;

const CardViewHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={filterIcon} style={styles.headerIcon} />
      {/* <View > */}
      <Image source={jaumoLogo} style={styles.affiliateIcon} />
      {/* </View> */}
      <Image source={mapIcon} style={styles.headerIcon} />
    </View>
  );
};

export default CardViewHeader;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    paddingHorizontal: widthDimension * 0.07,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: heightDimension * 0.03,
    alignItems: 'center',
  },
  headerIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  affiliateIcon: {
    width: widthDimension * 0.4,
    height: heightDimension * 0.04,

    resizeMode: 'contain',
  },
});
