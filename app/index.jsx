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
import { SafeAreaView } from "react-native-safe-area-context";

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
        <Image
          source={require("../assets/images/myself.jpg")}
          style={[styles.image, { borderColor: colors.primary }]}
        />

        <View style={[styles.divider, { backgroundColor: colors.primary }]} />

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            NAME
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            Haroon Siddiq Qureshi
          </Text>
        </View>

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            ID
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            653450300-1
          </Text>
        </View>

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            MAJOR
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            Computer Science
          </Text>
        </View>

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            UNIVERSITY
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            Khon Kaen University
          </Text>
        </View>

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            SKILLS
          </Text>
          <Text
            style={[styles.label, { marginBottom: 0, color: colors.secondary }]}
          >
            I'm really good at problem-solving
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            I enjoy puzzles, strategy games, and thinking things through.
          </Text>
        </View>
        <View style={[styles.divider, { backgroundColor: colors.primary }]} />

        {/* <View style={styles.fieldSocial}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.facebook.com/haroonsiddiqqureshi")
            }
          >
            <FontAwesome
              name="facebook-square"
              size={40}
              color={colors.secondary}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.instagram.com/h_harxxn/")
            }
          >
            <FontAwesome name="instagram" size={40} color={colors.secondary} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://github.com/haroonsiddiqqureshi")
            }
          >
            <FontAwesome name="github" size={40} color={colors.secondary} />
          </TouchableOpacity>
        </View> */}

        <View
          style={[
            styles.buttonContainer,
            {
              backgroundColor: colors.primary,
              marginBottom: 10,
            },
          ]}
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

        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: colors.primary },
          ]}
        >
          <TouchableOpacity
            onPress={() => {
              router.push("/book");
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
    width: "80%",
    height: 1,
    opacity: 0.2,
    marginVertical: 20,
  },
  field: {
    width: "75%",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
  },
  // fieldSocial: {
  //   width: "75%",
  //   height: "auto",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   paddingHorizontal: 40,
  // },
  buttonContainer: {
    width: "80%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});
