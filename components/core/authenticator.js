import React, { PropsWithChildren } from 'react';
import {
    Authenticator as AmplifyAuthenticator,
    ThemeProvider as AmplifyThemeProvider,
} from '@aws-amplify/ui-react-native';

const Authenticator = ({ children }) => {
    // En React Native, la personalización del tema se hace de manera diferente
    // y los estilos CSS no son aplicables. Necesitas usar StyleSheet de React Native.
    const theme = {
        name: "liberta-track-consumer"
    };

    return (
        <AmplifyThemeProvider theme={theme}>
            <AmplifyAuthenticator
                usernameAttributes="email" // Asume que el inicio de sesión es por correo electrónico
                signUpConfig={{
                    header: 'Regístrate',
                    signUpFields: [
                        {
                            label: 'Email',
                            key: 'username',
                            required: true,
                            displayOrder: 1,
                            type: 'string',
                        },
                        {
                            label: 'Contraseña',
                            key: 'password',
                            required: true,
                            displayOrder: 2,
                            type: 'password',
                        },
                        {
                            label: 'Confirmar Contraseña',
                            key: 'confirm_password',
                            required: true,
                            displayOrder: 3,
                            type: 'password',
                        },
                        {
                            label: 'Nombre',
                            key: 'given_name',
                            required: true,
                            displayOrder: 4,
                            type: 'string',
                        },
                        {
                            label: 'Apellido',
                            key: 'family_name',
                            required: true,
                            displayOrder: 5,
                            type: 'string',
                        }
                    ]
                }}
            >
                {children}
            </AmplifyAuthenticator>
        </AmplifyThemeProvider>
    );
};

export default Authenticator;