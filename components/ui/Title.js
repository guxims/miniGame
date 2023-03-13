import { StyleSheet, Text } from "react-native";

export default function Title(props) {

    return <Text style={styles.title}>{props.children}</Text>
}

const styles =
StyleSheet.create({
    title:{
    fontFamily:'open-sans-bold',
    fontSize:18,
    // fontWeight:'bold',
    color:'white',
    textAlign:'center',
    borderWidth:2,
    borderColor:'white',
    padding:12
}
})
