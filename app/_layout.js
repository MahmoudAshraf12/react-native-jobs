import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync(); // prevent splash screen auto hide on app start up

export default function Layout() {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])
    if (!fontsLoaded) return null;
    return <Stack onLayoutRootView={onLayoutRootView}/>;
}
// ../assets/fonts/DMSans-Bold.ttf
// export const unstable_settings = {
//     // Ensure any route can link back to `/`
//     initialRouteName: "home",
//     };

//     const Layout = () => {
//     const [fontsLoaded] = useFonts({
//         DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//         DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//         DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//     });
    
//     if (!fontsLoaded) {
//         return null;
//     }
    
//     return (
//         <Stack initialRouteName="home">
//         <Stack.Screen name="home" />
//         </Stack>
//     )
//     };
  
// export default Layout;