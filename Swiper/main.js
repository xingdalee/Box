'use strict'
import React, {Component} from 'react';
import Swiper from 'react-native-swiper'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image:{
    borderWidth:1,
    width:300,
    height:200,
    borderRadius:5,
    borderColor:'#ccc'
  },
  img:{
    height:200,
    width:300,
  }
})
// 原始代码：
// var swiper = React.createClass({
//   render: function() {
//     return (
//       <Swiper style={styles.wrapper} showsButtons={false} horizontal={false} loop={false} height={200}>
//         <View style={styles.slide1}>
//           <Text style={styles.text}>Hello Swiper</Text>
//         </View>
//         <View style={styles.slide2}>
//           <Text style={styles.text}>Beautiful</Text>
//         </View>
//         <View style={styles.slide3}>
//           <Text style={styles.text}>And simple</Text>
//         </View>
//       </Swiper>
//     )
//   }
// });
// 扩展代码,加载本地图片：
var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles.wrapper} showsButtons={false} horizontal={true} loop={false}>
        <View style={styles.image}>
          <Image style={styles.img}
            source={require('./images/2.jpg')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.image}>
          <Image style={styles.img}
            source={require('./images/3.jpeg')}
            resizeMode="contain"
          />
        </View>
        <View style={styles.image}>
          <Image style={styles.img}
            source={require('./images/4.jpg')}
            resizeMode="contain"
          />
        </View>
      </Swiper>
    )
  }
});
module.exports = swiper;
