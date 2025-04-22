import {useState} from 'react';
import {Text, View ,Button,StyleSheet,TouchableOpacity,SafeAreaView} from 'react-native';
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
      <SafeAreaView></SafeAreaView>
<Text style = {styles.mainHeading }>Digital Tasbeeh</Text>
<Text style ={styles.subHeading} >Count your Azkaar</Text>
<Text style={styles.count}>{click}</Text>
<View style = {styles.buttonArrangement}>
{/* <Button  title = 'Add' onPress={change} color= 'orange'  />
<Button title = 'clear' onPress={clear} color= 'orange'/> */}
 <TouchableOpacity style={styles.customButton} onPress={change}>
    <Text style={styles.buttonText}>Add</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.customButton} onPress={clear}>
    <Text style={styles.buttonText}>Clear</Text>
  </TouchableOpacity>
</View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  alignment:{
    flex:1,
    alignItems: 'center',
    marginTop: 35,
        backgroundColor: 'white'
  },
  mainHeading: {
    marginTop:60,
    fontSize:30,
    fontWeight:'bold',
    fontFamily:"monospace"
  },
  subHeading:{
fontSize:25,
color: "orange",
marginTop:10,
fontWeight:'500'
  },
  count:{
    fontSize:130,
    fontWeight:'bold',
    marginTop: 80,
    marginBottom:60
  },
  buttonArrangement:{

flexDirection:'row',
gap: 10
  },
  customButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
})