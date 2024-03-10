import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import fakeData from '../data/data';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;

const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image source={{uri: item.imageUrl}} style={styles.imageUser} />
    <Text style={styles.nameUser}>{item.name}</Text>
  </View>
);

const DiscoverHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.instructContainer}>
        <View style={styles.instructContent}>
          <View style={styles.instructContentText}>
            <Text style={styles.instructContentTextTitle}>
              Muốn có thêm bạn bè tương tác?
            </Text>
            <Text style={styles.instructContentTextDescription}>
              Tim hiểu cách thức hoạt động
            </Text>
          </View>
          <View style={styles.instructContentIcon}>
                      <TouchableOpacity style={styles.instructContentIconContent}>
                        <FontAwesome size={25} name="user" color="rgb(49, 45, 79)"/>
                      </TouchableOpacity>

          </View>
        </View>
      </View>
      <View style={styles.topContainer}>
        <Text style={styles.activeTitle}>Đang trực tuyến</Text>
        <TouchableOpacity onClick={() => console.log('ok')}>
          <Text style={styles.activeButton}>Xem tất cả</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={fakeData}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        style={styles.listDataContainer}
      />
    </View>
  );
};

export default DiscoverHeader;

const styles = StyleSheet.create({
  container: {
    paddingTop: heightDimension * 0.02,
  },
  topContainer: {
    paddingHorizontal: widthDimension * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  activeTitle: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  activeButton: {
    color: 'rgb(254, 128, 69)',
    fontSize: 17,
  },
  itemContainer: {
    width: 80,
    height: 150,
    marginLeft: widthDimension * 0.04,
  },
  listDataContainer: {
    marginTop: heightDimension * 0.02,
  },
  imageUser: {
    width: '100%',
    height: '70%',
    borderRadius: 15,
  },
  nameUser: {
    color: 'white',
    marginTop: heightDimension * 0.008,
    textAlign: 'center',
    fontSize: 15,
  },
  instructContainer: {
    paddingHorizontal: widthDimension * 0.05,
    paddingVertical: heightDimension * 0.02,
  },
  instructContent: {
    backgroundColor: 'rgb(49, 45, 79)',
    paddingHorizontal: widthDimension * 0.008,
    paddingVertical: heightDimension * 0.008,
    flexDirection: 'row',
    borderRadius: 15
  },
  instructContentText: {
    width: '80%',
    flexDirection: 'column',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  instructContentIcon: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructContentTextTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
  },
  instructContentTextDescription: {
    color: 'rgb(163, 161, 175)',
    fontSize: 15,
    paddingTop: 5,
  },
  instructContentIconContent: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
