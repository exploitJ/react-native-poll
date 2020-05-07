/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Card} from 'react-native-elements';
import {FlatGrid} from 'react-native-super-grid';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Poll from 'react-native-poll';
import EntryList from './poll';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'flex-start'}}>
      <FlatGrid
        itemDimension={300}
        style={{flex: 1}}
        items={list}
        keyExtractor={(item, i) => item.id.toString()}
        renderItem={({item, index}) => (
          <Card
            title={item.title}
            image={item.image}
            imageProps={{
              containerStyle: {minHeight: 200},
              resizeMode: 'contain',
              resizeMethod: 'scale',
              minWidth: '100%',
              minHeight: '100%',
            }}
            style={{flex: 1}}>
            {/* <Poll.EntryList option={item.option} /> */}
            <EntryList option={item.option} />
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const list = [
  {
    id: 1,
    imageList: true,
    title: '점심 메뉴 투표',
    image: {uri: 'https://placekitten.com/300/200'},
    option: [
      {
        idx: 1,
        description: '쌀국수',
        selected: false,
        image: {uri: 'https://placekitten.com/300/300'},
      },
      {
        idx: 2,
        description: '파스타',
        selected: false,
      },
      {
        idx: 3,
        description: '짬뽕',
        selected: false,
        image: {uri: 'https://placekitten.com/300/300'},
      },
      {
        idx: 4,
        description: '족발',
        selected: false,
      },
    ],
  },
  {
    id: 2,
    title: 'asdfqwer',
    image: {uri: 'https://placekitten.com/300/200'},
    option: [
      {
        idx: 1,
        description: 'asdf',
        selected: false,
      },
      {
        idx: 2,
        description: 'asdfasdfs;',
        selected: false,
      },
      {
        idx: 3,
        description: 'asdvxvf;',
        selected: false,
      },
      {
        idx: 4,
        description: 'htehhteht;',
        selected: false,
      },
    ],
  },
  {
    id: 3,
    title: 'asdfqwer',
    image: {uri: 'https://placekitten.com/300/200'},
    option: [
      {
        idx: 1,
        description: 'asdf',
        selected: false,
      },
      {
        idx: 2,
        description: 'asdfasdfs;',
        selected: false,
      },
      {
        idx: 3,
        description: 'asdvxvf;',
        selected: false,
      },
      {
        idx: 4,
        description: 'htehhteht;',
        selected: false,
      },
    ],
  },
  {
    id: 4,
    title: 'asdfqwer',
    image: {uri: 'https://placekitten.com/300/200'},
    option: [
      {
        idx: 1,
        description: 'asdf',
        selected: false,
      },
      {
        idx: 2,
        description: 'asdfasdfs;',
        selected: false,
      },
      {
        idx: 3,
        description: 'asdvxvf;',
        selected: false,
      },
      {
        idx: 4,
        description: 'htehhteht;',
        selected: false,
      },
    ],
  },
  {
    id: 5,
    title: 'asdfqwer',
    image: {uri: 'https://placekitten.com/300/200'},
    option: [
      {
        idx: 1,
        description: 'asdf',
        selected: false,
      },
      {
        idx: 2,
        description: 'asdfasdfs;',
        selected: false,
      },
      {
        idx: 3,
        description: 'asdvxvf;',
        selected: false,
      },
      {
        idx: 4,
        description: 'htehhteht;',
        selected: false,
      },
    ],
  },
];

export default App;
