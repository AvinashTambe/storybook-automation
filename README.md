# storybook-automation

## How to Install and Set Up Storybook

### 1. Initialize the Project (if not already done)
If you do not have a `package.json` file in your project directory, initialize your project with:

```sh
npm init -y
```

### 2. Install Storybook
Run the following command to install and set up Storybook:

```sh
npx storybook@latest init
```

This command will detect your framework and configure Storybook accordingly.


### 3. Start Storybook
After installation, you can start Storybook locally to view and interact with your components:

```sh
npm run storybook
```

or, if you use Yarn:

```sh
yarn storybook
```

This will start a local development server and open Storybook in your default browser, usually at [http://localhost:6006](http://localhost:6006).

You can now browse your stories, use add-ons, and (if installed) access the Playwright codegen panel.

---
**Troubleshooting:**

If you see an error like `Could not read package.json: Error: ENOENT: no such file or directory`, it means your project is not initialized. Run `npm init -y` first, then repeat the Storybook installation step.

## Integrate Playwright Codegen with Storybook

You can add the [storybook-addon-test-codegen](https://github.com/igrlk/storybook-addon-test-codegen) to integrate Playwright codegen functionality directly into Storybook. This allows you to generate Playwright test code interactively from your Storybook stories.

### 1. Install the Add-on

```sh
npm install --save-dev storybook-addon-test-codegen
```

### 2. Register the Add-on

Add the add-on to your Storybook configuration. In your `.storybook/main.js` (or `main.ts`), add the following to the `addons` array:

```js
module.exports = {
  // ...existing config...
  addons: [
    // ...other addons...
    'storybook-addon-test-codegen',
  ],
};
```

### 3. Usage

Start Storybook as usual. You will see a new "Test Codegen" panel in the Storybook UI, which allows you to record and generate Playwright test code for your components.

For more details and advanced configuration, see the [storybook-addon-test-codegen documentation](https://github.com/igrlk/storybook-addon-test-codegen).