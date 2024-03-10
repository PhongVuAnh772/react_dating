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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;

const renderItem = ({item}) => (
  <View style={styles.itemContainer}>
    <Image
      source={{uri: item.imageUrl}}
      style={styles.imageUser}
      blurRadius={50}
    />
    <View style={styles.addFriendContainer}>
        <MaterialIcons name="add" size={18} color="white" />
    </View>
  </View>
);

const ConversationHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.activeTitle}>Tương hợp</Text>
      </View>
      <View style={styles.listContainerView}>
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/236x/30/31/1e/30311e920a4939fed09036528bf8c955.jpg',
            }}
            style={styles.imageUser}
            blurRadius={50}
          />
          <View style={styles.numberListContainer}>
            <Text style={styles.numberListText}>5</Text>
                        <Text style={styles.numberListText}>Thích</Text>

          </View>
        </View>
        <FlatList
          data={fakeData}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          horizontal
          style={styles.listDataContainer}
        />
      </View>
    </View>
  );
};

export default ConversationHeader;

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
    position:'relative'
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
    borderRadius: 15,
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
    justifyContent: 'center',
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
    justifyContent: 'center',
  },
  listContainerView: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  addFriendContainer: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: -3,
    right: -5,
    backgroundColor:'rgb(255, 127, 63)',
    borderRadius: 25,
    borderWidth: 3,
    borderColor:'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberListContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: '20%',
    alignItems: 'flex-start',
    paddingTop: '40%',
  },
  numberListText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
});
