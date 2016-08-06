'use strict'
import React, {Component} from 'react';
import Modal from 'react-native-modal'
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  TouchableOpacity,
  Text,
  PixelRatio
} from 'react-native';
var styles=StyleSheet.create({
  page:{
    flex:1,
    position:"absolute",
    bottom:0,
    left:0,
    right:0,
    top:23
  },
  zhifu:{
    height:150
  },
  row:{
    flexDirection:'row'
  },
  point:{
    flex:1,
    // fontSize:20
  },
  at:{
    color:'#3BC1FF',
    borderWidth:1/PixelRatio.get(),
    width:80,
    borderColor:'#18B7FF',
    height:1,
    marginTop:10
  },
  date:{
    textAlign:'center',
    marginBottom:5
  },
  station:{
    fontSize:20
  },
  mp10:{
    marginTop:5
  },
  btn:{
    width:60,
    height:30,
    borderRadius:3,
    backgroundColor:'#FFBA27',
    padding:5
  },
  btn_text:{
    lineHeight:18,
    textAlign:'center',
    color:'#fff'
  }
});
var CloseBtn=React.createClass({
  render:function(){
    return(
      <View>
        <Text>关闭</Text>
      </View>
    )
  }
});
var OpenModalForApp=React.createClass({
  getInitialState:function(){
    return{
      isModalOpen:true
    }
  },
  openModal:function(){
    this.setState({isModalOpen:true})
  },
  closeModal:function(){
    this.setState({isModalOpen:false})
  },
  render:function(){
    return(
      <View style={styles.page}>
        <Text onPress={() => this.openModal()}>
          预订火车票
        </Text>
        <Modal isVisible={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <View style={styles.zhifu}>
            <Text style={styles.date}>2016/8/06</Text>
            <View style={styles.row}>
              <View style={styles.point}>
                <Text style={styles.station}>
                  上海站
                </Text>
                <Text style={styles.mp10}>
                  8:00
                </Text>
              </View>
              <View>
                <Text style={styles.at}></Text>
                <Text style={[styles.mp10,{textAlign:'center'}]}>
                  G520
                </Text>
              </View>
              <View style={styles.point}>
                <Text style={[styles.station,{textAlign:'right'}]}>
                  北京站
                </Text>
                <Text style={[{textAlign:'right'},styles.mp10]}>
                  12:35
                </Text>
              </View>
            </View>

            <View style={styles.mp10}>
              <Text>
                票价：￥500.0元
              </Text>
              <Text>
                乘机人：李**
              </Text>
              <Text>
                上海站 2层火车厅 15检票口
              </Text>
            </View>

            <View style={[styles.mp10,{alignItems:'center'}]}>
              <View style={styles.btn}>
                <Text style={styles.btn_text}>
                  去支付
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
});
module.exports = OpenModalForApp;
