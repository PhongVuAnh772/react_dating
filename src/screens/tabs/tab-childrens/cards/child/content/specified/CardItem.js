import { StyleSheet, Text, View,ImageBackground,Image,Dimensions } from 'react-native'
import React,{useEffect} from 'react'
import userImage from '../../../../assets/user_image.jpg'
import Swiper from 'react-native-swiper';
import verifyIcon from '../../../assets/verified.png'
import AntDesign from 'react-native-vector-icons/AntDesign'

const heightDimension = Dimensions.get('screen').height
const widthDimension = Dimensions.get('screen').width

const CardItem = (item) => {
  useEffect(() => {
    console.log(item.user)
  }, [])
  
  return (
    <Swiper
          paginationStyle={styles.paginationStyle}
          dotColor="rgba(255,255,255,0.3)"
          style={styles.wrapperSwiper}
          showsButtons={false}
          dotStyle={styles.dot}
          activeDot={<View style={[styles.dot, styles.activeDot]} />}>
          <ImageBackground
            source={{uri: item.user.imageUrl}}
            resizeMode="cover"
            style={styles.slideImage}
            imageStyle={{borderRadius: 20}}>
            <View style={styles.relationshipContainer}>
              <AntDesign name="heart" color="red" size={15} />
              <Text style={styles.textRelationship}>Mối quan hệ</Text>
            </View>
            <View style={styles.infoMatchingContainer}>
              <View style={styles.infoMatchingNameContainer}>
                <Text style={styles.infoMatchingName}>{item.user.name}</Text>
                <Text style={styles.infoMatchingAge}>{item.user.age}</Text>
                <Image style={styles.infoMatchingVerify} source={verifyIcon} />
              </View>
              <View style={styles.infoMatchingWorkingContainer}>
                <Text style={styles.infoMatchingWorking}>{item.user.job}</Text>
                <Text style={styles.infoMatchingSeparate}>.</Text>
                <Text style={styles.infoMatchingDistance}>{item.user.distance} km</Text>
              </View>
              <Text style={styles.infoMatchingDescription}>
                Tìm người cùng tần số
              </Text>
              <View style={styles.infoMatchingDescriptionHabbit}>
              <AntDesign name="heart" color="red" size={15} />
              <Text style={styles.textRelationship}>Mối quan hệ</Text>
            </View>
            </View>
            <View style={styles.blurRefuseContainer}></View>
                        <View style={styles.blurMatchingContainer}></View>

          </ImageBackground>
          <ImageBackground
            source={{uri: item.user.imageUrl}}
            resizeMode="cover"
            style={styles.slideImage}
            imageStyle={{borderRadius: 20}}>
            <View style={styles.relationshipContainer}>
              <AntDesign name="heart" color="red" size={15} />
              <Text style={styles.textRelationship}>Mối quan hệ</Text>
            </View>
            <View style={styles.infoMatchingContainer}>
              <View style={styles.infoMatchingNameContainer}>
                <Text style={styles.infoMatchingName}>{item.user.name}</Text>
                <Text style={styles.infoMatchingAge}>{item.user.age}</Text>
                <Image style={styles.infoMatchingVerify} source={verifyIcon} />
              </View>
              <View style={styles.infoMatchingWorkingContainer}>
                <Text style={styles.infoMatchingWorking}>{item.user.job}</Text>
                <Text style={styles.infoMatchingSeparate}>.</Text>
                <Text style={styles.infoMatchingDistance}>{item.user.distance} km</Text>
              </View>
              <Text style={styles.infoMatchingDescription}>
                Tìm người cùng tần số
              </Text>
              <View style={styles.infoMatchingDescriptionHabbit}>
              {/* <AntDesign name="heart" color="red" size={15} /> */}
              {/* <Text style={styles.textRelationship}>Mối quan hệ</Text> */}
            </View>
            </View>
          </ImageBackground>
        </Swiper>
  )
}

export default CardItem

const styles = StyleSheet.create({
  container: {
    flex: 9.5,
    paddingHorizontal: heightDimension * 0.03,
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
     width: Dimensions.width,
  },
  blurRefuseContainer: {
    
  },
  blurMatchingContainer:{},
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
  infoMatchingDescriptionHabbit: {
  backgroundColor:'black',
  paddingVertical: 2,
  maxWidth: widthDimension * 0.5,
  alignSelf: 'flex-start',
}
});