'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  PixelRatio
}from 'react-native';

var styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:25
  }
});
var PixelRatioForApp=React.createClass({
  render:function(){
    return(
      <View style={styles.container}>
        <View style={{borderWidth:1,borderColor:'red',height:40,marginBottom:20}}>
        </View>
        <View style={{borderWidth:1/PixelRatio.get(),borderColor:'red',height:40}}>
        </View>
      </View>
    )
  }
});
module.exports=PixelRatioForApp;
