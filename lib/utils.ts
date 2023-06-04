import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ReadScope, WriteScope, AdminScope } from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readScopes: ReadScope[] = [
  "account",
  "blocks",
  "bookmarks",
  "favourites",
  "filters",
  "lists",
  "mutes",
  "notifications",
  "search",
  "statuses",
];

export const writeScopes: WriteScope[] = [
  "account",
  "blocks",
  "bookmarks",
  "favourites",
  "filters",
  "lists",
  "mutes",
  "notifications",
  "statuses",
  "conversations",
  "media",
  "reports",
];

export const adminScopes: AdminScope[] = [
  "account",
  "reports",
  "domain_allows",
  "domain_blocks",
  "ip_blocks",
  "email_domain_blocks",
  "canonical_email_blocks",
];
