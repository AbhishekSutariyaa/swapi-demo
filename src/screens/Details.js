import React from 'react';
import {Text, View, FlatList, TouchableOpacity, ScrollView} from 'react-native';

const Details = ({route, navigation}) => {
  const {itemData, isFromFilm} = route.params;
  console.log('itemData----->', isFromFilm, itemData);

  const renderFilms = ({item}) => {
    return (
      <TouchableOpacity
        style={{margin: 10}}
        // onPress={() => navigation.navigate('')}
        >
        <Text style={{textDecorationLine: 'underline'}}>{item}</Text>
      </TouchableOpacity>
    );
  };

  if (isFromFilm) {
    return (
      <ScrollView>
        <View style={styles.backgroundView}>
          <Text style={styles.header}>{`Title: ${itemData.title}`}</Text>
          <Text>{`director: ${itemData.director}`}</Text>
          <Text>{`producer: ${itemData.producer}`}</Text>
          <Text>{`release_date: ${itemData.release_date}`}</Text>
          <View style={{marginBottom: 30}}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={itemData.characters}
              extraData={itemData.characters}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderFilms}
            />
          </View>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.backgroundView}>
        <Text style={styles.header}>{`Name: ${itemData.name}`}</Text>
        <Text>{`Height: ${itemData.height}`}</Text>
        <Text>{`Mass: ${itemData.mass}`}</Text>
        <Text>{`Hair color: ${itemData.hair_color}`}</Text>
        <Text>{`Skin color: ${itemData.skin_color}`}</Text>
        <Text>{`Eye color: ${itemData.eye_color}`}</Text>
        <Text>{`Birth year: ${itemData.birth_year}`}</Text>
        <Text>{`Gender: ${itemData.gender}`}</Text>
        <Text style={{marginTop: 20}}>Film List</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={itemData.films}
          extraData={itemData.films}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderFilms}
        />
      </View>
    );
  }
};

const styles = {
  header: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  backgroundView: {
    // alignItems: 'center',
    padding: 10,
    margin: 20,
    borderWidth: 1,
    borderRadius: 15,
  },
  
};
export default Details;
