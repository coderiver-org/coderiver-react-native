module.exports = {
    "extends": ["airbnb", "prettier"],
    "plugins": [
      "react-native-globals"
    ],
    "env": {
      "react-native-globals/all": true
    },
    "rules": {
      "semi": ["error", "never"],
      "react/jsx-filename-extension": [0]
    }
};
