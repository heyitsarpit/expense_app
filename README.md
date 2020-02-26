# Pleo Frontend challenge

Created a single page app that shows expenses fetched from a given api.
##### View here - https://pleo-expense-arpit.now.sh/

#### Features

- View expense data
- Search expenses based on `firstname, lastame, merchant name, expense amount, month of purchase, year of purchase`
- Post Comments
- Post Images to server (allows use of camera on mobiles)
- View preview of said image
- Localization - Supports languages English, French and German
- Dark mode
- Responsive design(somewhat)

#### Comments


- I Used `Next JS` but the app isn't server rendered, I currently just export it as a static website. Can be deployed on github pages, netlify.
- Wanted to use localization libraries like `react-i18next` and `next-i18next` but I had trouble as they would break the app for some reason I couldn't figure out. So I wrote my own functions that mimic their API and way of use, ie the `useTranslation()` method in `./lib/translate.ts`
- Used redux and typescript as they were a requirement of this test and I had learned them very recently.
- Deployed the app with [now](https://zeit.co), but the api was deployed on AWS which was `http` and browsers just block it as not secure, shifted to heroku since.



### Running the project

Setup your environment
Create a `.env` file in the root directory and add urls for the API.

```sh
echo "API_URL_DEV=http://localhost:5000
API_URL_PROD=http://localhost:6000
" > .env
```

```note
Note: The dev url and production url are where you expense api is deployed, change them accordingly.
```

Install dependencies and run

```sh
npm i
npm run dev
```

### Technologies used

- ReactJS
- NextJs - Framework for react
- Typescript - For better development support and catching type errors
- Redux - Library for state management
- styled-components - Library for writing CSS in JS
- prettier - For auto-formatting code
- axios - Library for network requests
- date-fns - Handle date related ops
- dotenv - For setting environment variables in a .env file
- pre-commit - Pre commit hook for git, runs prettier before every commit

### Forlder Structure

```
.
├── components - React components used in the app
│   ├── styles - Styled components and global styling
│   ├── types - Common Typescript types used in the app
│   │
├── lib - Miscellaneous utility functions used throughout the app
│   │
├── locales - Locales for the ap
│   ├── de - German
│   ├── en - English
│   └── fr - French
│
├── pages - Pages, has just index.tsx currently
│
├── public - Static resources, placed at the root of the build directory by next
│   ├── images
│   └── styles - extra css files
│
├── redux-store - Redux logic lives here
│   ├── expenses - State related to expenses and async requests
│   ├── view - Store for language, theme, limit and offset fetching
├
├── next.config.js - Next config file, the environment variables are defined here for injecting into the app at build time
├── .prettier - Config for prettier auto formatter
├── .env - Your file for setting environment variables

```

## Screens

#### Dark Mode

Toggle to switch between Dark and Light mode.

![Dark Mode](https://media.giphy.com/media/JomAMKN2X1PCWsfLDM/giphy.gif)

#### Searching

Search expenses, you can search based on

- first name
- last name, merchant
- amount of spending
- month of purchase
- year of purchase

![Searching](https://media.giphy.com/media/UrnJLJxpa5ud8z7dti/giphy.gif)

#### Post Comments

Post Comments, the comment box is populated wth already stored comment.

![Posting Comments](https://media.giphy.com/media/SVNTHYk1z6ejoGIfsv/giphy.gif)

#### Post Receipt Images

Post image receipt, shows a preview before upload.

![Posting Images](https://media.giphy.com/media/W1lAN3itGcHGs0JnS5/giphy.gif)

#### Load more expenses

Load more expense, cycle through them by going forward or backward.

![Cycle through expenses](https://media.giphy.com/media/UrhBgUjgwGIjx8r09K/giphy.gif)

#### Responsive

The app is responsive and adapts to window size change.

![Responsive](https://media.giphy.com/media/KFnrNUhgLa86X1Jt9h/giphy.gif)

### Credits

- [Codevolution](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw) - from whom I learned react and redux.
- [Wes bos](https://wesbos.com/) - from whom I learned nextjs styled components.
- [Arshad Khan](https://github.com/ar5had) - Introduced me to pleo and the design of his expense app is what I've recreated.
- All the folks on stackoverflow and github whose code I referenced.
