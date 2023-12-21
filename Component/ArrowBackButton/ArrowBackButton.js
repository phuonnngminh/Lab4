import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ArrowBackButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="arrow-back"
      size={24}
      color="black"
      onPress={() => navigation.navigate("Home")}
      style={{ marginLeft: 10 }}
    />
  );
};
export default ArrowBackButton;
