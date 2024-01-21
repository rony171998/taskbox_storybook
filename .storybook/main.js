module.exports = {
    stories: ["../src/components/**/*.stories.js"],
    staticDirs: ["../public"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/preset-create-react-app",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
    ],

    framework: {
        name: "@storybook/react-webpack5",
        options: {},
    },

    features: {
        interactionsDebugger: true,
    },
    core: {
        builder: "@storybook/builder-webpack5",
    },
    docs: {
        autodocs: true,
    },
};
