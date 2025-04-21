import {useState} from 'react';
import {Text, View ,Button,StyleSheet,TouchableOpacity} from 'react-native';
import { ThemedText } from '@/components/ThemedText';
export default function App(){
  const [click,setClick] = useState(0)

  const change=()=>{
setClick(click+1)
  }

  const clear=()=>{
    setClick(0)
  }
  return (
    <View style = {styles.alignment}>
<Text style = {styles.mainHeading }>Digital Tasbeeh</Text>
<Text style ={styles.subHeading} >Count your Azkaar</Text>
<Text style={styles.count}>{click}</Text>
<View style = {styles.buttonArrangement}>
<Button  title = 'Add' onPress={change} color= 'orange'  />
<Button title = 'clear' onPress={clear} color= 'orange'/>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  alignment:{
    flex:1,
    alignItems: 'center',
    marginTop:50
  },
  mainHeading: {
    fontSize:25,
    fontWeight:'bold',
    fontFamily:"monospace"
  },
  subHeading:{
fontSize:20,
color: "orange",
marginTop:10,
fontWeight:'500'
  },
  count:{
    fontSize:80,
    fontWeight:'bold',
    marginTop: 70,
    marginBottom:30
  },
  buttonArrangement:{

flexDirection:'row',
gap: 10

  }
})