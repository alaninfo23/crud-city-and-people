import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";


export const App = () => {
  return (
    <AppThemeProvider>
      <AppRoutes />
    </AppThemeProvider>
  );
}
