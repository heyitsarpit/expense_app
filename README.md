# Pleo Frontend Challenge

Created a single page app that shows expenses fetched from a given api.

### V2 Improvements

- New expense list view page
- New expense view page (introduced use of `react-query` for data fetching)
- 404 page
- search optimization with a debounce hook
- Using the Intl API for currency formatting
- introduced `zustand` for theme management (useTheme hook)

##### V2 View here - https://expense-app-git-v2.arpit73.now.sh

##### View here - https://expense-app.now.sh/


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
- Enabled server side rendering for styled-components, no flicker on first render.
- Added new `getStaticProps` method to populate page with some data at first load. Couldn't have been possible before as it was introduced in Next 9.3 which came out weeks after submission.
- The above two combined give a slightly noticeable but better experience every time you load the page.
- General code quality improvements and some optimization. No features were added or modified.

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

## Screens

#### Dark Mode

Toggle to switch between Dark and Light mode.

<p align="center">
  <img width="80%" src="https://media.giphy.com/media/JomAMKN2X1PCWsfLDM/giphy.gif">
</p>

#### Searching

Search expenses, you can search based on

- first name
- last name, merchant
- amount of spending
- month of purchase
- year of purchase

<p align="center">
  <img width="80%" src="https://media.giphy.com/media/UrnJLJxpa5ud8z7dti/giphy.gif">
</p>

#### Post Comments

Post Comments, the comment box is populated wth already stored comment.

<p align="center">
  <img width="80%" src="https://media.giphy.com/media/SVNTHYk1z6ejoGIfsv/giphy.gif">
</p>

#### Post Receipt Images

Post image receipt, shows a preview before upload.

<p align="center">
  <img width="80%" src="https://media.giphy.com/media/W1lAN3itGcHGs0JnS5/giphy.gif">
</p>

#### Load more expenses

Load more expense, cycle through them by going forward or backward.

<p align="center">
  <img width="80%" src="https://media.giphy.com/media/UrhBgUjgwGIjx8r09K/giphy.gif">
</p>

#### Responsive

The app is responsive and adapts to window size change.

<p align="center">
  <img width="80%" src="https://media.giphy.com/media/KFnrNUhgLa86X1Jt9h/giphy.gif">
</p>
