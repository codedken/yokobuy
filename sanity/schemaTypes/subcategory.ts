export default {
  name: 'subcategory',
  type: 'document',
  title: 'Sub-Categories',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Subcategory',
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Main Category',
      to: [{type: 'category'}],
    },
  ],
}
