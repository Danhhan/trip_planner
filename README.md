## TECH STACK : Starter for React JS 18+ with Vite, Tailwindcss and TypeScript

### Features

- [ReactJs](https://reactjs.org/) + [Vitejs](https://vitejs.dev/)
- Type checking [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwindcss](https://taildwindcss.com/)
- Integrate with [React-I18next](https://react.i18next.com/)
- Integrate with [Redux Toolkit](https://redux-toolkit.js.org/)
- Strict Mode for TypeScript and React 18+
- Linter with [ESLint](https://eslint.org) (PancakeSwap eslint)
- Code Formatter with [Prettier](https://prettier.io)
- Husky for Git Hooks
- Lint-staged for running linters on Git staged files
- Absolute Imports using `@` prefix
- SEO metadata with React Helmet Async

### Requirements

- Node.js 16.14.0+ and npm

### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/MingFEW/HackerNews.git
cd HackerNews
yarn install
```

Then, you can run locally in development mode with live reload:

```shell
yarn dev
```

Open http://localhost:5173 with your favorite browser to see your project.

```shell
.
├── README.md                       # README file
├── .github                         # GitHub folder
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── app                         # App folder
│       │── components              # Components folder
│       │── pages                   # All page here
│   ├── assets                      # Assets folder
│   ├── locales                     # Locales folder
│   ├── constants                   # Constants folder
│   ├── styles                      # Styles folder
│   ├── state                       # State folder
│   ├── store                       # Redux store
│   ├── types                       # Types folder
│   └── utils                       # Utility functions
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

### Customization

You can easily configure. Please change the following file:

- `public/logo.svg`: your website favicon
- `src/constants/AppConfig.ts`: configuration file
- `src/app/pages/Home/index.tsx`: home view

### Deploy to production

You can see the results locally in production mode with:

```shell
$ npm run build
$ npm run preview
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

Now, your blog is ready to be deployed. All generated files are located at `dist` folder, which you can deploy with any hosting service.