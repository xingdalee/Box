# 语法速查

>各功能模块介绍以及部分API见Wiki

##报错信息与解决方法
* 类似于这样循环时报错（/box/ShoppingCart）：Each child in an array or iterator should have a unique "key" prop.
  Check the render method of `List`. See https://fb.me/react-warning-keys for more information.

>只要在<View style={styles.row} key={i}>中加上key={i}就可以了
