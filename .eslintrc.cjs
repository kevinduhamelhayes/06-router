{
  "root": true,
  "extends": [
    "airbnb",
    "next/core-web-vitals",
    "plugin:tailwindcss/recommended"
  ],
  "overrides": [
    {
      "files": ["*.js", "*.ts", "*.tsx"]
    }
  ],
  "rules": {
    "import/no-unresolved":"off",
    "import/extensions": [
      "off",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".ts", ".jsx", ".js"] }],
    "semi": ["error", "never"],
   "react/function-component-definition": [
    "error", { "namedComponents": ["function-declaration", "arrow-function"] }
   ],
   "jsx-a11y/anchor-is-valid": ["error", {
      "components": [ "Link" ],
      "specialLink": [ "hrefLeft", "hrefRight" ],
      "aspects": [ "invalidHref", "preferButton" ]
    }],
    "max-len": ["error", { "code": 150 }],
    "max-lines": ["error", 350] 
  }
}
