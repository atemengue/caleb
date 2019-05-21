import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import ConnectView from './ConnectView';
import HomeView from './HomeView';
import Inscription from './Inscription';
import MethodView from './MethodView';

const connectStack = createStackNavigator({
  connect: {
    screen: ConnectView,
    navigationOptions: () => ({
      header: null
    })
  },
  newUser: Inscription
});

const stackContainer = createStackNavigator({
  home: HomeView,
  method: MethodView
});

const routeStackSwitch = createSwitchNavigator({
  switchOne: connectStack,
  switchTwo: stackContainer
});

export default createAppContainer(routeStackSwitch);
