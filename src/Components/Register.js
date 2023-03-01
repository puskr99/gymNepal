import { StyleSheet, Text, View ,Button,TextInput,Alert ,Image} from 'react-native'
import React ,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = ({navigation}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword] = useState('')
  const [cpassword,setcPassword] = useState('')
  const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  const validPassword = /^(?=(.*[!@#$%^&*()\-__+.]){1,}).{6,}$/

  const submitHandler=  async () =>{
    if(!email || !password || !cpassword){
       Alert.alert('Fill all the spaces!')
    }
   else if(!email.match(validEmail)){
       Alert.alert('Email address Invalid !')
    }
    else if(!password.match(validPassword)){
      Alert.alert('Invalid ! Needs atleast 6 letters with one special symbol.')
    }
    else if(password !== cpassword){
      Alert.alert('Passwords not matched!')
    }
    else{
      try{

      }
      catch(e){
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
          <Text style ={{color:'brown',fontSize:17,margin:5,}}>Confirm Password  </Text>
          <TextInput 
               style={{margin:10,borderColor:'pink',borderRadius:4,borderWidth:1,height:40,padding:10,fontSize:16,fontWeight:'bold'}}
               onChangeText={setcPassword} 
               secureTextEntry={true}
           />
          <Button 
                    onPress={submitHandler}
                    title='Register'
                    />
       <View style={{flexDirection:'row',margin:10}}>  
      <Text  style ={{ fontSize:17,textAlign:'center',}}> Dont't have an account? </Text>
      <Text onPress={()=>{
        navigation.navigate('Login')}}
        style ={{color:'blue',fontSize:17,textAlign:'center',textDecorationLine:'underline'}} >Login Here...</Text>
      </View>

        </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({})