import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="bg-red-400 flex-1 items-center justify-center">
      <Text className="text-5xl">Primeiro app Expo!</Text>
      <StatusBar style="light"/>
      <View className="bg-zinc-300" >
        <Text>Maicon Douglas</Text>
        <View className="">
        <Text>Meus dados</Text>
        <Text>Sair</Text>
        </View>
      </View>
    </View>
  );
}

