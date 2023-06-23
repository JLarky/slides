```
yarn && yarn build
```

you'll see ~100kb bundle

```
yarn start
```

open website and you'll see 1mb bundle

```
$ du -sh .next/static/chunks/4201c796-1b6fcb825824e4b0.js 
4.3M    .next/static/chunks/4201c796-1b6fcb825824e4b0.js
```

```
Route (app)                                Size     First Load JS
─ ○ /                                      0 B                0 B
+ First Load JS shared by all              77.6 kB
  ├ chunks/769-37a05f64bbbf2825.js         25.2 kB
  ├ chunks/bce60fc1-49ee79ad31766ac6.js    50.5 kB
  ├ chunks/main-app-f68f296e47bc52ec.js    217 B
  └ chunks/webpack-57e7153b6eca00f2.js     1.71 kB

Route (pages)                              Size     First Load JS
─ ○ /404                                   182 B          75.5 kB
+ First Load JS shared by all              75.3 kB
  ├ chunks/framework-8883d1e9be70c3da.js   45 kB
  ├ chunks/main-2c4a65eb87b994fa.js        28.4 kB
  ├ chunks/pages/_app-998b8fceeadee23e.js  195 B
  └ chunks/webpack-57e7153b6eca00f2.js     1.71 kB

○  (Static)  automatically rendered as static HTML (uses no initial props)
```
