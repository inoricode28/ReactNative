import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container:{
      width: '100%',   
      padding: 20,
    },
  
    title:{
      fontSize: 20,
      color: 'white',
    },
  
    text:{
      fontSize: 16,
      color: 'white',
    },
  
    textDone:{
      fontSize: 16,
      color: 'white',
      textDecorationLine: 'line-through'
    },
  
    whiteText:{
      fontSize: 16,
      color: 'white',
    },
  
    textInput:{
      borderColor:'white',
      borderWidth: 1,
      width: Dimensions.get('screen').width * 0.6, 
      borderRadius: 15,
      paddingLeft: 15,  
    },
  
    inputContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent:'space-between',
    },
  
    addButton: {
      width: Dimensions.get('screen').width * 0.25, 
      backgroundColor: '#5897fb',
      justifyContent: 'center',
      alignItems: 'center',  
      borderRadius: 10 ,  
    },
    scrollContainer: {
      marginTop:20,
    },
    itemContainer:{
      paddingVertical: 20,
      borderBottomColor: '#6f6f6f',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    removeButton:{
      backgroundColor: '#F33D3D',
      justifyContent:'center',
      alignItems: 'center',
      paddingHorizontal:15,
      borderRadius: 10,
      
    }
  });

  export default styles;