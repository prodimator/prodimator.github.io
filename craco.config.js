const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            'primary-color': '#AD95FF',
                            'heading-color': '#F3F3F3',
                            'text-color': '#F3F3F3',
                            'body-background': '#0A192F',
                            'component-background': '#0A192F',
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};