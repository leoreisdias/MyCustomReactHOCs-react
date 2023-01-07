// NOTE: PURPOSE: HOC to add a Context around any page/component - Good when using Next.js

import { ComponentType } from "react";

export const withContext = <T,>(
  Component: ComponentType<T>,
  Context: ComponentType<any>
) => {
  const WithContext = (props: T) => {
    return (
      <Context>
        <Component {...props} />
      </Context>
    );
  };

  return WithContext;
};

// NOTE: USAGE
export const CreateNewButton = withContext(yourPage, yourContext);
