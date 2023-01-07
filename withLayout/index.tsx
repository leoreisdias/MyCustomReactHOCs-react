// NOTE: PURPOSE: HOC to add a Layout around any page/component

import { ComponentType } from "react";

import { MainLayout } from "@/components";

export const withLayout = <T,>(
  Component: ComponentType<T>,
  LayoutComponent?: ComponentType<any>
) => {
  const WithLayout = (props: T) => {
    const Layout = LayoutComponent || MainLayout;

    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };

  WithLayout.hasLayout = true; // Line needed when using Next.js

  return WithLayout;
};

// -----------------------------------------------------------------------------
// NOTE: IF USING NEXT.JS USE THIS IN THE _app.tsx

// Types for a custom layout per Page
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  hasLayout?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// Set a default layout
const DefaultLayout = (page: ReactElement, headTitle?: string) => {
  return <MainLayout headTitle={headTitle}>{page}</MainLayout>;
};

// Component With Layout insertion
const ComponentWithLayout = Component.hasLayout ? (
  <Component {...pageProps} />
) : (
  DefaultLayout(<Component {...pageProps} />, Component.displayName)
);

return (
  // ...
  { ComponentWithLayout }
  //...
);
