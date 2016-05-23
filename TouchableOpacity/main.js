'use strict'
import React,{Component} from 'react';
import{
  StyleSheet,
  Text,
  View,
  TouchableOpacity
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
  },
  btn:{
    marginLeft:30,
    marginTop:30,
    width:100,
    height:100,
    backgroundColor:'#18B4FF',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50
  }
});
// activeOpacity:触摸时透明度的设置
// TouchableOpacity只有一个activeOpacity属性
var TouchableOpacityApp=React.createClass({
  show:function(text){
    alert(text)
  },
  render:function(){
    return(
      <View style={[style.flex]}>
        <View>
          <TouchableOpacity onPress={this.show.bind(this,'react入门')}
            >
            <Text style={style.item}>
              Text中的React入门
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.show.bind(this,'出版社事件')}
            >
            <Text style={style.item}>
              Text出版社事件
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.btn}>
              <Text style={{fontSize:25,color:'#fff'}}>
                按钮
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
});
module.exports=TouchableOpacityApp;
