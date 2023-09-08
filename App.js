import React from 'react';
import { View, Text } from 'react-native';
import Charts from './src/components/Charts';
import { lineChart, pieChartData } from './src/config/sampleData';

function App() {
  
  return <Charts type="pieChart" config={pieChartData} />;
}

export default App;
