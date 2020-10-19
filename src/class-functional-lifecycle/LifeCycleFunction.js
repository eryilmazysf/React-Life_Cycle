import React, {useState,useEffect} from 'react';
import {SafeAreaView, View, Text, Button,Alert,TextInput,StyleSheet, Dimensions, KeyboardAvoidingView,Keyboard,TouchableWithoutFeedback} from 'react-native';

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const [email,setEmail]=useState(""); // email anlik guncellemek icin
  const [password,setPassword]=useState("");
  const login=()=>{
      Alert.alert('Clarusway',`Email:${email}   Pass:${password}`);
  }
 
  
  useEffect(()=>{Alert.alert('clarusway','welcome')},[]);
  useEffect(()=>{
        if(counter>10)
        Alert.alert('clarusway','grater than 10')
    },[counter])
 
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <SafeAreaView>
      <KeyboardAvoidingView behavior='padding' >
        
      <View>
        <Text style={{fontSize: 150, textAlign: 'center', color: 'orange'}}>
          {counter }
        </Text>
        <Text style={{fontSize: 150, textAlign: 'center', color: 'orange'}}>😎</Text>
        
        <Button title="UP!" onPress={() => setCounter(counter+1)} />
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={styles.input}>
              <TextInput  
              value={email} //clear yapmak icin ekledik
              placeholder='eposta'
              onChangeText={(userText)=>setEmail(userText)}// anlik harf bilgisi alir
              keyboardType='email-address'
              />
          </View>
          <View style={styles.input}>
              <TextInput  
              value={password}
              placeholder='password' secureTextEntry={true}
              keyboardType='numeric'
              onChangeText={(userPass)=>setPassword(userPass)}
              />
          </View>
          <Button title="Enter"
          onPress={login}
          />
          <Button
          title='clear' onPress={()=>{setPassword('');setEmail(''); } }
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  </TouchableWithoutFeedback>
  );
};

export default App;
const styles =StyleSheet.create({
    input:{
        backgroundColor:'yellow',
        borderRadius:5,
        padding:10,
        margin:5,
        width:Dimensions.get('window').width*0.9
    }
})
