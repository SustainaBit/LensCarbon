# Local deployment

- install pnpm, if needed
- from the lenster-main directory:

- ```pnpm install```
- ```script/bootstrap```

There will probably be some errors, perhaps related to Husky. If cannot be solved, try ignoring them.

- go to subfolder ``cd apps/web``
- create file ``.env`` from ``.env.example``

NB: you can also use `testnet` instead of `sandbox` in .env

- `` cd ../..``
- ```pnpm dev``` to start development server

Go to http://localhost:4783/ to see the app

More infos are available in ``/docs/development``

For more info about Lenster: https://github.com/lensterxyz/lenster
