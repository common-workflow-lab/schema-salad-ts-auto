
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#SaladRecordSchema
 */
export interface SaladRecordSchemaProperties extends Internal.NamedTypeProperties, Internal.RecordSchemaProperties, Internal.SchemaDefinedTypeProperties {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The identifier for this type
   */
  name: string

  /**
   * If "true" (the default), include the short name of this type
   * in the vocabulary.  The vocabulary are all the symbols (field
   * names and other identifiers, such as classes and enum values)
   * which can be used in the document without a namespace prefix.
   * These are the keys of the JSON-LD context.  If false, do not
   * include the short name in the vocabulary.
   * 
   * This is useful for specifying schema extensions that will be
   * included in validation without introducing ambiguity by
   * introducing non-standard terms into the vocabulary.
   * 
   */
  inVocab?: undefined | boolean

  /**
   * Defines the fields of the record.
   */
  fields?: undefined | Array<Internal.SaladRecordField>

  /**
   * Must be `record`
   */
  type: Internal.enum_d9cba076fca539106791a4f46d198c7fcfbdb779

  /**
   * A documentation string for this object, or an array of strings which should be concatenated.
   */
  doc?: undefined | string | Array<string>

  /**
   * Hint to indicate that during documentation generation, documentation
   * for this type should appear in a subsection under `docParent`.
   * 
   */
  docParent?: undefined | string

  /**
   * Hint to indicate that during documentation generation, documentation
   * for `docChild` should appear in a subsection under this type.
   * 
   */
  docChild?: undefined | string | Array<string>

  /**
   * Hint to indicate that during documentation generation, documentation
   * for this type should appear after the `docAfter` section at the same
   * level.
   * 
   */
  docAfter?: undefined | string

  /**
   * Annotate this type with linked data context.
   * 
   */
  jsonldPredicate?: undefined | string | Internal.JsonldPredicate

  /**
   * If true, indicates that the type is a valid at the document root.  At
   * least one type in a schema must be tagged with `documentRoot: true`.
   * 
   */
  documentRoot?: undefined | boolean

  /**
   * If true, this record is abstract and may be used as a base for other
   * records, but is not valid on its own. Inherited fields may be
   * re-specified to narrow their type.
   * 
   */
  abstract_?: undefined | boolean

  /**
   * Indicates that this record inherits fields from one or more base records.
   * Inherited fields may be re-specified to narrow their type.
   * 
   */
  extends_?: undefined | string | Array<string>

  /**
   * Only applies if `extends` is declared.  Apply type specialization using the
   * base record as a template.  For each field inherited from the base
   * record, replace any instance of the type `specializeFrom` with
   * `specializeTo`.
   * 
   */
  specialize?: undefined | Array<Internal.SpecializeDef>
}