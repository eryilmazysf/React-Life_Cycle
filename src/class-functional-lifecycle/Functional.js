import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const Update = () => setCounter(counter + 1);
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 150, textAlign: 'center', color: 'orange'}}>
          {counter }
        </Text>
        <Text style={{fontSize: 150, textAlign: 'center', color: 'orange'}}>😎</Text>
        <Button title="UP!" onPress={Update} />
        <Button title="RESET!" onPress={() => setCounter(0)} />
      </View>
    </SafeAreaView>
  );
};

export default App;
