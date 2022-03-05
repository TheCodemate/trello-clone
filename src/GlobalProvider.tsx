import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { DragDropContext } from 'react-beautiful-dnd';

import { store } from 'store';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'theme';
import GlobalStyle from 'globalStyles';

interface GlobalProviderProps {
  children: React.ReactElement;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  return (
    <StrictMode>
      <GlobalStyle />
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <IconContext.Provider value={{ size: '1.2rem' }}>
            <BrowserRouter>{children}</BrowserRouter>
          </IconContext.Provider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
};

export default GlobalProvider;
