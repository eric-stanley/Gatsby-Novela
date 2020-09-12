import React, { useEffect } from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';
import ScrollToTop from 'react-scroll-up';

import NavigationFooter from '@components/Navigation/Navigation.Footer';
import NavigationHeader from '@components/Navigation/Navigation.Header';
import ArticlesContextProvider from '../../sections/articles/Articles.List.Context';

import { globalStyles } from '@styles';
import ScrollUpButton from '../ScrollUpButton'

/**
 * <Layout /> needs to wrap every page as it provides styles, navigation,
 * and the main structure of each page. Within Layout we have the <Container />
 * which hides a lot of the mess we need to create our Desktop and Mobile experiences.
 */
const Layout: React.FC<{}> = ({ children }) => {
  const [colorMode] = useColorMode();

  useEffect(() => {
    parent.postMessage({ theme: colorMode }, '*');
  }, [colorMode]);

  return (
    <ArticlesContextProvider>
      <Container>
        <Global styles={globalStyles} />
        <NavigationHeader />
        {children}
        <NavigationFooter />
      </Container>
      <ScrollToTop
          showUnder={300}
          duration={700}
          easing="easeInOutCubic"
          style={{ bottom: 30, right: 20, zIndex: 35 }}
        >
          <ScrollUpButton />
        </ScrollToTop>
    </ArticlesContextProvider>
  );
}

export default Layout;

const Container = styled.div`
  position: relative;
  background: ${p => p.theme.colors.background};
  transition: ${p => p.theme.colorModeTransition};
  min-height: 100vh;
`;
