import { BackButton } from '@components/BackButton';
import { Header } from '@components/Header';
import { PercentText } from '@components/PercentText';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { MealFeedBack } from '@screens/MealFeedback';
import { MealForm } from '@screens/MealForm';
import { MealInfo } from '@screens/MealInfo';
import { Statistics } from '@screens/Statistics';
import { useTheme } from 'styled-components';


const { Navigator, Screen } = createNativeStackNavigator()

type RouteParams = {
  id?: string
} | undefined

type MealInfoRouteParams = {
  id: string
  type: 'GOOD' | 'BAD'
}

export function AppRoutes(){
  const { COLORS } = useTheme()

  const type = 'GOOD'

  return (
    <Navigator>
      <Screen
        name='home' 
        component={Home}
        options={{headerShown: false}}
      />
      <Screen name='statistics' component={Statistics}
        options={{
          contentStyle: {
            backgroundColor: type === 'GOOD' ? COLORS.GREEN_LIGTH : COLORS.RED_LIGTH,
          },
          header: (props) => (
            <Header 
              onPress={() => props.navigation.goBack()}
              type={type}>
              <PercentText />
            </Header>),
        }}
      />
      <Screen 
        name='mealForm' 
        component={MealForm}
        options={
     {
      contentStyle: {
        backgroundColor: COLORS.GRAY_300 
      },
      header: (props) => {
        const routeParams = props.route.params as RouteParams
        return (
          <Header 
            onPress={() => props.navigation.goBack()}
            title={routeParams?.id ? 'Editar Refeição' : 'Nova Refeição'}
          />
        );
          },
        }
      }/>

      <Screen name='mealInfo' component={MealInfo}
        options={({ route }) => {
          const { type } = route.params as MealInfoRouteParams
          return ({
            contentStyle: {
              backgroundColor: type === 'GOOD' ? COLORS.GREEN_LIGTH : COLORS.RED_LIGTH,
            },
            header: (props) => (
              <Header 
              type={type}
              onPress={() => props.navigation.goBack()}
              title={'Refeição'}
            />
          )
        })
        }}
      />
      <Screen
        name='mealFeedback' 
        component={MealFeedBack}
        options={{headerShown: false}}
      />
    </Navigator>
  )
}