'use strict'
import React,{Component} from 'react';
import Geolocation from 'Geolocation';
import{
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
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
var geolocationForApp=React.createClass({
  render:function(){
    return(
      <View>
        <Text onPress={this.vibration} style={styles.btn}>
          获取位置
        </Text>
      </View>
    )
  },
  vibration:function(){
    Geolocation.getCurrentPosition(function(data){
      alert(JSON.stringify(data))
    },function(){
      alert('获取位置失败');
    })
  }
});
module.exports=geolocationForApp;
