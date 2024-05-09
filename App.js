import React from 'react';
import { Button, Text } from 'react-native';
import { Amplify } from 'aws-amplify';
import AppNavigation from './src/navigation/AppNavigation';
import MyAuthenticator from './src/components/core/Authenticator';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolClientId: "26oh8a7q2pkds601c5gesvikqn",
      userPoolId: "us-east-1_fbUmF1i2Y",
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
    <Authenticator.Provider>
      <Authenticator signUpAttributes={["given_name", "family_name"]} formField={signUpFields} variation="modal">
        <Text>xd</Text>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
}
export default App;