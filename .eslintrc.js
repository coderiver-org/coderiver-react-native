module.exports = {
    "extends": ["airbnb", "prettier"],
    "plugins": [
      "react-native-globals"
    ],
    "parser": "babel-eslint",
    "env": {
      "react-native-globals/all": true
    },
    "rules": {
      "semi": ["error", "never"],
      "react/jsx-filename-extension": [0],
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "no-use-before-define": 0
    }
};
