import React, {useEffect, useState} from 'react';
import {
  Animated,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import tw from 'twrnc';

import {CardModel, ColumnModel, KanbanBoard} from './components/DragBoard';
import FortalezaRN from './assets/FortalezaRN';
import data from './supporters.json';
import MapSvgComponent from './assets/Map';
import NoMapSvgComponent from './assets/NoMap';

import BootSplash from 'react-native-bootsplash';

type Props = {
  onAnimationEnd: () => void;
};

const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

  const {container, logo /*, brand */} = BootSplash.useHideAnimation({
    manifest: require('../assets/bootsplash_manifest.json'),

    logo: require('../assets/bootsplash_logo.png'),
    // darkLogo: require("../assets/bootsplash_dark_logo.png"),
    // brand: require("../assets/bootsplash_brand.png"),
    // darkBrand: require("../assets/bootsplash_dark_brand.png"),

    statusBarTranslucent: true,
    navigationBarTranslucent: false,

    animate: () => {
      // Perform animations and call onAnimationEnd
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 500,
      }).start(() => {
        onAnimationEnd();
      });
    },
  });
  return (
    <Animated.View {...container} style={[container.style, {opacity}]}>
      <Image {...logo} />
      {/* <Image {...brand} /> */}
    </Animated.View>
  );
};

const columns = [
  new ColumnModel('apoiador', 'Apoiadores', 1),
  new ColumnModel('academico', 'Acadêmico', 2),
  new ColumnModel('pretor', 'Pretores', 3),
  new ColumnModel('memeiro', 'Memeiros', 4),
  new ColumnModel('coordenador', 'Coordenadores', 5),
];

const tags = [
  {
    id: 'editor',
    text: 'Editor',
    backgroundColor: '#FF0000',
    textColor: '#000000',
  },
  {
    id: 'juridico',
    text: 'Jurídico',
    backgroundColor: '#00FF00',
    textColor: '#000000',
  },
  {
    id: 'ti',
    text: 'TI',
    backgroundColor: '#0000FF',
    textColor: '#000000',
  },
  {
    id: 'financeiro',
    text: 'Financeiro',
    backgroundColor: '#FFFF00',
    textColor: '#000000',
  },
];

const filter = (text: string) =>
  text === 'Fortaleza'
    ? data.map((item, index) => {
        return new CardModel(
          `card${index}`,
          item.type,
          item.name,
          item.about,
          undefined,
          tags.filter(tag => item.function.includes(tag.id)),
          null,
          index,
        );
      })
    : data.map((item, index) => {
        if (item.region === text.replace('Regional ', '')) {
          return new CardModel(
            `card${index}`,
            item.type,
            item.name,
            item.about,
            undefined,
            tags.filter(tag => item.function.includes(tag.id)),
            null,
            index,
          );
        }
      });

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [text, setText] = React.useState<string>('Fortaleza');
  const [mapIsVisible, setMapIsVisible] = React.useState<boolean>(true);
  const [cards, setCards] = React.useState<CardModel[] | undefined>(
    filter(text) as CardModel[] | undefined,
  );
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setCards(filter(text) as CardModel[] | undefined);
  }, [text]);

  return (
    <SafeAreaView style={tw`flex-1 bg-[#010086]`}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {mapIsVisible ? (
        <View style={tw`basis-2/5 `}>
          <FortalezaRN
            style={tw` bg-[#010086]`}
            takeRegional={regional => setText(regional)}
          />
        </View>
      ) : (
        <></>
      )}

      <View style={tw`flex-row justify-between m-2 `}>
        <Text style={tw`text-3xl font-bold text-[#fefefe]`}>{text}</Text>
      </View>
      <KanbanBoard
        style={tw`bg-[#010086]`}
        columns={columns}
        cards={cards}
        canMove={!mapIsVisible}
      />
      {mapIsVisible ? (
        <View
          style={tw`absolute top-2 right-2 h-8 w-8 bg-[#aaaa] rounded-full p-1`}>
          <MapSvgComponent onPress={() => setMapIsVisible(!mapIsVisible)} />
        </View>
      ) : (
        <View
          style={tw`absolute top-2 right-2 h-8 w-8 bg-gray-300 rounded-full p-1`}>
          <NoMapSvgComponent onPress={() => setMapIsVisible(!mapIsVisible)} />
        </View>
      )}
      {visible && (
        <AnimatedBootSplash
          onAnimationEnd={() => {
            setVisible(false);
          }}
        />
      )}
    </SafeAreaView>
  );
}

export default App;
