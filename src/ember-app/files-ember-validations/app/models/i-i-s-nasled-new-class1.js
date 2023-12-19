import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as NewClass1Mixin
} from '../mixins/regenerated/models/i-i-s-nasled-new-class1';

import NewClass2Model from './i-i-s-nasled-new-class2';

let Model = NewClass2Model.extend(NewClass1Mixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
