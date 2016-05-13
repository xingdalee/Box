'use strict'
import React,{component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';
// flex:1所有灵活的项目都带有相同的长度，忽略它们的内容：
var styles=StyleSheet.create({
  flex:{
    flex:1
  },
  flexDirection:{
    flexDirection:'row'
  },
  topStatus:{
    marginTop:25
  },
  input:{
    height:45,
    borderWidth:1,
    marginLeft:5,
    paddingLeft:5,
    borderColor:'#ccc',
    borderRadius:4
  },
  btn:{
    width:55,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    height:45,
    justifyContent:'center',
    alignItems:'center'
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'
  }
});
var Search=React.createClass({
  render:function(){
    return(
      <View style={[styles.flex,styles.flexDirection]}>
        <View style={styles.flex}>
          <TextInput style={styles.input} returnKeyType="search"/>
        </View>
        <View style={styles.btn}>
          <Text style={styles.search}>
            搜索
          </Text>
        </View>
      </View>
    )
  }
})
var appForGaode=React.createClass({
  render:function(){
    return(
      <View style={[styles.flex,styles.topStatus]}>
        <Search></Search>
      </View>
    )
  }
});
module.exports=appForGaode;
