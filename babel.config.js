module.exports = {
    presets: [
        ["@babel/preset-env", {modules: false}],
        "@babel/preset-react"
    ],
    plugins: [
        '@babel/plugin-transform-arrow-functions',
        '@babel/plugin-transform-spread',
        '@babel/plugin-transform-destructuring',
        '@babel/plugin-transform-block-scoped-functions',
        '@babel/plugin-proposal-class-properties'
    ]
}