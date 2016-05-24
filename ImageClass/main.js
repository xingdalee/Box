'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
}from 'react-native';

var styles = StyleSheet.create({
  flex:{
    flex: 1,
    alignItems:'center'
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
  },
  btns:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:20
  },
  btn:{
    width:60,
    height:30,
    borderColor: '#0089FF',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius:3,
    marginRight:20,
  },
});
var imgs=[
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://www.ituring.com.cn/bookcover/1521.260.jpg'
];
var i33mgs=[
  'http://vczero.github.io/ctrip/hua2.png',
  'http://vczero.github.io/ctrip/nian2.png',
  'http://www.ituring.com.cn/bookcover/1521.260.jpg'
];
// 程序的入口是ImageForApp
// <MyImage imgs={imgs}>:imgs标签将值传给getInitialState的this.props对象中
// getInitialState里的return后，值保存在this.state里，需要通过setState来修改里面的值
// source：最后通过数组的坐标来确定显示的图片
var MyImage=React.createClass({
  getInitialState:function(){
    var imgs=this.props.imgs;
    return{
      imgs:imgs,
      count:0
    }
  },
  goNext:function(){
    var count=this.state.count;
    count++;
    if(count<imgs.length){
      this.setState({
        count:count
      })
    }
  },
  goPreview:function(){
    var count=this.state.count;
    count--;
    if(count>=0){
      this.setState({
        count:count
      })
    }
  },
  render:function(){
    return(
      <View style={[styles.flex]}>
        <View style={styles.image}>
          <Image style={styles.img}
            source={{uri:this.state.imgs[this.state.count]}}
            resizeMode="contain"
          />
        </View>
        <View style={styles.btns}>
          <TouchableOpacity onPress={this.goPreview}>
            <View style={styles.btn}>
              <Text>
                上一张
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.goNext}>
            <View style={styles.btn}>
              <Text>
                下一张
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
});
var ImageForApp=React.createClass({
  render:function(){
    return(
      <View style={[styles.flex,{marginTop:40}]}>
        <MyImage imgs={imgs}>
        </MyImage>
      </View>
    )
  }
});
module.exports=ImageForApp;
