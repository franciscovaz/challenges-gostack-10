import React from 'react';
import { WebView } from 'react-native-webview';

export default function Repository({ navigation, route }) {
  const { repository } = route.params;
  navigation.setOptions({ title: route.params.repository.name });

  return <WebView source={{ uri: repository.html_url }} style={{ flex: 1 }} />;
}
