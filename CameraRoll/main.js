'use strict'
import React, {Component} from 'react';
import {
    CameraRoll,
    StyleSheet,
    View,
    Image,
    ListView,
    Text,
    ScrollView
} from 'react-native';
var styles=StyleSheet.create({
  flex_1:{
    flex:1
  },
  m5:{
    marginLeft:5,
    marginRight:5,
    borderWidth:1,
    borderColor:'#ddd'
  },
  row:{
    flexDirection:'row'
  },
  imgHeight:{
    height:120
  },
  saveImg:{
    flex:1,
    height:30,
    textAlign:'center',
    marginTop:20,
    backgroundColor:'#3BC1FF',
    color:'#FFF',
    lineHeight:20,
    borderRadius:5,
    marginLeft:5,
    marginRight:5,
    fontWeight:'bold'
  }
});
var fetchParams={
  first:4,
  groupTypes:'All',
  assetType:'Photos',
};
// var imgURL='./images';
var imgURL='http://xingdalee.github.io/demo/images/';
var CameraRollForApp=React.createClass({
  getInitialState:function() {
    return{
      photos:null
    }
  },
  // componentDidMount先获取照片的base64的图片码，然后在render里组装渲染，最后通过photosView里的return里的View来展示
  // photosView里是相册里的所有的相片信息
  // return下第一个View只拿了网络上两张图片用作展示
  render:function(){
    var photos = this.state.photos || [];
    var photosView = [];
    for(var i = 0;i < 4;i += 2){
      photosView.push(
        <View style={styles.row} key={i}>
          <View style={styles.flex_1}>
            <Image resizeMode="stretch" style={[styles.imgHeight,styles.m5]} source={{uri:photos[i]}} />
          </View>
          <View style={styles.flex_1}>
            <Image resizeMode="stretch" style={[styles.imgHeight,styles.m5]} source={{uri:photos[parseInt(i)+1]}} />
          </View>
        </View>
      )
    };
    return(
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.flex_1}>
            <Image resizeMode="stretch" style={[styles.imgHeight,styles.m5]} source={{uri:imgURL + 'city.jpg'}}/>
          </View>
          <View style={styles.flex_1}>
            <Image resizeMode="stretch" style={[styles.imgHeight,styles.m5]} source={{uri:imgURL + '3.jpeg'}}/>
          </View>
        </View>
        <View>
          <Text onPress={this.saveImg.bind(this, 'city.jpg', '3.jpeg')} style={[styles.saveImg]}>
            保存图片到相册
          </Text>
        </View>
        <View style={[{marginTop:20}]}>
          {photosView}
        </View>
      </ScrollView>
    )
  },
  componentDidMount:function(){
    var _that=this;
    // CameraRoll.getPhotos(fetchParams,function(data){
    //   console.log(data);
    //   var edges=data.edges;
    //   var photos=[];
    //   for(var i in edges){
    //     photos.push(edges[i].node.image.uri);
    //   };
    //   _that.setState({
    //     photos:photos
    //   });
    // },function(){
    //   alert('获取照片失败');
    // });
    CameraRoll.getPhotos(fetchParams).done(function(data){
      debugger
      console.log(data);
      var edges=data.edges;
      var photos=[];
      for(var i in edges){
        photos.push(edges[i].node.image.uri);
      };
      _that.setState({
        photos:photos
      });
    },function(){
      alert('获取照片失败');
    });
  },
  saveImg:function(img1,img2){
    var _that=this;
    CameraRoll.saveImageWithTag(imgURL + img1).done(function(url){
      if(url){
        debugger
        var photos=_that.state.photos;
        photos.unshift(url);
        _that.setState({
          photos:photos
        });
        CameraRoll.saveImageWithTag(imgURL + img2).done(function(url2){
          photos.unshift(url2);
          _that.setState({
            photos:photos
          });
          alert('保存成功');
        },function(){
          alert('保存失败');
        });
      }
    },function(){
      alert('保存失败');
    });
  }
});
module.exports = CameraRollForApp;
