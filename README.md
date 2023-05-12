# Realtime-Chat-App

A full-stack realtime messaging chat application by NextJs

## See more about NextJs 13

- <https://github.com/lynn1286/learn-nextjs-13>
- <https://juejin.cn/post/7185830116352589882>

## Features

NEXTJS:

- nextjs
  - rsc >> use client compoent and server compoent
  - api >> db crud

Mobile:

- MobileChatLayout >> this component make a mobile nav bar, it's great

OATUH:

- next-auth >> Github OAuth APP >> [Github OAuth Application](https://github.com/settings/applications/new)
- @upstash/redis >> stored data >> [upstash](https://upstash.com/)
- zod >> validation
- react-hook-form @hookform/resolvers >> register
- react-hot-toast >> notifications: warning prompt
- react-textarea-autosize >> content input

realtime-make:

- pusher pusher-js >> websocket: make realtime spread >> [pusher](https://pusher.com
)

middleware:

- use middleware >> protect sensitiveRoutes and redirect

UI or style:

- lucide-react >> UI: icon logo, transition
- TailwindCSS >> Responsive UI built
- tailwind-merge >> Class merging
- clsx >> Conditional classes
- class-variance-authority >> Variants
- tailwindcss/forms >> plugin: make form better
- react-loading-skeleton >> loading transition between pages

data request:

- axios
- fetch
- swr >> client-fetching 

> **Good to know:** It's still possible to fetch data client-side. We recommend using a third-party library such as [`SWR`](https://swr.vercel.app/) or [`React Query`](https://tanstack.com/query/v4/) with Client Components. In the future, it'll also be possible to fetch data in Client Components using React's [`use()` hook](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#use-in-client-components).

TypeScript:

- Built with TypeScript

## Run this project

```sh
git clone git@github.com:Jinx-FX/Realtime-Chat-App.git
cd ./Realtime-Chat-App
yarn add
```

then you need to add .env.local file:
```env
# its up to you
NEXTAUTH_SECRET=supersecret

# upstash redis db
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# you can use google client or github.
# if you want to use google, you need to modify ./lib/auth.ts
# and you can update google UI in the ./app/login/page.tsx
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

# pusher channel
PUSHER_APP_ID = 
NEXT_PUBLIC_PUSHER_APP_KEY = 
PUSHER_APP_SECRET = 
```

after that:
```sh
yarn dev
```

## Referrence

- <https://github.com/joschan21/nextjs-realtime-chat>