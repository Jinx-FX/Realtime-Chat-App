# Realtime-Chat-App

A full-stack realtime messaging chat application by NextJs

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
- swr

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

## For me

- client compoent vs. server compoent
- pages/api vs. app/api
- pusher: websocket use!

## Referrence

- https://github.com/joschan21/nextjs-realtime-chat