// NOTE: PURPOSE: HOC to add and reuse permission rules in your Components;

import { ComponentType } from "react";

type WithPermissionProps = {
  permission: string;
};

export const withPermission = <T,>(Component: ComponentType<T>) => {

  const WithPermission = (props: T & WithPermissionProps) => {
    const hasPermission = // -> verify if has permission

    if (hasPermission) {
      return <Component {...(props as T)} />;
    }
    return null; // -> Or some another component;
  };

  return WithPermission;
};


// NOTE: USAGE
export const CreateNewButton = withPermission<CreateNewButtonProps>(
  createNewButtonComponent
);

