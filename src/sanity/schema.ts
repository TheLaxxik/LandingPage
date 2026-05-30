export const schemaTypes = [
    // 1. Úvodná stránka (Hero)
    {
      name: 'hero',
      title: 'Úvodná stránka (Hero)',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Hlavný nadpis',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Podnadpis',
          type: 'text',
        },
        {
          name: 'ctaText',
          title: 'Text tlačidla',
          type: 'string',
        }
      ]
    },
    
    // 2. Služby
    {
      name: 'service',
      title: 'Služby',
      type: 'document',
      fields: [
        {
          name: 'title',
          title: 'Názov služby',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Popis služby',
          type: 'text',
        },
        {
          name: 'price',
          title: 'Cena',
          type: 'string',
        }
      ]
    }
  ];