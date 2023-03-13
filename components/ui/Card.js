import { StyleSheet , View} from "react-native";
import Colors from "../../constants/Colors";

function Card({children}) {

    return <View style={styles.card}>
        {children}
    </View>
}

export default Card;

const styles = StyleSheet.create({
    card: {
      marginTop: 100,
      padding: 16,
      backgroundColor: Colors.primary800,
      marginHorizontal: 24,
      borderRadius: 8,
      elevation: 4, //PER ANDROID
      //per ios:
      shadowColor: "black",
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 6,
      shadowOpacity: 0.3,
      alignItems: "center",
    },})