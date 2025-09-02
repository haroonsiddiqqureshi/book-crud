import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import SignIn from "./context/SignIn";
import { StatusBar } from "expo-status-bar";

function StackLayout() {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />

      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.secondary,
          headerTitleStyle: { color: colors.secondary },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "Profile",
            headerRight: () => (
              <>
                <ThemeToggle />
                <SignIn />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About",
            headerRight: () => (
              <>
                <ThemeToggle />
                <SignIn />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="signin"
          options={{ title: "Sign In", headerRight: () => <ThemeToggle /> }}
        />
      </Stack>
    </>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}
