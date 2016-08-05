'use strict'
import React,{Component} from 'react';
import Camera from 'react-native-camera';
import{
  StyleSheet,
  Text,
  View,
  VibrationIOS
}from 'react-native';
var styles=StyleSheet.create({
  btn:{
    marginTop:50,
    marginLeft:10,
    marginRight:10,
    height:35,
    backgroundColor:'#3BC1FF',
    color:'#fff',
    lineHeight:24,
    fontWeight:'bold',
    textAlign:'center'
  }
});
var VibrationForApp=React.createClass({
  render:function(){
    return(
      <View>
        <Text onPress={this.vibration} style={styles.btn}>
          振动一下
        </Text>
      </View>
    )
  },
  vibration:function(){
    VibrationIOS.vibrate();
  }
});
module.exports=VibrationForApp;
