## TopGoaler

TopGoaler is an awesome 'competitive' task app that helps you achieve goals together with your friends. 


## Setup

Run `cd client; npm install` to get all the dependencies for client. Then do the same for `server`. 

Then in `client`, run `expo start` to get your app running. 

To run the server, use `cd server; node server.js`.

Download 'Expo' client on your iOS/Android device to run it natively (over the cloud too). 

VSCode is the suggested editor. Please use it in development to make sure lintings are followed.



## Contribute

Before implementing a new task / bug fix / refactor etc..., please first mark the corresponding trello card as "in progress". If there's no corresponding card, please create one for yourself.

Then make a new branch for the implementation:

```bash
git checkout -b branch_name
```

For branch_name, please follow the format:

- type-card_number

For example, task-30, bug-21, refactor-25. 



After implementation, push the commited changes to Github

```bash
git push [--set-upstream ...]
```



When the work is complete and already pushed up, create a pull request on Github to merge it into master branch. We require 2 peer reviews and passing CI before merging in.



## Testing

### Test Directories
For Report B, please find our tests here:

- Frontend test directory: [client/app/tests](client/app/tests)
- Backend test directory: [server/tests](server/tests)


### Frontend testing guideline

Frontend tests should check rendering with snapshots. Snapshots are saved renders that are the most recently accepted. It is used to make sure that the UI does not change unexpectedly. If changes are made, the test will fail and the snapshot must be updated by either pressing 'u' in the interactive watch or with the command:

```bash
jest -u
```

Frontend tests should also check for core components, such as the number of buttons and icons. For further coverage, tests should also check that button presses invoke the correct corresponding methods and input text are dependent on state.


### Write unit tests

Please write unit tests in /app/tests. Each test file should be at the exact same relative path in /app/tests as the path of js file being tested in /app/components, and it should have the same file name except the suffix should be .test.js.

For example:

For js file /app/components/App/App.js, the corresponding test file should be /app/tests/App/App.test.js.

Our unit tests are performed using jest and enzyme. Please find their documentations at:

https://jestjs.io/docs/en/getting-started

https://airbnb.io/enzyme/docs/api/



### Run unit tests

Please use the following command to run unit tests. This is the same command in our Continuous Integration. So please ensure that you pass this command before creating a pull request:

```bash
# Run this in both /client and /server
npm test
```

or

```bash
npm run test
```



### Debug unit tests

When writing / debugging unit tests, please run the following command in terminal (perferably in the terminal inside VS Code so that you can see our code and the unit tests output at the same time):

```bash
npm run watch
```

With this command, the unit tests will rerun every time you change something and save the progress. Also, the watch command is configuered to display all console.log messages which makes it easier to debug.



### Check unit tests coverage

Though currently we do not enforce a 100% code coverage, it is still a good idea to cover as much as possible, at least for the part you are currently testing. To generate a coverage report, use the following command:

```bash
npm run coverage
```

This command will generate an html report at /coverage/Icov-report/index.html. This html report enables you to check what coverage cases you are missing.

## Contributors

Qianmeng Chen

Pochao Yang

Zhouheng Sun

Amir Saad

Brian Be

Bingxin Zhu
