import React from 'react';
import { Card, Image } from 'react-native-elements';
import { View } from 'react-native';

type PollEntryProps = {
  image: boolean;
  onSubmit: () => any;
  children: JSX.Element | Array<JSX.Element>;
};

const PollEntry = ({}: PollEntryProps) => {
  return (
    <Card>
      <SelectableItem />
    </Card>
  );
};

export default PollEntry;
