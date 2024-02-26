module.exports = {
  root   : true,
  env    : {browser: true, es2020: true},
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: [
    "import",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser        : '@typescript-eslint/parser',
  rules         : {
    indent                               : [2, 2],
    quotes                               : [2, 'single'],
    'quote-props'                        : [2, 'as-needed'],
    semi                                 : [2, 'never'],
    eqeqeq                               : 2,
    'dot-notation'                       : 2,
    'guard-for-in'                       : 2,
    'no-else-return'                     : 2,
    'no-loop-func'                       : 2,
    'no-multi-spaces'                    : 2,
    'no-redeclare'                       : 2,
    'no-self-compare'                    : 2,
    'no-useless-concat'                  : 2,
    'no-spaced-func'                     : 2,
    'no-var'                             : 2,
    'brace-style'                        : 2,
    'array-bracket-spacing'              : [2, 'never'],
    'object-curly-spacing'               : [2, 'never'],
    'comma-dangle'                       : [2, 'never'],
    'comma-spacing'                      : [2, {before: false, after: true}],
    'key-spacing'                        : [2, {mode: 'strict', align: 'colon'}],
    'arrow-spacing'                      : 2,
    'computed-property-spacing'          : [2, 'never'],
    'no-unneeded-ternary'                : 2,
    'space-infix-ops'                    : 2,
    'space-in-parens'                    : 2,
    'space-before-blocks'                : 2,
    'space-before-function-paren'        : [2, 'never'],
    "max-len"                            : [2, { "code": 120 }],
    'no-duplicate-imports'               : 'warn',
    'react/no-access-state-in-setstate'  : 'error',
    'react/jsx-boolean-value'            : 'warn',
    'react/jsx-equals-spacing'           : ['warn', 'never'],
    'react/jsx-fragments'                : 'warn',
    'react/self-closing-comp'            : ['warn', {component: true, html: true}],
    'react/void-dom-elements-no-children': 'error',
    'react/react-in-jsx-scope'           : 0,
    "react/no-unknown-property": ["off", { "ignore": ["JSX"] }],
    "react/jsx-props-no-multi-spaces"    : 2,
    "import/order": [
      "error",
      {
        "groups": [
          "builtin",
          "external",
          "internal",
          ["parent","sibling"],
          "object",
          "type",
          "index"
        ],
        "pathGroupsExcludedImportTypes": [
          "builtin"
        ],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        },
        "pathGroups": [
        {
          "pattern": "react",
          "group": "external",
          "position": "before"
        },
      ]
      }
    ]
  }
}
