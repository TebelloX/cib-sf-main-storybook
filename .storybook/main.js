module.exports = {
  "stories": [
    "../src/**/*.stories.mdx"
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  refs: {
    "Angular Material": {
      title:"Angular Material Design System",
      url: "https://angularmaterial--62e2bdb1c3c7b2cd30ee763e.chromatic.com",
      expanded: true
    },
    "Salesforce Lightning": {
      title:"Salesforce Lightning Design System",
      url: "https://62e20640496c124c91b98710-rqhfydkajr.chromatic.com",
      expanded: false
    }
  },
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}