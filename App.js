import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  {
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../../self-dev/onBoardUI/assets/images/Onboard1.png'),
    bg: '#59b2ab',
  },
  {
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../../self-dev/onBoardUI/assets/images/Onboard2.png'),

    bg: '#febe29',
  },
  {
    title: 'Rocket guy',
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require('../../self-dev/onBoardUI/assets/images/Onboard3.png'),

    bg: '#22bcb5',
  },
];
const App = () => {
  const renderDoneButton = () => {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{
          flex: 1,
          paddingLeft: 15,
          paddingRight: 15,
          borderRadius: 25,
          marginRight: -35,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Gill Sans',
            textAlign: 'center',
            margin: 10,
            color: '#ffffff',
            backgroundColor: 'transparent',
          }}>
          Done
        </Text>
      </LinearGradient>
    );
  };
  const renderNextButton = () => {
    return (
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#000',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#000',
          borderRadius: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>asd</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        data={data}
        keyExtractor={item => item.title}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        onDone={() => alert('Done')}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                backgroundColor: item.bg,
                alignItems: 'center',
                justifyContent: 'space-around',
                padding: 20,
              }}>
              <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
              <Text style={{fontSize: 20, color: 'white'}}>{item.text}</Text>
              <Image source={item.image} style={{width: 200, height: 200}} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default App;
