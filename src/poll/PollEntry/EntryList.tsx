import React, { useState } from 'react';
import { ListItem, CheckBox, Input } from 'react-native-elements';
import { View, ImageURISource } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale';

type SelectableData = {
  idx: number;
  description: string;
  image?: ImageURISource | number;
  selected: boolean;
};
type PollEntryProps = {
  onSubmit?: () => any;
  children?: JSX.Element | Array<JSX.Element>;
  option: SelectableData[];
};

const EntryList = ({ option }: PollEntryProps) => {
  const [checked, setChecked] = useState(false);

  return option.length < 1 ? (
    <Input />
  ) : (
    <View>
      {option.map((item, index) => (
        <ListItem
          Component={TouchableScale}
          friction={90} //
          tension={100} // These props are passed to the parent component (here TouchableScale)
          activeScale={0.95} //
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#FF9800', '#F44336'],
            start: { x: 1, y: 0 },
            end: { x: 0.2, y: 0 },
          }}
          leftAvatar={{
            rounded: true,
            source: { uri: 'https://placekitten.com/200/200' },
          }}
          titleStyle={{ color: 'white', fontWeight: 'bold' }}
          subtitleStyle={{ color: 'white' }}
          subtitle="Vice Chairman"
          key={item.idx}
          containerStyle={{ flex: 1 }}
          title={item.description}
          bottomDivider
          onPress={() => setChecked(false)}
        />
      ))}
      {checked ? (
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
          checked={checked}
          onPress={() => setChecked(!checked)}
        />
      )}
    </View>
  );
};

export default EntryList;
