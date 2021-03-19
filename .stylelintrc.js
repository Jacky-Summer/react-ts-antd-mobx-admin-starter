module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'no-descending-specificity': null, // 禁止低优先级的选择器出现在高优先级的选择器之后
    'declaration-empty-line-before': 'never', // 要求或禁止在声明语句之前有空行
    'rule-empty-line-before': 'always', // 在 at 规则之前有空行
  },
}
