import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

import ThemeColor from '../../configs/color';

function BottomNavigation() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/icons/Horoscope.png')} />

        </View>
        <Text style={styles.text}>Horoscope</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/icons/Compatibles.png')} />

        </View>
        <Text style={styles.text}>Compatibles</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/icons/MoonSign.png')} />

        </View>
        <Text style={styles.text}>Moon Sign</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={require('../../assets/icons/More.png')} />

        </View>
        <Text style={styles.text}>More</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    bottom:0,
    width:"100%",
    height:70,
    backgroundColor:ThemeColor.primaryColor,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    flexDirection:"row",
    justifyContent:"space-evenly"
  },
  btnContainer:{
    marginTop:10,
    flexDirection:"column",
    gap:5,
    alignContent:"center",
    alignItems:"center"
  },
  imageContainer:{
    width:26,
    height:26
  },
  image:{
    width:"100%",
    height:"100%",
    objectFit:"contain"
  },
  text:{
    color:"#fff",
    fontSize:14,
    fontStyle:"normal",
    fontFamily:""
  }
});

export default BottomNavigation;
