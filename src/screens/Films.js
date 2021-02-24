import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {API_FILMS_LIST} from '../utils/URLs';
import {commonStyles} from '../utils/Theme';

const Films = ({navigation}) => {
  const [data, dataSet] = useState([]);

  useEffect(() => {
    loadData(API_FILMS_LIST);
  }, []);

  const loadData = (url) => {
    console.log('url---->', url);
    fetch(url, {method: 'GET'})
      .then((response) => response.json())
      .then((json) => {
        // console.log('json---->', json);
        dataSet(json);
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const renderEmptyContainer = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
        <Text>No Data Found</Text>
      </View>
    );
  };

  const renderFilmList = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() =>
          navigation.navigate('Details', {itemData: item, isFromFilm: true})
        }>
        <Text style={styles.textLabel}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <View style={styles.headerStyle}>
          <Image
            style={commonStyles.imageStyle}
            source={require('../utils/images/list.png')}
          />
          <View style={commonStyles.container}>
            <Text style={commonStyles.text}>SWAPI</Text>
          </View>
          <View></View>
        </View>
      </TouchableOpacity>

      <Text style={commonStyles.headerText}>Film List</Text>

      <FlatList
        data={data.results}
        extraData={data.results}
        contentContainerStyle={{
          marginVertical: 20,
          alignItems: 'center',
          flexGrow: 1,
        }}
        ListEmptyComponent={renderEmptyContainer()}
        keyExtractor={(id, index) => index.toString()}
        renderItem={renderFilmList}
      />
    </View>
  );
};
const styles = {
  buttonPrev: {
    flex: 1,
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
  buttonNext: {
    flex: 1,
    position: 'absolute',
    bottom: 5,
    right: 5,
  },
  textLabel: {
    fontSize: 14,
  },
  footerButton: {borderWidth: 1, borderRadius: 10, padding: 5},
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    margin: 5,
    width: 200,
    padding: 5,
  },
  headerStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
};
export default Films;
