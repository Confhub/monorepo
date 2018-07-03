// @flow

type ContextType = {|
  apiToken: string,
|};

export function createContext(token: string): ContextType {
  return {
    apiToken: token,
  };
}
