import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { withTheme, Text, FAB } from 'react-native-paper';
import Modal from 'react-native-modal';
import Header from '../component/Header';
import LineChart from '../component/LineChart';

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
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default withTheme(WeightScreen);
