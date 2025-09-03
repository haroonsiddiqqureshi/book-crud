import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "./context/ThemeContext";
import { useRouter } from "expo-router";

const Home = () => {
  const { colors } = useTheme();
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: colors.border }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <View
          style={[styles.buttonContainer, { backgroundColor: colors.primary }]}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/profile");
            }}
          >
            <Text style={[styles.label, { fontWeight: "bold", color: "#fff" }]}>
              Go to Profile Page
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        <View
          style={[styles.buttonContainer, { backgroundColor: colors.primary }]}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/about");
            }}
          >
            <Text style={[styles.label, { fontWeight: "bold", color: "#fff" }]}>
              Go to About Page
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.divider, { backgroundColor: colors.border }]} />

        <View
          style={[styles.buttonContainer, { backgroundColor: colors.primary }]}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("./book/book");
            }}
          >
            <Text style={[styles.label, { fontWeight: "bold", color: "#fff" }]}>
              Go to Book Page
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  divider: {
    width: "20%",
    height: 2,
    marginVertical: 10,
  },
  field: {
    width: "75%",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
  },
  buttonContainer: {
    width: "80%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
