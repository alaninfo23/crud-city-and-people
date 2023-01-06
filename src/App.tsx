import { AppRoutes } from './routes';
import { Login, MenuLateral } from './shared/components';
import { AppThemeProvider, AuthProvider, DrawerProvider } from './shared/contexts';

import './shared/forms/TraducoesYup';

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>

        <Login>
          <DrawerProvider>
            <MenuLateral>
              <AppRoutes />
            </MenuLateral>
          </DrawerProvider>
        </Login>

      </AppThemeProvider>
    </AuthProvider>
  );
};
