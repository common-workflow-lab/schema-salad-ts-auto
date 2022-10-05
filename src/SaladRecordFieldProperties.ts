
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#SaladRecordField
 *
 * A field of a record.
 */
export interface SaladRecordFieldProperties extends Internal.RecordFieldProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The name of the field
   * 
   */
  name: string

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * The field type
   * 
   */
  type: Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | string | Array<Internal.PrimitiveType | Internal.RecordSchema | Internal.EnumSchema | Internal.ArraySchema | string>

  /**
   * Annotate this type with linked data context.
   * 
   */
  jsonldPredicate?: undefined | string | Internal.JsonldPredicate

  /**
   * The default value to use for this field if the field is missing or "null".
   * 
   */
  default_?: undefined | any
}