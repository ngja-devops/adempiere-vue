const { notEmpty } = require('../../utils.js')

module.exports = {
  description: 'Generate ADempiere component.vue',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'ADempiere Component name: ',
    validate: notEmpty('name')
  },
  {
    type: 'checkbox',
    name: 'blocks',
    message: 'Blocks:',
    choices: [{
      name: '<template>',
      value: 'template',
      checked: true
    },
    {
      name: '<script>',
      value: 'script',
      checked: true
    },
    {
      name: 'style',
      value: 'style',
      checked: true
    }
    ],
    validate(value) {
      if (value.indexOf('script') === -1 && value.indexOf('template') === -1) {
        return 'Components require at least a <script> or <template> tag.'
      }
      return true
    }
  }
  ],
  actions: data => {
    const name = '{{properCase name}}'
    const actions = [{
      type: 'add',
      path: `src/components/ADempiere/${name}/index.vue`,
      templateFile: 'plop-templates/ADempiere/component/index.hbs',
      data: {
        name: name,
        template: data.blocks.includes('template'),
        script: data.blocks.includes('script'),
        style: data.blocks.includes('style')
      }
    }]

    return actions
  }
}
