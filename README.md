Generate access tokens for [Akkoma](https://akkoma.social/), [Pleroma](https://pleroma.social/), and [Mastodon](https://joinmastodon.org/) APIs with ease.

**Features**:
- Create an application
- Obtain an account's access token

Build with Next.js(13) and [shadcn/ui](https://ui.shadcn.com/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSevichecc%2FM-OAuth&project-name=m-oauth&repository-name=M-OAuth&demo-title=M-OAuth&demo-description=Access%20token%20generator%20for%20Akkoma%2C%20Pleroma%2C%20Mastodon%20APIs.&demo-url=https%3A%2F%2Fm-oauth.seviche.cc&demo-image=https%3A%2F%2Fm-oauth.seviche.cc%2Fog.png)
## Implemantaion

| Software | Status     |
| -------- | ---------- |
| Akkoma   | ✅         |
| Pleroma  | ✅         |
| Mastodon | ✅         |
| Misskey  | 🟡 Pending |


Misskey's implementation is more complex and is currently pending due to this issue: [OAuth2 Provider実装](https://github.com/misskey-dev/misskey/issues/8262)

## Use Cases for the Generated Data:
- Utilize Mastodon, Pleroma, and Akkoma as OAuth2 Providers
- Create your own bot!

## Motivation

Access tokens are frequently used in development, but Akkoma and Pleroma lack an intuitive way to obtain one, unlike Mastodon. The only way to create an application and get an account's access token is to mock HTTP requests using tools like Postman. Since the HTTP request body is highly flexible, it can contain typos or other errors, and changing authorization scopes is not convenient. Pleroma's available authorization scopes are not as clear as Mastodon's, which sometimes leads to setting overly broad permissions, compromising user security and violating the principle of minimal authorization scope.

To address this issue, I wanted Akkoma to have an easy way to register a client app and obtain an access token for testing. I opened an [issue](https://akkoma.dev/AkkomaGang/akkoma-fe/issues/296) on Akkoma-fe, but it has been pending for about a month without any response from the developer. As a result, I created this project.

This app is inspired by the [Access Token Generator for Pleroma API](https://tools.splat.soy/pleroma-access-token/) , but offers more features, such as finer-grained admin scopes, no analytics, and no data storage in local storage, making it a safer option.

