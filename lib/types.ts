export type MethodType = "read" | "write" | "follow" | "push" | 'crypto' | 'admin'

export type ReadScope =
  |"account"
  | "blocks"
  | "bookmarks"
  | "favourites"
  | "filters"
  | "filters"
  | "lists"
  | "mutes"
  | "notifications"
  | "search"
  | "statuses";

export type WriteScope = Omit<ReadScope, 'search'>
  | 'conversations'
  | 'media'
  | "reports"

export type AdminScope =
  "account"
  | "reports"
  | "domain_allows"
  | "domain_blocks"
  | "ip_blocks"
  | "email_domain_blocks"
  | "canonical_email_blocks";
