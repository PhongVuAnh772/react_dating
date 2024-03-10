import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import fakeData from '../data/data';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;

const DiscoverContent = () => {
  // Tạo danh sách các dòng
  const rows = [];
  for (let i = 0; i < Math.ceil(fakeData.length / 2); i++) {
    const startIndex = i * 2;
    const endIndex = Math.min(startIndex + 2, fakeData.length);
    const rowData = fakeData.slice(startIndex, endIndex);
    rows.push(rowData);
  }
const formatNumber = (number) => {
  if (number >= 1000 && number < 10000) {
    return (number / 1000).toFixed(0) + 'k';
  } else if (number >= 10000) {
    return (number / 1000).toFixed(1) + 'k';
  } else {
    return number.toString();
  }
};
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.activeTitle}>Khám phá cộng đồng</Text>
        {/* <TouchableOpacity onClick={() => console.log('ok')}>
          <Text style={styles.activeButton}>Xem tất cả</Text>
        </TouchableOpacity> */}
      </View>
      <ScrollView style={styles.scrollView}>
        {rows.map((rowData, index) => (
          <View style={styles.row} key={index}>
            {rowData.map(item => (
              <View style={styles.itemContainer} key={item.id}>
                <Image source={{uri: item.imageUrl}} style={styles.imageUser} />
                <View style={styles.numberContainer}>
                    <AntDesign size={15} color="white" name="user"/>
                    <Text style={styles.textNumber}>{formatNumber(item.number)} thành viên</Text>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

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
  scrollView: {
    marginTop: heightDimension * 0.02,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthDimension * 0.04,
    marginBottom: heightDimension * 0.02,
  },
  itemContainer: {
    width: '48%', // Chiếm 48% chiều rộng để tạo khoảng cách giữa các thẻ
    height: 230,
    position: 'relative',
  },
  imageUser: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  nameUser: {
    color: 'white',
    marginTop: heightDimension * 0.008,
    textAlign: 'center',
  },
  numberContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0,0.1)',
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: widthDimension * 0.04,
    paddingVertical: heightDimension * 0.03
  },
  textNumber: {
    color:'white',
    fontSize: 14,
    marginLeft: 5
  }
});

export default DiscoverContent;
