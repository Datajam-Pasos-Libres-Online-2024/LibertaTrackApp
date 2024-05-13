import React from 'react';
import { Button, Text } from 'react-native';
import { Amplify } from 'aws-amplify';
import AppNavigation from './src/navigation/AppNavigation';
import MyAuthenticator from './src/components/core/Authenticator';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { configStore } from './src/redux/store/configStore';
import { Provider } from 'react-redux';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: "69k1ud2fpil8f4kgn0i6tpeacp",
      userPoolId: "us-east-1_oxsDMoGbu",
    }
  }
});

const signUpFields = {
  signIn: {
    username: {
      label: "Email",
      placeholder: "Ingresa tu email",
    },
    password: {
      label: "Contraseña",
      placeholder: "Ingresa tu contraseña",
    },
  },
  signUp: {
    username: {
      label: "Email",
      placeholder: "Ingresa tu email"
    },
    password: {
      label: "Contraseña",
      placeholder: "Ingresa tu contraseña",
    },
    confirm_password: {
      label: "Confirmar Contraseña",
      placeholder: "Confirma tu contraseña",
    },
    given_name: {
      label: "Nombre",
      placeholder: "Ingresa tu nombre",
    },
    family_name: {
      label: "Apellido",
      placeholder: "Ingresa tu apellido"
    }
  }
}

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}


function App() {

  return (
    <Provider store={configStore}>
      <Authenticator.Provider>
        <Authenticator signUpAttributes={["given_name", "family_name"]} formField={signUpFields} variation="modal">
          <AppNavigation />
          {/* <SignOutButton /> */}
        </Authenticator>
      </Authenticator.Provider>
    </Provider>
  );
}
export default App;