import React, {useState, useEffect} from 'react';
import {ListItem, CheckBox, Input} from 'react-native-elements';
import {View, ImageURISource} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import {StyleSheet} from 'react-native';
import PollListItem from './PollListItem';
import {FlatGrid} from 'react-native-super-grid';

const EntryList = ({option}) => {
  const [miscChecked, setMiscChecked] = useState(false);

  return option.length < 1 ? (
    <Input />
  ) : (
    <View>
      <FlatGrid
        itemDimension={120}
        items={option}
        keyExtractor={(item, i) => item.idx.toString()}
        renderItem={({item, index}) => (
          <View style={{margin: -2}}>
            <PollListItem item={item} />
          </View>
        )}
      />
      {miscChecked ? (
        <Input />
      ) : (
        <CheckBox
          center
          title="Click Here to add"
          checkedTitle="Remove"
          iconType="material"
          checkedIcon="clear"
          uncheckedIcon="add"
          checkedColor=""
          checked={miscChecked}
          onPress={() => setMiscChecked(!miscChecked)}
        />
      )}
    </View>
  );
};

export default EntryList;
