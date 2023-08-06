import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'
import { useRouter } from 'expo-router'

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const jobTypes = ["Full-time", "Part-time", "Contractor"];
  const [activeJobType, setActiveJobType] = useState("Full-time");
  return (
    <View>
      <View  style= {styles.container}>
        <Text style= {styles.userName}>Hello Mahmoud</Text>
        <Text style= {styles.welcomeMessage}>Find your perfect jobs</Text>
      </View>
      <View style= {styles.searchContainer}>
        <View style= {styles.searchWrapper}>
          <TextInput 
            style= {styles.searchInput}
            placeholder='What Are You Looking For'
            value={searchTerm}
            onChangeText={(text)=> setSearchTerm(text)}
          />  
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source={icons.search} 
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style= {styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>


  )
}

export default Welcome