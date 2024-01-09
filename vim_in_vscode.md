1. Install Vim extension by vscodevim

2. Add this code to the settings.json

```js
"vim.insertModeKeyBindings": [
    {
      "before": ["h", "h"],
      "after": ["<Esc>"]
    }
  ]
  
```
the final settings.json should look something like this
```
{
  "workbench.colorTheme": "Solarized Dark",
  "editor.mouseWheelZoom": true,
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true,
  "editor.formatOnType": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "git.openRepositoryInParentFolders": "never",
  "eslint.codeActionsOnSave.rules": null,
  "json.schemas": [],
  "markdown-preview-enhanced.previewTheme": "solarized-light.css",
  "liveServer.settings.ignoreFiles": [
    "**/*.db",
    "**/*.sqlite",
    ".vscode/**",
    "**/*.scss",
    "**/*.sass",
    "**/*.ts"
  ],
  "aws.telemetry": false,
  "files.autoSave": "afterDelay",
  "editor.quickSuggestions": {
    "other": false,
    "comments": false,
    "strings": false
  },
  "editor.suggestOnTriggerCharacters": false,
  "editor.wordBasedSuggestions": false,
  "editor.parameterHints.enabled": false,
  "emmet.includeLanguages": {},
  "emmet.preferences": {},
  "emmet.triggerExpansionOnTab": true,
  "vim.insertModeKeyBindings": [
    {
      "before": ["h", "h"],
      "after": ["<Esc>"]
    }
  ]
}
```
3. Add this code to keybindings.json
```js
  {
    "key": "tab",
    "command": "extension.multiCommand.execute",
    "args": {
      "sequence": [
        "toggleVim",
        "tabnine.tab-override",
        "toggleVim",
        "extension.vim_insert"
      ],
      "interval": 50
    },
    "when": "vim.active && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && tabnine.tab-override && textInputFocus"
  },
  {
    "key": "tab",
    "command": "-tabnine.tab-override",
    "when": "vim.active && suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && tabnine.tab-override && textInputFocus"
  },
  {
    "key": "shift+tab",
    "command": "outdent",
    "when": "editorTextFocus && !editorReadonly  && !editorTabMovesFocus"
  },
  ,
  {
    "key": "ctrl+alt+m",
    "command": "toggleVim",
    "when": "editorTextFocus"
  }
```