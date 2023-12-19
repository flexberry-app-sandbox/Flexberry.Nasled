import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISNasledNewClass1LForm from './forms/i-i-s-nasled-new-class1-l';
import IISNasledNewClass2LForm from './forms/i-i-s-nasled-new-class2-l';
import IISNasledNewClass1EForm from './forms/i-i-s-nasled-new-class1-e';
import IISNasledNewClass2EForm from './forms/i-i-s-nasled-new-class2-e';
import IISNasledNewClass1Model from './models/i-i-s-nasled-new-class1';
import IISNasledNewClass2Model from './models/i-i-s-nasled-new-class2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-nasled-new-class1': IISNasledNewClass1Model,
    'i-i-s-nasled-new-class2': IISNasledNewClass2Model
  },

  'application-name': 'Nasled',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Nasled',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Nasled',
          title: 'Nasled'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        nasled: {
          caption: 'Nasled',
          title: 'Nasled',
          'i-i-s-nasled-new-class1-l': {
            caption: 'New class1',
            title: ''
          },
          'i-i-s-nasled-new-class2-l': {
            caption: 'New class2',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-nasled-new-class1-l': IISNasledNewClass1LForm,
    'i-i-s-nasled-new-class2-l': IISNasledNewClass2LForm,
    'i-i-s-nasled-new-class1-e': IISNasledNewClass1EForm,
    'i-i-s-nasled-new-class2-e': IISNasledNewClass2EForm
  },

});

export default translations;
