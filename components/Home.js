import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/Ionicons'

export default class Home extends Component{
  render(){
    return(
      <ScrollView>
        <View style={styles.restaurantsHolder}>

          // Start Restaurant Component
          <View style={styles.restaurant}>
            <View style={styles.restaurantImage}>
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: 150 }}
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZJzFcoaiWld9eMCSzagVrfCUWxkWJblpEs1NgRuYKExd2FMUkA'}}
            />
            </View>
            <View style={styles.detailsHolder}>
              <View style={styles.restaurantDetails}>
                <Text style={styles.restaurantName}>شابوتلي</Text>
                <Text style={styles.restaurantType}>مكسيكي . وجبات سريعة . باربكيو</Text>
                <View style={styles.rateHolder}>
                  <Icon name="ios-star" size={15} color='#000' style={styles.addressIcon} />
                  <Text> 3.8</Text>
                  <Text style={{color: '#ccc'}}> (393)</Text>
                </View>
              </View>
              <View style={styles.avgTime}>
                <Text>20-30 دقيقة</Text>
              </View>
            </View>
          </View>
          // End Restaurant Component

          // Remove From Here
          <View style={styles.restaurant}>
            <View style={styles.restaurantImage}>
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: 150 }}
              source={{uri: 'https://www.mercolocal.com/Assets/Images/Merchants/9037/Full%20Header/Large/Merchant_Pizza_Hut_-_Cornelia_Pizzaria_Cornelia_Georgia_Food_And_Dining_Banner_051020171002.jpg'}}
            />
            </View>
            <View style={styles.detailsHolder}>
              <View style={styles.restaurantDetails}>
                <Text style={styles.restaurantName}>بيتزا هت</Text>
                <Text style={styles.restaurantType}>امريكي . بيتزا . باستا</Text>
                <View style={styles.rateHolder}>
                  <Icon name="ios-star" size={15} color='#000' style={styles.addressIcon} />
                  <Text> 3.5</Text>
                  <Text style={{color: '#ccc'}}> (192)</Text>
                </View>
              </View>
              <View style={styles.avgTime}>
                <Text>15-25 دقيقة</Text>
              </View>
            </View>
          </View>


          <View style={styles.restaurant}>
            <View style={styles.restaurantImage}>
            <Image
              resizeMode={'cover'}
              style={{ width: '100%', height: 150 }}
              source={{uri: 'https://d701vexhkz032.cloudfront.net/media/images/promotion-pill/banner_web_guacamole-min_new.jpg'}}
            />
            </View>
            <View style={styles.detailsHolder}>
              <View style={styles.restaurantDetails}>
                <Text style={styles.restaurantName}>ماكدونالدز</Text>
                <Text style={styles.restaurantType}>امريكي . وجبات سريعة . برجر</Text>
                <View style={styles.rateHolder}>
                  <Icon name="ios-star" size={15} color='#000' style={styles.addressIcon} />
                  <Text> 4.6</Text>
                  <Text style={{color: '#ccc'}}> (310)</Text>
                </View>
              </View>
              <View style={styles.avgTime}>
                <Text>15-25 دقيقة</Text>
              </View>
            </View>
          </View>
          // Remove Untel Here

        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  restaurantsHolder:{
    marginTop: 7,
  },
  restaurant:{
    padding: 15,
    marginBottom: 7,
    backgroundColor: '#fff',
  },
  restaurantImage:{
    backgroundColor: '#ddd',
    height: 150,
  },
  detailsHolder:{
    flex: 1,
    flexDirection: 'row'
  },
  restaurantDetails:{
    flex: 1
  },
  restaurantName:{
    fontWeight: '800',
    marginTop: 10,
    textAlign: 'left'
  },
  restaurantType:{
    color: '#ccc',
    marginTop: 5,
    textAlign: 'left'
  },
  rateHolder:{
    flexDirection: 'row',
    marginTop: 5
  },
  avgTime:{
    marginTop: 10,
  },
  heart:{
    position: 'absolute', top: 15, right: 15,
    zIndex: 1,
    opacity: 0.9,
    fontSize: 22
  },
  addressIcon:{
    marginRight: 5
  }
})
