export type MethodType =
  | "read"
  | "write"
  | "follow"
  | "crypto"
  | "follow"
  | "admin"
  | "push";

export interface ScopeInfo {
  method: MethodType;
  label: string;
  scopes?: string[] | string[][];
  description: string;
}

  export interface AppEntry {
    id: string;
    name: string;
    website: string | null;
    redirectUri: string;
    clientId: string;
    clientSecret: string;
    vapidKey: string;
  }

  