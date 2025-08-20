/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-order',
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-recommended-vue',
    'stylelint-config-tailwindcss'
  ],
  rules: {
    "block-no-empty": true,
  }
};
