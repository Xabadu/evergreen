module.exports = [
  'evergreen-colors',
  'evergreen-color-utils',
  'evergreen-shared-styles',
  'evergreen-typography',
  'evergreen-layers',
  'evergreen-buttons',
  'evergreen-icons',
  'evergreen-autocomplete',
  'evergreen-combobox',
  'evergreen-badges',
  'evergreen-select',
  'evergreen-popover',
  'evergreen-portal',
  'evergreen-text-input',
  'evergreen-textarea',
  'evergreen-checkbox',
  'evergreen-tabs',
  'evergreen-avatar',
  'evergreen-tooltip',
  'evergreen-image',
  'evergreen-segmented-control',
  'evergreen-spinner',
  'evergreen-search-input',
  'evergreen-table',
  'evergreen-side-sheet',
  'evergreen-radio',
  'evergreen-dialog',
  'evergreen-corner-dialog',
  'evergreen-alert'
].map(x => ({
  name: x.substring('evergreen-'.length),
  packageName: x
}))
