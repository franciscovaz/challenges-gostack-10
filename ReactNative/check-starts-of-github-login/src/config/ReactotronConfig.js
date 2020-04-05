import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // adicionar ao console esta variável, para nçao estar sempre a chamar em todos os ficheiros que usarmos
  console.tron = tron;

  tron.clear();
}
