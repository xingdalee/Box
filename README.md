# 语法速查

>各功能模块介绍以及部分API见[Wiki](https://github.com/XingdaLee/Box/wiki)

##报错信息与解决方法
* 类似于这样循环时报错（/box/ShoppingCart）：Each child in an array or iterator should have a unique "key" prop.
  Check the render method of `List`. See https://fb.me/react-warning-keys for more information.

>只要在<View style={styles.row} key={i}>中加上key={i}就可以了

* CameraRoll Cannot read property 'getPhotos' of undefined

![CameraRollErr](./ReadmeImages/cameraRollerr.png)

>在libraries上右击添加node_modules/react-native/CameraRoll/RCTCameraRoll.xcodeproj，并点击RCTCameraRoll.xcodeproj 选择'Build Phases'，点击Link Binary With libraries添加 libRCTCameraRoll.a ,重启模拟器即可，相关资料：https://github.com/facebook/react-native/issues/4560
