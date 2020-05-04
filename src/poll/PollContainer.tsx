import React from 'react';
import { Card, Image, ListItem } from 'react-native-elements';
import { ImageURISource, View } from 'react-native';
import { FlatGrid, SectionGrid } from 'react-native-super-grid';
import PollEntry from './PollEntry';

enum PollType {
  SURVEY,
  RATING,
  VERSUS,
}
type SelectableData = {
  idx: number;
  description: string;
  image?: ImageURISource | number;
  selected: boolean;
};

type PollData = {
  title: string;
  image?: ImageURISource | number;
  pollType?: PollType;
  option: SelectableData[];
};

type PollConatinerProps = {
  data: PollData[];
  // onSubmit: () => any;
  // children: JSX.Element | Array<JSX.Element>;
};

const PollContainer = ({ data }: PollConatinerProps) => {
  return (
    <FlatGrid
      numColumns={1}
      items={data}
      renderItem={({ item, index }) => (
        <Card title={item.title} image={item.image}>
          <FlatGrid
            items={item.option}
            renderItem={({ item, index }) => (
              <ListItem key={item.idx} title={item.description} bottomDivider />
            )}
          />
        </Card>
      )}
    />
  );
};

export default PollContainer;
