import { Serializer as NewClass1Serializer } from
  '../mixins/regenerated/serializers/i-i-s-nasled-new-class1';
import NewClass2Serializer from './i-i-s-nasled-new-class2';

export default NewClass2Serializer.extend(NewClass1Serializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
