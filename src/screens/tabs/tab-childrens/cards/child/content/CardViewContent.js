import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React,{useState,useEffect} from 'react';
import matching from '../../assets/matching.png';
import message from '../../assets/message.png';
import xMark from '../../assets/x-mark.png';
import returnIcon from '../../assets/return.png';
import rocket from '../../assets/rocket.png';
import AnimatedStack from './specified/AnimatedStack';
import fakeData from '../../assets/data/datas';
const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;
const ROTATION = 60;
const SWIPE_VELOCITY = 800;
const hiddenTranslateX = 2 * widthDimension;
import CardItem from './specified/CardItem';
const CardViewContent = () => {
  
  const onSwipeLeft = user => {
    // console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    // console.warn('swipe right: ', user.name);
  };
  return (
    <View style={styles.container}>
      <AnimatedStack
        data={fakeData}
        renderItem={({item}) => <CardItem user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <View style={styles.actionContainer}>
        <Image source={returnIcon} style={styles.iconActionRocket} />
        {/* <Image source={xMark} style={styles.iconAction} /> */}
        <View style={styles.iconRefuse}>
          <Image source={xMark} style={styles.iconActionRefuse} />
        </View>
        <View style={styles.iconMessage}>
          <Image source={message} style={styles.iconActionMessage} />
        </View>
        {/* <Image source={message} style={styles.iconAction} /> */}
        <View style={styles.iconMatching}>
          <Image source={matching} style={styles.iconActionMatching} />
        </View>
        {/* <Image source={matching} style={styles.iconAction} /> */}
        <Image source={rocket} style={styles.iconActionRocket} />
      </View>
    </View>
  );
};

export default CardViewContent;

const styles = StyleSheet.create({
  container: {
    flex: 9.5,
    paddingHorizontal: heightDimension * 0.02,
    paddingTop: heightDimension * 0.01,
    paddingBottom: heightDimension * 0.1,
  },
  imageUser: {
    width: widthDimension * 0.6,
    height: heightDimension,
    resizeMode: 'contain',
  },
  paginationStyle: {
    top: '-93%',
    left: 10,
    right: 10,
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: Dimensions.width,
  },
  wrapperSwiper: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    position: 'relative',
  },
  slideImage: {
    width: '100%',
    height: '100%',
  },
  actionContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: heightDimension * 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: widthDimension * 0.12,
    // backgroundColor:
  },
  infoContainer: {},
  iconAction: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  iconMessage: {
    width: 70,
    height: 70,
    backgroundColor: 'rgb(254, 133, 26)',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRefuse: {
    width: 57,
    height: 57,
    backgroundColor: '#8382fc',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActionMessage: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  iconActionRefuse: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  iconMatching: {
    width: 57,
    height: 57,
    backgroundColor: 'rgb(255, 119, 171)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconActionMatching: {
    width: '58%',
    height: '58%',
    resizeMode: 'contain',
    alignItems: 'center',
  },
  iconActionRocket: {
    width: 27,
    height: 27,
    resizeMode: 'contain',
  },
  dot: {
    width: 170,
    height: 5,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  activeDot: {
    backgroundColor: 'white',
  },
  relationshipContainer: {
    paddingVertical: 5,
    alignItems: 'center',
    paddingHorizontal: widthDimension * 0.03,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 15,
    marginHorizontal: widthDimension * 0.03,
    position: 'absolute',
    top: '5%',
  },
  textRelationship: {
    color: 'white',
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  infoMatchingContainer: {
    paddingHorizontal: widthDimension * 0.03,

    position: 'absolute',
    bottom: '15%',
  },
  infoMatchingNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoMatchingWorkingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoMatchingWorking: {
    color: 'white',
    fontSize: 17,
  },
  infoMatchingSeparate: {
    color: 'white',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  infoMatchingDistance: {
    color: 'white',
    fontSize: 17,
  },
  infoMatchingName: {
    textTransform: 'capitalize',
    color: 'white',
    fontSize: 40,
    fontWeight: '600',
  },
  infoMatchingAge: {
    marginLeft: 10,
    color: 'white',
    fontSize: 30,
    marginTop: 5,
  },
  infoMatchingVerify: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 7,
  },
  infoMatchingDescription: {
    color: 'white',
    fontSize: 17,
    paddingVertical: 5,
  },
});
