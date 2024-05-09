import React from 'react';
import {
    Authenticator as AmplifyAuthenticator,
    ThemeProvider as AmplifyThemeProvider,
} from '@aws-amplify/ui-react-native';

const theme = {
    // Definición de un tema personalizado (si se necesita más personalización, se debe expandir este objeto)
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 20,
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const MyAuthenticator = ({ children }) => {
    return (
        <AmplifyThemeProvider theme={theme}>
            <AmplifyAuthenticator
                usernameAttributes="email"
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
                        },
                    ]
                }}
            >
                {children}
            </AmplifyAuthenticator>
        </AmplifyThemeProvider>
    );
};

export default MyAuthenticator;