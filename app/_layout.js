import { Stack } from "expo-router";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import SignIn from "./context/SignIn";
import { StatusBar } from "expo-status-bar";
import { BookProvider } from "./context/BookContext"; // เพิ่มบรรทัดนี้

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
            title: "Home",
            headerRight: () => (
              <>
                <ThemeToggle />
                <SignIn />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="profile"
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
          options={{ title: "", headerRight: () => <ThemeToggle /> }}
        />
        <Stack.Screen
          name="signup"
          options={{ title: "", headerRight: () => <ThemeToggle /> }}
        />
        <Stack.Screen
          name="book/book"
          options={{
            title: "Book List",
            headerRight: () => (
              <>
                <ThemeToggle />
                <SignIn />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="book/create"
          options={{
            title: "Create Book",
            headerRight: () => (
              <>
                <ThemeToggle />
                <SignIn />
              </>
            ),
          }}
        />
        <Stack.Screen
          name="book/[id]"
          options={{
            title: "Book Detail",
            headerRight: () => (
              <>
                <ThemeToggle />
                <SignIn />
              </>
            ),
          }}
        />
      </Stack>
    </>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <BookProvider>
        <StackLayout />
      </BookProvider>
    </ThemeProvider>
  );
}
