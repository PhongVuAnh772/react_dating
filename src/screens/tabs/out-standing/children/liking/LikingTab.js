import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import fakeData from '../data/data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import verifiedIcon from '../../assets/verified.png';

const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;

function maskString(str) {
  return str.charAt(0) + '*'.repeat(str.length - 1);
}

const LikingTab = () => {
  const rows = [];
  for (let i = 0; i < Math.ceil(fakeData.length / 2); i++) {
    const startIndex = i * 2;
    const endIndex = Math.min(startIndex + 2, fakeData.length);
    const rowData = fakeData.slice(startIndex, endIndex);
    rows.push(rowData);
  }
  const formatNumber = number => {
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
      <Text style={styles.likingTitle}>Nhận xứng đôi ngay lập tức</Text>
      <Text style={styles.likingDescription}>
        Trở thành Premium để xem những người đã thích bạn
      </Text>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        {rows.map((rowData, index) => (
          <View style={styles.row} key={index}>
            {rowData.map(item => (
              <View style={styles.itemContainer} key={item.id}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={[styles.imageUser]}
                  blurRadius={50}
                />
                <View style={styles.numberContainer}>
                  <MaterialIcons
                    name="lock"
                    size={23}
                    color="rgba(255,255,255,0.6)"
                    style={styles.lockIcon}
                  />
                  <View style={styles.infoContainer}>
                    <Text style={styles.infoNameText}>
                      {maskString(item.name)}
                    </Text>
                    {item.active && (
                      <Image
                        source={verifiedIcon}
                        style={styles.verifiedAssets}
                      />
                    )}
                    {item.online && <View style={styles.onlineIcon}></View>}
                  </View>
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.buttonShowing}>
        <Text style={styles.buttonShowingText}>Hiện xứng đôi của bạn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LikingTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: heightDimension * 0.1,
    paddingHorizontal: widthDimension * 0.05,
    marginBottom: '10%',
  },
  likingTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 24,
  },
  likingDescription: {
    color: '#bebebe',
    fontSize: 20,
    marginTop: 15,
    lineHeight: 30,
  },
  scrollView: {
    marginTop: heightDimension * 0.02,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: heightDimension * 0.02,
  },
  itemContainer: {
    width: '48%', // Chiếm 48% chiều rộng để tạo khoảng cách giữa các thẻ
    height: 300,
    position: 'relative',
  },
  imageUser: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    position: 'relative',
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
    borderRadius: 15,
    flexDirection: 'row',
    paddingHorizontal: widthDimension * 0.04,
    paddingVertical: heightDimension * 0.01,
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderRadius: 15,
  },
  textNumber: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  lockIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
  infoContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  infoNameText: {
    color: 'white',
    fontSize: 16,
    letterSpacing: 2,
  },
  verifiedAssets: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginLeft: 7,
  },
  onlineIcon: {
    width: 10,
    height: 10,
    backgroundColor:'rgb(32, 227, 178)',
    borderRadius: 10,
        marginLeft: 7,

  },
  buttonShowing: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    width: '100%',
    paddingVertical: 15,
    backgroundColor: 'rgb(255, 134, 20)',
    alignItems: 'center',
    marginHorizontal: 20,
    borderRadius: 25,
  },
  buttonShowingText: {
    color:'white',
    fontSize: 21,
    fontWeight: '600',
  }
});
