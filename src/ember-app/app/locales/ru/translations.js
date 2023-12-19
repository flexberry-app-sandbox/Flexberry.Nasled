import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Nasled',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Nasled',
          title: 'Nasled'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-nasled-new-class1-l': IISNasledNewClass1LForm,
    'i-i-s-nasled-new-class2-l': IISNasledNewClass2LForm,
    'i-i-s-nasled-new-class1-e': IISNasledNewClass1EForm,
    'i-i-s-nasled-new-class2-e': IISNasledNewClass2EForm
  },

});

export default translations;
