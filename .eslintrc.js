module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["plugin:vue/essential", 'plugin:vue/vue3-recommended'],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "vue",
    "@typescript-eslint"
  ],
  "rules": {
    semi: [2],
    indent: ['warn', 2], // 缩进2格
    // quotes: [2, 'single'] // 使用单引号
  }
};
