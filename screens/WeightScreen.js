import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withTheme, Text, FAB, Button } from 'react-native-paper';
import Modal from 'react-native-modal';
import Header from '../component/Header';
import LineChart from '../component/LineChart';
import InputSpinner from 'react-native-input-spinner';

const WeightScreen = () => {
  // スタイル群
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topArea: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
    },
    genjitsuText: {
      fontSize: 20,
    },
    kgText: {
      fontSize: 20,
    },
    bottomArea: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 60,
      flexDirection: 'row',
    },
    fab: {
      position: 'absolute',
      margin: 16,
      right: 0,
      bottom: 0,
    },
  });
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <View style={styles.topArea}>
        <Text style={styles.genjitsuText}>現在</Text>
        <Text style={styles.kgText}>67kg</Text>
      </View>
      <LineChart />
      <View>
        <FAB style={styles.fab} icon='plus' onPress={() => toggleModal()} />
      </View>
      <Modal
        isVisible={isModalVisible}
        swipeDirection={['up', 'left', 'right', 'down']}
        onSwipeComplete={() => setModalVisible(false)}
      >
        <View style={{ backgroundColor: 'white', padding: 10 }}>
          <InputSpinner
            style={{ justifyContent: 'center' }}
            max={999}
            min={20}
            step={0.1}
            colorMax={'#f04048'}
            colorMin={'#40c5f4'}
            value={60}
            skin='paper'
            type='float'
            onChange={(num) => {
              console.log(num);
            }}
          />
          <View style={{ flexDirection: 'row' }}>
            <Button
              style={{ width: '50%' }}
              color='red'
              icon='cancel'
              mode='Outlined'
              onPress={() => setModalVisible(false)}
            >
              キャンセル
            </Button>
            <Button
              style={{ width: '50%' }}
              icon='check'
              mode='Outlined'
              onPress={() => console.log('Pressed')}
            >
              登録する
            </Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default withTheme(WeightScreen);
