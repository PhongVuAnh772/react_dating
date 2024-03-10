import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useState, useEffect } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import verifiedIcon from '../../assets/verified.png';
import coinIcon from '../../assets/coins.png';
import CountdownTimer from '../hooks/CountDownTimer';

const PersonalContent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/236x/30/31/1e/30311e920a4939fed09036528bf8c955.jpg',
          }}
          style={styles.imageUser}
        />
        <View style={styles.infoSimpleContainer}>
          <Text style={styles.nameAgeText}>Phong, 21</Text>
          <Text style={styles.statusInfo}>Hoàn thiện hồ sơ</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={20} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={styles.allStatusContainer}>
        <CircularProgress
          value={85}
          inActiveStrokeColor={'gray'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'#fff'}
          valueSuffix={'%'}
          radius={30}
          activeStrokeColor={'rgb(254, 128, 69)'}
        />
        <View style={styles.allStatusTextContainer}>
          <Text style={styles.allStatusTextTitle}>Điểm hồ sơ của bạn</Text>
          <Text style={styles.allStatusTextDescription}>
            Hoàn thành hồ sơ để nhận thêm lượt ghép cặp
          </Text>
        </View>
      </View>
      <View style={styles.allStatusContainer}>
        <View style={styles.addButtonContainer}>
          <MaterialIcons name="add" size={40} color="white" />
        </View>
        <View style={styles.allStatusTextContainer}>
          <Text style={styles.allStatusTextTitle}>Nâng cấp lên Plus</Text>
          <Text style={styles.allStatusTextDescription}>
            Tối đa hóa cơ hội của bạn
          </Text>
        </View>
      </View>
      <View style={styles.allStatusContainerTwice}>
        <View style={styles.allStatusTextContainerTwice}>
          <View style={styles.coinContainer}>
            {/* <FontAwesome6 name="coins" size={16} color="black" /> */}
            <Image source={coinIcon} style={styles.coinIconAssets} />
            <Text style={styles.coinText}>885</Text>
          </View>
          <Text style={styles.allStatusTextTitle}>Giảm giá 50% cho đồng xu</Text>
          <Text style={styles.allStatusTextDescription}>
            Hành động ngay, trước khi quá muộn ...
          </Text>
        </View>
        <CountdownTimer seconds={3600} />
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <Image source={verifiedIcon} style={styles.verifiedIconAssets} />
        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Xác minh ngay</Text>
          <Text style={styles.allStatusTextDescription}>
            Cho người khác thấy hồ sơ của bạn là thật
          </Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <AntDesign name="user" size={20} color="white" />

        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Tài khoản</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <Feather name="bell" size={20} color="white" />

        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Thông báo</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <Feather name="lock" size={20} color="white" />

        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Quyền riêng tư</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <AntDesign name="heart" size={20} color="white" />

        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Trợ giúp</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <AntDesign name="infocirlceo" size={20} color="white" />

        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Thông tin</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
      <View style={[styles.infoContainer, {paddingVertical: 5}]}>
        <FontAwesome6 name="coins" size={20} color="white" />

        <View style={styles.infoSimpleContainer}>
          <Text style={styles.actionText}>Xu</Text>
        </View>
        <View style={styles.infoSimpleIcon}>
          <Entypo name="chevron-thin-right" size={18} color="rgb(78, 78, 80)" />
        </View>
      </View>
    </View>
  );
};

export default PersonalContent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  infoContainer: {
    width: '100%',
    paddingVertical: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionTextDescription: {
    color: 'rgb(78, 78, 80)',
  },
  coinContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(255, 187, 16)',
    alignSelf: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 5
  },
  coinText: {
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    paddingLeft: 15,
  },
  coinIconAssets: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  allStatusContainer: {
    width: '100%',
    paddingVertical: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: 'rgb(35, 34, 40)',
    alignItems: 'center',
    borderRadius: 15,
  },
  allStatusContainerTwice:{
    width: '100%',
    paddingVertical: 20,
    marginVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: 'rgb(35, 34, 40)',
    borderRadius: 15,
  },
  imageUser: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  verifiedIconAssets: {
    width: 20,
    height: 20,
  },
  infoSimpleContainer: {
    paddingHorizontal: 20,
    flex: 10,
    justifyContent: 'center',
  },
  nameAgeText: {
    color: 'white',
    fontSize: 30,
    // paddingTop: 10,
    fontWeight: '600',
  },
  infoSimpleIcon: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusInfo: {
    color: 'rgb(254, 128, 69)',
    fontSize: 20,
    paddingTop: 10,
    fontWeight: '500',
  },
  actionText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },

  allStatusTextTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  allStatusTextDescription: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
    paddingTop: 5,
  },
  allStatusTextContainer: {
    paddingLeft: 15,
    flex: 1,
  },
  allStatusTextContainerTwice: {
    paddingLeft: 5,
    flex: 1,
  },
  addButtonContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'rgb(254, 128, 69)',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
