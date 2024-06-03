import {client} from '../../app/lib/sanity.js'

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
    {
      name: 'subcategory',
      title: 'Product Sub-Category',
      type: 'reference',
      to: {type: 'subcategory'},
      options: {
        filter: ({document}: {document: any}) => {
          if (!document.category) {
            return {
              filter: '',
              params: {},
            }
          }
          return {
            filter: 'category._ref == $categoryId',
            params: {
              categoryId: document.category._ref,
            },
          }
        },
      },
    },
  ],
}
