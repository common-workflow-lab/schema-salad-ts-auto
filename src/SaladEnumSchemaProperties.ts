
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#SaladEnumSchema
 *
 * Define an enumerated type.
 * 
 */
export interface SaladEnumSchemaProperties extends Internal.NamedTypeProperties, Internal.EnumSchemaProperties, Internal.SchemaDefinedTypeProperties {
                    
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
   * Defines the set of valid symbols.
   */
  symbols: Array<string>

  /**
   * Must be `enum`
   */
  type: Internal.enum_d961d79c225752b9fadb617367615ab176b47d77

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
   * Indicates that this enum inherits symbols from a base enum.
   * 
   */
  extends_?: undefined | string | Array<string>
}