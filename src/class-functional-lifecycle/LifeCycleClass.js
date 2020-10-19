import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      userName:'',
      createDate:new Date()
    };

    console.log('Constructor');
  }


  componentDidMount() {
    console.log('Component Did Mount veri cekmek icin kullanilir ');
  }

  render() {
    console.log('Render');
    return (
      <SafeAreaView>
        <View>
          <Text></Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
