import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold,} from '@expo-google-fonts/roboto'
import {BaiJamjuree_700Bold} from '@expo-google-fonts/bai-jamjuree'
import blurBg from './src/assets/bg-blur.png'
import Stripes from './src/assets/stripes.svg'
import NLWlogo from './src/assets/nlw-spacetime-logo.svg'
import { styled } from 'nativewind';
import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';

const StyledStripes = styled(Stripes)

const discovery = {
  authorizationEndpoint: 'https://github.com/login/oauth/authorize',
  tokenEndpoint:'https://github.com/login/oauth/access_token',
  revocationEndpoint:'https://github.com/settings/connections/application/<CLIENT_ID:>'
}

export default function App() {
  const [hasLoadedFont] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold
  })

  const [request,response,promptAsync] = useAuthRequest({
    clientId:'64718dac12b3f08e6f32',
    scopes:['identity'],
    redirectUri:makeRedirectUri({
      scheme:'nlwspacetime'
    }),
    
  },
    discovery
  );

  if(!hasLoadedFont){
    return null
  }

  return (
    <ImageBackground source={blurBg} className="bg-gray-900 flex-1 items-center px-8 py-10 " imageStyle={{position:'absolute', left:'-100%'}}>
      
      <StyledStripes className="absolute left-2" />

      <View className="flex-1 items-center justify-center gap-6 ">
        <NLWlogo/>
        <View className="space-y-2">
        <Text className="text-center font-title text-2xl leading-tight text-gray-50">Sua cápsula do tempo</Text>
        <Text className="tex-center font-body text-base leading-relaxed text-gray-100">Colecione momentos marcantes da sua jornada e compartilhe (se quiser) com o mundo!</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} className="rounded-full py-2 bg-green-500">
          <Text className="font-alt uppercase text-sm text-black p-2">Cadastrar Lembrança</Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center font-body text-sm leading-relaxed text-gray-200">
        Feito ❤️ com no NLW da RocketSeat
      </Text>
      <StatusBar style="light"/>
      </ImageBackground>
  );
}

