import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  defineProjections,
  ValidationRules,
  Model as NewClass1Mixin
} from '../mixins/regenerated/models/i-i-s-nasled-new-class1';

import NewClass2Model from './i-i-s-nasled-new-class2';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-nasled-new-class2';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = NewClass2Model.extend(NewClass1Mixin, Validations, {
});

defineBaseModel(Model);
defineProjections(Model);

export default Model;
