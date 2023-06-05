import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ScopeInfo } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const READ_SCOPES = [
  "read:accounts",
  "read:blocks",
  "read:bookmarks",
  "read:favourites",
  "read:filters",
  "read:follows",
  "read:lists",
  "read:mutes",
  "read:notifications",
  "read:search",
  "read:statuses",
];

export const WRITE_SCOPES = [
  "write:account",
  "write:blocks",
  "write:bookmarks",
  "write:favourites",
  "write:filters",
  "write:lists",
  "write:mutes",
  "write:notifications",
  "write:statuses",
  "write:conversations",
  "write:media",
  "write:reports",
];

export const ADMIN_READ_SCOPES = [
  "admin:read:account",
  "admin:read:reports",
  "admin:read:domain_allows",
  "admin:read:domain_blocks",
  "admin:read:ip_blocks",
  "admin:read:email_domain_blocks",
  "admin:read:canonical_email_blocks",
];

export const ADMIN_WRITE_SCOPES = [
  "admin:write:account",
  "admin:write:reports",
  "admin:write:domain_allows",
  "admin:write:domain_blocks",
  "admin:write:ip_blocks",
  "admin:write:email_domain_blocks",
  "admin:write:canonical_email_blocks",
];

export const scopesInfo: ScopeInfo[] = [
  {
    method: "read",
    label: "Read",
    scopes: READ_SCOPES,
    description: "read account's data",
  },
  {
    method: "write",
    label: "Write",
    scopes: WRITE_SCOPES,
    description: "modify account's data",
  },
  {
    method: "admin",
    label: "Admin",
    scopes: [ADMIN_READ_SCOPES, ADMIN_WRITE_SCOPES],
    description: "read all data on the server",
  },
  {
    method: "follow",
    label: "Follow",
    description: "modify account relationships,deprecated in 3.5.0 and newer.",
  },
  {
    method: "push",
    label: "Push",
    description: "receive push notifications",
  },

  {
    method: "crypto",
    label: "Crypto",
    description: "use end-to-end encryption",
  },
];
