module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: [
    'prettier'
  ],
  globals: {
    $nuxt: true
  },
  // add your custom rules here
  // Not showing as errors in production mode CUSTOM RULE suggested from Medium article and another article from yasminzy.com
  rules: {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/component-name-in-template-casing": "off",
    // "vue/html-indent": "off",
    // "vue/html-self-closing": "off",
    // "vue/max-attributes-per-line": "off",
    // "vue/multiline-html-element-content-newline": "off",
    // "vue/singleline-html-element-content-newline": "off",
    // "vue/v-bind-style": "off"
  }
}
