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
  redirect_uri: string;
  client_id: string;
  client_secret: string;
  vapid_key: string;
}

export type MError = {
  error: string;
  error_description: string
};

