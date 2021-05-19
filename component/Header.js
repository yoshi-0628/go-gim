import React from 'react';
import { Appbar } from 'react-native-paper';

const Header = () => {
  const handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.Content title="sss" subtitle="Subtitle" />
      <Appbar.Action icon="dots-vertical" onPress={handleMore} />
    </Appbar.Header>
  );
};

export default Header;
