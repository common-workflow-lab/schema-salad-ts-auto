
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#SchemaDefinedType
 *
 * Abstract base for schema-defined types.
 * 
 */
export interface SchemaDefinedTypeProperties extends Internal.DocTypeProperties {
                    
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
}