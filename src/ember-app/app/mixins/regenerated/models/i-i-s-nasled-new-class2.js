import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('NewClass2E', 'i-i-s-nasled-new-class2', {
    
  });

  modelClass.defineProjection('NewClass2L', 'i-i-s-nasled-new-class2', {
    
  });
};
