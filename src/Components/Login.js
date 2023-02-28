import { StyleSheet, Text, View ,Button,Alert,TextInput} from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ({navigation}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword] = useState('')

  const submitHandler = async()=> {
    if(!email || !password ){
        Alert.alert('Fill all the spaces!')
     }
     else{
        try{
            
         }catch(e){
           console.log(e)
         }
        }
}


  return (
    <SafeAreaView>
    <View>
      <Text style ={{color:'brown',fontSize:17,margin:5,}}>Enter your email </Text>
      <TextInput 
           style={{margin:10,borderColor:'pink',borderRadius:4,borderWidth:1,height:40,padding:10,fontSize:16,fontWeight:'bold'}}
           onChangeText={setEmail}
       />
      <Text style ={{color:'brown',fontSize:17,margin:5,}}>Password</Text>
      <TextInput 
           style={{margin:10,borderColor:'pink',borderRadius:4,borderWidth:1,height:40,padding:10,fontSize:16,fontWeight:'bold'}}
           onChangeText={setPassword}
           secureTextEntry={true}
      />
      <Button 
                onPress={submitHandler}
                title='Login'
                />
      <View style={{flexDirection:'row',margin:10}}>  
      <Text style ={{ color:'brown',fontSize:17,textAlign:'center',}}> Don't have an account? </Text>
      <Text onPress={()=>{
        navigation.navigate('Register')
      }} 
      style ={{color:'blue',fontSize:17,textAlign:'center',textDecorationLine:'underline'}}>Register Here...</Text>
      </View>

    </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})