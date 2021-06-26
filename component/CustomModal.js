import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { withTheme, Text } from 'react-native-paper';
import Modal from 'react-native-modal';

const [isModalVisible, setModalVisible] = useState(false);

export const toggleModal = () => {
  setModalVisible(!isModalVisible);
};

const CustomModal = () => {
  // スタイル群
  const styles = StyleSheet.create({});

  // const [isModalVisible, setModalVisible] = useState(props.isVisible);

  return (
    <Modal
      isVisible={isModalVisible}
      swipeDirection={['up', 'left', 'right', 'down']}
      onSwipeComplete={() => setModalVisible(false)}
    >
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
};

export default withTheme(CustomModal);
