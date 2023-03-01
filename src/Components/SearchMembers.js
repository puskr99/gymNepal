import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5'
import {Avatar} from 'react-native-paper'

const SearchMembers = () => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <View style={styles.showMembers}>
      <Avatar.Image size={50} source={require("../../assets/favicon.png")}  style={styles.avatarStyle}/>
      <Text style={styles.itemStyle} onPress={()=>{console.log('Item')}} >
          {/* Roshish Parajuli */}
          {/* {item.id} */}
          {item.title}
      </Text>
      </View>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>

        <View style={styles.searchView}>
        <FontAwesome5Icons name="search" size={22}  style={{
          paddingLeft:20
        }}/>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here..."
        />
        </View>

        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  
  textInputStyle: {
    height: 40,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
  },
  searchView:{
    flexDirection:'row',
    alignItems:'center',
    borderColor: '#009688',
    borderWidth:1,
    borderRadius:15,
    margin:5,
  },
  showMembers:{
    marginTop:8,
    flexDirection:'row',
    alignItems:'center',
    height:60,
  },
  itemStyle: {
    paddingLeft:10,
    fontSize:18,
  },
  avatarStyle:{
    margin:8,
  },
});

export default SearchMembers