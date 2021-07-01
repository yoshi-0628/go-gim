import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { LineChart } from 'react-native-chart-kit';

const windowWidth = Dimensions.get('window').width;

const data = {
  // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      data: [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ],
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: 'black',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: 'black',
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.5,
  decimalPlaces: 1,
};

const Chart = () => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    border: {
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 20,
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 10,
    },
  });
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>体重</Text>
        <LineChart
          data={data}
          width={windowWidth * 0.99}
          height={500}
          chartConfig={chartConfig}
          yAxisSuffix={'kg'}
          bezier
        />
      </View>
    </View>
  );
};

export default Chart;
