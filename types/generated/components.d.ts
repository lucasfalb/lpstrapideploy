import type { Schema, Attribute } from '@strapi/strapi';

export interface PageCabecalho extends Schema.Component {
  collectionName: 'components_page_cabecalhos';
  info: {
    displayName: 'Header';
    icon: 'star';
    description: '';
  };
  attributes: {
    countdown: Attribute.Boolean;
    fixed: Attribute.Boolean;
  };
}

export interface PageCountdown extends Schema.Component {
  collectionName: 'components_page_countdowns';
  info: {
    displayName: 'Countdown';
    icon: 'star';
  };
  attributes: {
    start: Attribute.DateTime;
    end: Attribute.DateTime;
  };
}

export interface PageCustomerTestemonial extends Schema.Component {
  collectionName: 'components_page_customer_testemonials';
  info: {
    displayName: 'Customer Testemonial';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

export interface PageExitIntentPopup extends Schema.Component {
  collectionName: 'components_page_exit_intent_popups';
  info: {
    displayName: 'Exit Intent Popup';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

export interface PageFormulario extends Schema.Component {
  collectionName: 'components_page_formularios';
  info: {
    displayName: 'Form';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

export interface PageGaleriaDeCarros extends Schema.Component {
  collectionName: 'components_page_galeria_de_carros';
  info: {
    displayName: 'Cars Gallery';
    icon: 'star';
    description: '';
  };
  attributes: {
    segment_filter: Attribute.Boolean;
    show_modal: Attribute.Boolean;
    background: Attribute.Boolean;
  };
}

export interface PageHeroSectionWMultistep extends Schema.Component {
  collectionName: 'components_page_hero_section_w_multisteps';
  info: {
    displayName: 'HeroSection w/ Multistep';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    image_highlight: Attribute.Media;
  };
}

export interface PageHeroSection extends Schema.Component {
  collectionName: 'components_page_hero_sections';
  info: {
    displayName: 'HeroSection';
    icon: 'star';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    image_highlight: Attribute.Media;
  };
}

export interface PageMultistep extends Schema.Component {
  collectionName: 'components_page_multisteps';
  info: {
    displayName: 'Multistep';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

export interface PageOfferBox extends Schema.Component {
  collectionName: 'components_page_offer_boxes';
  info: {
    displayName: 'Offer Box';
    icon: 'star';
  };
  attributes: {
    title: Attribute.String;
    sub_title: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface PageRodape extends Schema.Component {
  collectionName: 'components_page_rodape';
  info: {
    displayName: 'Footer';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

export interface PageServiceBox extends Schema.Component {
  collectionName: 'components_page_service_boxes';
  info: {
    displayName: 'toDelete';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

export interface PageServiceCard extends Schema.Component {
  collectionName: 'components_page_service_cards';
  info: {
    displayName: 'ServiceCard';
    icon: 'star';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface PageServicesBox extends Schema.Component {
  collectionName: 'components_page_services_boxes';
  info: {
    displayName: 'Services Box';
    icon: 'star';
  };
  attributes: {
    service_card: Attribute.Component<'page.service-card', true>;
  };
}

export interface PageTrustpilot extends Schema.Component {
  collectionName: 'components_page_trustpilots';
  info: {
    displayName: 'Trustpilot';
    icon: 'star';
    description: '';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'page.cabecalho': PageCabecalho;
      'page.countdown': PageCountdown;
      'page.customer-testemonial': PageCustomerTestemonial;
      'page.exit-intent-popup': PageExitIntentPopup;
      'page.formulario': PageFormulario;
      'page.galeria-de-carros': PageGaleriaDeCarros;
      'page.hero-section-w-multistep': PageHeroSectionWMultistep;
      'page.hero-section': PageHeroSection;
      'page.multistep': PageMultistep;
      'page.offer-box': PageOfferBox;
      'page.rodape': PageRodape;
      'page.service-box': PageServiceBox;
      'page.service-card': PageServiceCard;
      'page.services-box': PageServicesBox;
      'page.trustpilot': PageTrustpilot;
    }
  }
}
