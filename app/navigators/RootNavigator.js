import { StackNavigator } from 'react-navigation';

import { ContactsList, ContactsCreate, ContactsDetail } from '../contacts/screens'
import { LoginPage, HomePage, MoviePage, CastPage, SearchPage } from '../notflix/screens'

const RootNavigator = StackNavigator({
  ContactsList: {
    screen: ContactsList,
    navigationOptions: {
      title: 'Contacts List'
    }
  },
  ContactsCreate: {
    screen: ContactsCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  },
  ContactsDetail: {
    screen: ContactsDetail,
    navigationOptions: {
      title: 'Detail Contact'
    },
    LoginPage: {
      screen: LoginPage,
      navigationOptions: {
        title: 'Login Page'
      }
    },
    HomePage: {
      screen: HomePage,
      navigationOptions: {
        title: 'Home Page'
      }
    },
    MoviePage: {
      screen: MoviePage,
      navigationOptions: {
        title: 'Movie Page'
      }
    },
    SearchPage: {
      screen: SearchPage,
      navigationOptions: {
        title: 'Search Page'
      }
    },
    CastPage: {
      screen: CastPage,
      navigationOptions: {
        title: 'Cast Page'
      }
    }
  }
})

export default RootNavigator
