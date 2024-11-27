import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';

import {BottomNavigation} from '../components/Navigation';
import {CirclePercent} from '../components/DisplayPercent';

import ThemeColor from '../configs/color';

function HomeScreen() {
  const tabs = ['Yesterday', 'Today', 'Tomorrow', 'Weekly'];
  const names = 'Đinh Trần Nguyễn Phương Nam';
  const textSolo = ['WORK', 'LOVE', 'HEALTH'];

  const textNotify = [
    'You must know your weaknesses before being able to detect what you really lack. This day will bring you the self-awareness that you really need. There is no better way to get what you need than to ask. That is a special trait that you will need to learn. Today is a momentous day to practice what you need. So talk to others and learn your way into a successful path in your career',
    'There is nothing simpler than to speak. This is what you need to do today to get what you need. Everything just flows naturally if you speak with passion. The lucky winds of today will guide you in these quests. Even if you are having problems with your loved one, you will easily come to understand what is really needed. Just be yourself and have an enjoyable time',
    'Today is a momentous day for your health. Your health will thank you! During the afternoon, your luck will be walking along its sign, bringing protection to all sectors of its life. Your health will remain great; however, you must be careful not to get fat because of the exaggerations of your diet. If you consume too many sweets, you will feel your blood pressure getting worse',
  ];

  const percents = [
    {title: 'Emotional', number: 45},
    {title: 'Social', number: 55},
    {title: 'Physical', number: 35},
    {title: 'Physical', number: 35},
  ];

  const avatars = [
    require('../assets/avatar/amee_avt_1.png'),
    require('../assets/avatar/amee_avt_2.png'),
    require('../assets/avatar/amee_avt_2.png'),
  ];
  const banners = [
    require('../assets/banner/banner_1.png'),
    require('../assets/banner/banner_2.png'),
    require('../assets/banner/banner_2.png'),
  ];

  const [activeTab, setActiveTab] = useState('Today');
  const [indexItem, setIndexItem] = useState(0)
  const [avatar, setAvatar] = useState(avatars[indexItem])
  const [banner, setBanner] = useState(banners[indexItem])
  const [textNo, setTextNo] = useState(textNotify[indexItem])
  const [textSo, setTextSo] = useState(textSolo[indexItem])

  const handleChange = (type: string) => {
    setIndexItem(prevIndex => {
      if (type === 'tang') {
        return prevIndex === 2 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? 2 : prevIndex - 1;
      }
    });
  };

  useEffect(()=>{
    setAvatar(avatars[indexItem])
    setBanner(banners[indexItem])
    setTextNo(textNotify[indexItem])
    setTextSo(textSolo[indexItem])
  },[indexItem])
  

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View>
          <View style={styles.bannerContainer}>
            <Image source={banner} style={styles.bannerImage} />
          </View>
          <View style={styles.infoRow}>
            <Image source={avatar} style={styles.avatar} />
            <Text style={styles.nameText}>{names}</Text>
            <TouchableOpacity style={styles.btnZodiacText}>
              <Text style={styles.zodiacText}>Sagittarius</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* timeline */}
        <View style={styles.contentContainer}>
          <View style={styles.timeLine}>
            {tabs.map(tab => (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                style={[
                  styles.timeBtn,
                  activeTab === tab && styles.timeBtnActive,
                ]}>
                <Text
                  style={[
                    styles.textTimeLine,
                    activeTab === tab && styles.textTimeLineActive,
                  ]}>
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.line}></View>
          <View style={styles.processContainer}>
            <View style={styles.percentRow}>
              {percents.map((item, index) => {
                return <CirclePercent key={index} percent={item.number} text={item.title} />;
              })}
            </View>
          </View>
          <View style={styles.line}></View>

          <View style={styles.textNotifyContainer}>
            <Text style={styles.notifyText}>{textNo}</Text>
          </View>

          <View style={styles.navigationRow}>
            <TouchableOpacity onPress={()=>handleChange('giam')}>
              <Image source={require('../assets/icons/ArrowLeft.png')} />
            </TouchableOpacity>
            <View>
              <Text style={styles.navigationText}>{textSo}</Text>
            </View>
            <TouchableOpacity onPress={()=>handleChange('tang')}>
              <Image source={require('../assets/icons/ArrowRight.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BottomNavigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  line: {
    width: '100%',
    height: 2,
    backgroundColor: ThemeColor.primaryColorOpacity,
    transform: [{translateY: -3}],
  },
  bannerContainer: {
    position: 'relative',
    height: 250,
    width: '100%',
  },
  bannerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -38,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  avatar: {
    width: 135,
    height: 135,
    borderRadius: 67.5,
    borderWidth: 5,
    borderColor: '#fff',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColor.primaryColor,
    flex: 1,
    textAlign: 'center',
    maxWidth:180,
    overflow:"visible",
    writingDirection:"auto"
  },
  btnZodiacText: {
    maxWidth: 100,
    height: 27,
    backgroundColor: ThemeColor.primaryColor,
    borderRadius: 10,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zodiacText: {
    fontSize: 16,
    color: '#fff',
    paddingLeft:4,
    paddingRight:4,
    overflow:"visible"
  },
  contentContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 0,
  },
  timeLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  timeBtn: {
    paddingBottom: 10,
  },
  timeBtnActive: {
    borderBottomWidth: 2,
    borderBottomColor: ThemeColor.primaryColor,
  },
  textTimeLine: {
    color: ThemeColor.primaryColorOpacity,
    fontSize: 18,
  },
  textTimeLineActive: {
    color: ThemeColor.primaryColor,
    fontWeight: 'bold',
  },
  processContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  percentRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textNotifyContainer: {
    paddingVertical: 20,
  },
  notifyText: {
    color: ThemeColor.primaryColor,
    fontSize: 16,
    fontStyle: 'italic',
  },
  navigationRow: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:"center"
  },
  navigationText: {
    fontSize: 24,
    color: ThemeColor.primaryColor,
    fontStyle: 'italic',
    fontFamily:"RockSalt-Regular"
  },
});

export default HomeScreen;
