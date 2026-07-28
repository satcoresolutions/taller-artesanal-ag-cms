import type { Schema, Struct } from '@strapi/strapi';

export interface SharedContentSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_content_sections';
  info: {
    displayName: 'Content Section';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    icon: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    items: Schema.Attribute.JSON;
    order: Schema.Attribute.Integer;
    paragraphs: Schema.Attribute.JSON;
    steps: Schema.Attribute.JSON;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'list', 'steps']> &
      Schema.Attribute.Required;
  };
}

export interface SharedProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_variants';
  info: {
    displayName: 'Product Variant';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sortOrder: Schema.Attribute.Integer;
    stock: Schema.Attribute.Integer & Schema.Attribute.Required;
    variant: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedProperty extends Struct.ComponentSchema {
  collectionName: 'components_shared_properties';
  info: {
    displayName: 'Property';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    canonicalUrl: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ogTitle: Schema.Attribute.String;
    robots: Schema.Attribute.Enumeration<
      ['index,follow', 'index,nofollow', 'noindex,follow', 'noindex,nofollow']
    > &
      Schema.Attribute.DefaultTo<'index,follow'>;
    structuredData: Schema.Attribute.JSON;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    > &
      Schema.Attribute.DefaultTo<'summary_large_image'>;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'shared.content-section': SharedContentSection;
      'shared.product-variant': SharedProductVariant;
      'shared.property': SharedProperty;
      'shared.seo': SharedSeo;
    }
  }
}
