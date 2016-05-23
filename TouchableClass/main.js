'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio,
  TouchableHighlight
}from 'react-native';
var style=StyleSheet.create({
  flex:{
    flex:1,
    marginTop:25
  },
  item:{
    fontSize:18,
    marginLeft:5,
    color:'#434343'
  }
});
// activeOpacity:触摸时透明度的设置
// underlayColor:点击时背景阴影效果的背景颜色
// onShowUnderlay:出现背景阴影时触发该事件
// onHideUnderlay:隐藏背景阴影时触发该事件
var TouchableApp=React.createClass({
  show:function(text){
    alert(text)
  },
  render:function(){
    return(
      <View style={[style.flex]}>
        <View>
          <TouchableHighlight onPress={this.show.bind(this,'react入门')}
            underlayColor='#E1F6FF'
            >
            <Text style={style.item}>
              Text中的React入门
            </Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.show.bind(this,'出版社事件')}
            underlayColor='#E1F6FF' onShowUnderlay={this.show('onShowUnderlay')}
            >
            <Text style={style.item}>
              Text出版社事件
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
});
module.exports=TouchableApp;
