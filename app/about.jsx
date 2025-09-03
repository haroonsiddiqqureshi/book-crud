import { StyleSheet, View, Text, ScrollView } from "react-native";
import { useTheme } from "./context/ThemeContext";
import { FontAwesome } from "@expo/vector-icons";

const About = () => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.border }}>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: colors.background },
        ]}
      >
        <View style={styles.icon}>
          <FontAwesome name="book" size={120} color={colors.primary} />
          <Text style={[styles.title, { color: colors.primary }]}>SUBJECT</Text>
        </View>

        <View style={[styles.divider, { backgroundColor: colors.primary }]} />

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            COURSE
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            IN405109
          </Text>
        </View>

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
            Hybrid Mobile Application Programming
          </Text>
        </View>

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            FACULTY OF
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            Interdisciplinary Studies
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
            Computer and Information Science
          </Text>
        </View>

        <View style={styles.field}>
          <Text
            style={[
              styles.label,
              { fontWeight: "bold", color: colors.primary },
            ]}
          >
            PROFESSOR
          </Text>
          <Text style={[styles.label, { color: colors.secondary }]}>
            Tanapattara Wongkhamchan
          </Text>
        </View>

        <View style={[styles.divider, { backgroundColor: colors.primary }]} />
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    border: "none",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    width: "80%",
    height: 1,
    opacity: 0.2,
    marginVertical: 20,
  },
  field: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
  },
});
