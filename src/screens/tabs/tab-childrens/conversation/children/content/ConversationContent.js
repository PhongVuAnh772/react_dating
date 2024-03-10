import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import fakeData from '../../data/data';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
const widthDimension = Dimensions.get('screen').width;
const heightDimension = Dimensions.get('screen').height;
import emptyMailbox from '../../assets/empty-cart.png';

const ConversationContent = () => {
  // Tạo danh sách các dòng
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
      <View style={styles.topContainer}>
        <Text style={styles.activeTitle}>Tin nhắn</Text>
        {/* <TouchableOpacity onClick={() => console.log('ok')}>
          <Text style={styles.activeButton}>Xem tất cả</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.contentContainer}>
        <Image source={emptyMailbox} style={styles.emptyMailboxIcon} />
        <Text style={styles.emptyTitle}>Bạn chưa có cuộc trò chuyện nào</Text>
        <Text style={styles.emptyDescription}>
          Tham gia cộng đồng là một cách tuyệt vời để gặp gỡ những người có cùng
          chí hướng và bắt đầu kết bạn.
        </Text>
        <TouchableOpacity style={styles.buttonShowing}>
          <Text style={styles.buttonShowingText}>Khám phá những người mới</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
    paddingVertical: heightDimension * 0.03,
  },
  textNumber: {
    color: 'white',
    fontSize: 14,
    marginLeft: 5,
  },
  emptyMailboxIcon: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  contentContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  emptyTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 10,
  },
  emptyDescription: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    textAlign: 'center',
    paddingVertical: 10,
  },
  buttonShowing: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: 'rgb(255, 134, 20)',
    alignItems: 'center',
    borderRadius: 25,
    marginVertical: 30,
  },
  buttonShowingText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ConversationContent;
