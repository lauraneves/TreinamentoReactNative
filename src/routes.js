import { createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';
import Inicio from './pages/index';
import Listagem from './pages/listagem';

const Routes = createAppContainer(
    createStackNavigator({
        Inicio,
        Listagem
    })
);

export default Routes;