import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState, useRef } from 'react'
import { Foundation, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux'
import { pageChangeSlice } from '../redux/slices/pageChangeSlice'
import { COLOR } from '../assets/font/color'
const icons = [
  {
    id: 1,
    namePage: "Home",
    iconName: "home-sharp",
    size: 24
  },
  {
    id: 2,
    namePage: "CategoryCardFilter.js",
    iconName: "ios-menu-sharp",
    size: 30
  },
  {
    id: 3,
    namePage: "Notifications",
    iconName: "notifications",
    size: 24
  },
  {
    id: 4,
    namePage: "Profile",
    iconName: "person",
    size: 24
  }
]
export default function Footer() {
  const dispatch = useDispatch()
  const [isPress, setIsPress] = useState(1)
  // const [currentPage, setCurrentPage] = useState("Home")
  const handleChangeButton = (pageSelected) => {
    dispatch(pageChangeSlice.actions.changePage(pageSelected))
  }
  return (
    <View style={styles.container}>
      {icons.map((icon) => {
        return (
          <TouchableOpacity key={icon.id}
            style={styles.icon}
            onPress={() => {
              setIsPress(icon.id)
              // setCurrentPage(icon.namePage)
              handleChangeButton(icon.namePage)
            }}
          >
            <Ionicons name={icon.iconName} size={icon.size} color={isPress === icon.id ? COLOR.secondaryColor : 'white'} />
            {
              isPress === icon.id
                ? (<View style={{
                  width: 5,
                  height: 5,
                  borderRadius: 5,
                  backgroundColor: COLOR.secondaryColor
                }}></View>)
                : (<View style={{
                  width: 5,
                  height: 5,
                }}></View>)
            }
          </TouchableOpacity>
        )
      })}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    flexDirection: 'row',
    height: '6.5%',
    width: '100%',
    bottom: 0,
    backgroundColor: COLOR.mainColor,
    justifyContent: 'space-between',
  },
  icon: {
    height: '100%',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  }
})
