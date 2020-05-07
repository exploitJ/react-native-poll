import React, {useState, useEffect} from 'react';
import {ListItem, CheckBox, Input, Image} from 'react-native-elements';
import {View, ImageURISource} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';
import {StyleSheet} from 'react-native';

const PollListItem = ({item}) => {
  const [isSelected, setIsSelected] = useState(item.selected);

  const opacityStyle = {
    opacity: isSelected ? 1 : 0.75,
  };
  const _onPress = () => {
    setIsSelected(!isSelected);
  };
  return (
    <ListItem
      Component={TouchableScale}
      friction={4} //
      tension={120} // These props are passed to the parent component (here TouchableScale)
      activeScale={1.05} //
      ViewComponent={LinearGradient}
      linearGradientProps={
        // isSelected
        //   ? {
        //       colors: ['#3a40dd', '#10a0ff'],
        //       start: {x: 0.9, y: 0},
        //       end: {x: 0, y: 0.8},
        //     }
        //     :
        {
          colors: ['#f4a800', '#f74337'],
          start: {x: 1, y: 0},
          end: {x: 0.2, y: 0},
        }
      }
      //   leftAvatar={{
      //     rounded: true,
      //     containerStyle: {width: 100, aspectRatio: 1},
      //     source: {uri: 'https://placekitten.com/200/200'},
      //   }}
      containerStyle={[styles.containerStyle, opacityStyle]}
      contentContainerStyle={{alignSelf: 'flex-start'}}
      titleStyle={{color: 'white', fontWeight: 'bold', fontSize: 20}}
      key={item.idx}
      title={`${item.idx}. ${item.description}`}
      onPress={_onPress}
    />
  );
};
export default PollListItem;

const styles = StyleSheet.create({
  containerStyle: {
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    borderRadius: 20,
  },
});
