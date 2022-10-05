
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#Documentation
 *
 * A documentation section.  This type exists to facilitate self-documenting
 * schemas but has no role in formal validation.
 * 
 */
export interface DocumentationProperties extends Internal.NamedTypeProperties, Internal.DocTypeProperties {
                    
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
   * Must be `documentation`
   */
  type: Internal.enum_056429f0e9355680bd9b2411dc96a69c7ff2e76b
}