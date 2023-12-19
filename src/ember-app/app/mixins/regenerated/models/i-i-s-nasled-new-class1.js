import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  код: DS.attr('number'),
  строка: DS.attr('string')
});

export let ValidationRules = {
  код: {
    descriptionKey: 'models.i-i-s-nasled-new-class1.validations.код.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  строка: {
    descriptionKey: 'models.i-i-s-nasled-new-class1.validations.строка.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-nasled-new-class2'
  });
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass1E', 'i-i-s-nasled-new-class1', {
    код: attr('Код', { index: 0 }),
    строка: attr('Строка', { index: 1 })
  });

  modelClass.defineProjection('NewClass1L', 'i-i-s-nasled-new-class1', {
    код: attr('Код', { index: 0 }),
    строка: attr('Строка', { index: 1 })
  });
};
