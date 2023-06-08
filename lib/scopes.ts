import { ScopeInfo } from "./types";
import { InstanceType } from "@/components/CreatAppForm";

// Mastodon Scopes
const READ_SCOPES = [
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

const WRITE_SCOPES = [
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

const ADMIN_READ_SCOPES = [
  "admin:read",
  "admin:read:account",
  "admin:read:reports",
  "admin:read:domain_allows",
  "admin:read:domain_blocks",
  "admin:read:ip_blocks",
  "admin:read:email_domain_blocks",
  "admin:read:canonical_email_blocks",
];

const ADMIN_WRITE_SCOPES = [
  "admin:write",
  "admin:write:account",
  "admin:write:reports",
  "admin:write:domain_allows",
  "admin:write:domain_blocks",
  "admin:write:ip_blocks",
  "admin:write:email_domain_blocks",
  "admin:write:canonical_email_blocks",
];

// Pleroma Scopes
const PLEROMA_READ_SCOPE = [
  ...READ_SCOPES,
  "read:backups",
  "read:chats",
  "read:security",
];

const PLEROMA_WRITE_SCOPE = [...WRITE_SCOPES, "write:chats", "write:security"];

const PLEROMA_ADMIN_READ_SCOPES = [
  ...ADMIN_READ_SCOPES,
  "admin:read:chats",
  "admin:read:invites",
  "admin:read:statuses",
  "admin:read:follows",
  "admin:read:media_proxy_caches",
];
const PLEROMA_ADMIN_WRITE_SCOPES = [
  ...ADMIN_WRITE_SCOPES,
  "admin:write:chats",
  "admin:write:invites",
  "admin:write:statuses",
  "admin:write:follows",
  "admin:write:media_proxy_caches",
];

// Akkoma Scopes
const AKKOMA_READ_SCOPE = PLEROMA_WRITE_SCOPE.filter(
  (scope) => scope !== "read:chats"
);
const AKKOMA_WRITE_SCOPE = PLEROMA_WRITE_SCOPE.filter(
  (scope) => scope !== "write:chats"
);
const AKKOMA_ADMIN_READ_SCOPES = PLEROMA_ADMIN_READ_SCOPES.filter(
  (scope) => scope !== "admin:read:chats"
);
const AKKOMA_ADMIN_WRITE_SCOPES = PLEROMA_ADMIN_WRITE_SCOPES.filter(
  (scope) => scope !== "admin:write:chats"
);

// Miskky Scopes

const MISSKEY_READ_SCOPES = [
  "read:account",
  "read:blocks",
  "read:drive",
  "read:favorites",
  "read:following",
  "read:messaging",
  "read:mutes",
  "read:notifications",
  "read:reactions",
  "read:pages",
  "read:page-likes",
  "read:user-groups",
  "read:channels",
  "read:gallery",
  "read:gallery-likes",
];

const MISSKEY_WRITE_SCOPES = [
  "write:account",
  "write:blocks",
  "write:drive",
  "write:favorites",
  "write:following",
  "write:messaging",
  "write:mutes",
  "write:notes",
  "write:notifications",
  "write:reactions",
  "write:votes",
  "write:pages",
  "write:page-likes",
  "write:user-groups",
  "write:channels",
  "write:gallery",
  "write:gallery-likes",
  "write:clip-favorite",
  "write:flash",
];

export const getScopes = (instanceType: InstanceType): ScopeInfo[] => {
  let readScopes = READ_SCOPES;
  let writeScopes = WRITE_SCOPES;
  let adminScopes = [ADMIN_READ_SCOPES, ADMIN_WRITE_SCOPES];

  switch (instanceType) {
    case "mastodon":
      break;
    case "akkoma":
      readScopes = AKKOMA_READ_SCOPE;
      writeScopes = AKKOMA_WRITE_SCOPE;
      adminScopes = [AKKOMA_ADMIN_READ_SCOPES, AKKOMA_ADMIN_WRITE_SCOPES];
      break;
    case "pleroma":
      readScopes = PLEROMA_READ_SCOPE;
      writeScopes = PLEROMA_WRITE_SCOPE;
      adminScopes = [PLEROMA_ADMIN_READ_SCOPES, PLEROMA_ADMIN_WRITE_SCOPES];
      break;
    case "misskey":
      readScopes = MISSKEY_READ_SCOPES;
      writeScopes = MISSKEY_WRITE_SCOPES;
      adminScopes = [];
  }

  return [
    {
      method: "read",
      label: "Read",
      scopes: readScopes,
      description: "read account's data",
    },
    {
      method: "write",
      label: "Write",
      scopes: writeScopes,
      description: "modify account's data",
    },
    {
      method: "admin",
      label: "Admin",
      scopes: adminScopes,
      description: "read all data on the server",
    },
    {
      method: "follow",
      label: "Follow",
      description:
        "modify account relationships,deprecated in 3.5.0 and newer.",
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
};
