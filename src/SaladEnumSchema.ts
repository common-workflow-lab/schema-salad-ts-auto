
import {
  Dictionary,
  expandUrl,
  loadField,
  LoaderInstances,
  LoadingOptions,
  Saveable,
  ValidationException,
  prefixUrl,
  save,
  saveRelativeUri
} from './util/Internal'
import { v4 as uuidv4 } from 'uuid'
import * as Internal from './util/Internal'


/**
 * Auto-generated class implementation for https://w3id.org/cwl/salad#SaladEnumSchema
 *
 * Define an enumerated type.
 * 
 */
export class SaladEnumSchema extends Saveable implements Internal.SaladEnumSchemaProperties {
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


  constructor ({loadingOptions, extensionFields, name, inVocab, symbols, type, doc, docParent, docChild, docAfter, jsonldPredicate, documentRoot, extends_} : {loadingOptions?: LoadingOptions} & Internal.SaladEnumSchemaProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.name = name
    this.inVocab = inVocab
    this.symbols = symbols
    this.type = type
    this.doc = doc
    this.docParent = docParent
    this.docChild = docChild
    this.docAfter = docAfter
    this.jsonldPredicate = jsonldPredicate
    this.documentRoot = documentRoot
    this.extends_ = extends_
  }

  /**
   * Used to construct instances of {@link SaladEnumSchema }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link SaladEnumSchema }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let name
    if ('name' in _doc) {
      try {
        name = await loadField(_doc.name, LoaderInstances.uristrtypeTrueFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `name` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const originalnameIsUndefined = (name === undefined)
    if (originalnameIsUndefined ) {
      if (docRoot != null) {
        name = docRoot
      } else {
        throw new ValidationException("Missing name")
      }
    } else {
      baseuri = name as string
    }
            
    let inVocab
    if ('inVocab' in _doc) {
      try {
        inVocab = await loadField(_doc.inVocab, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `inVocab` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let symbols
    try {
      symbols = await loadField(_doc.symbols, LoaderInstances.uriarrayOfstrtypeTrueFalseNone,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `symbols` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslenum_d961d79c225752b9fadb617367615ab176b47d77Loader2,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `type` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let doc
    if ('doc' in _doc) {
      try {
        doc = await loadField(_doc.doc, LoaderInstances.unionOfundefinedtypeOrstrtypeOrarrayOfstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `doc` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let docParent
    if ('docParent' in _doc) {
      try {
        docParent = await loadField(_doc.docParent, LoaderInstances.uriunionOfundefinedtypeOrstrtypeFalseFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `docParent` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let docChild
    if ('docChild' in _doc) {
      try {
        docChild = await loadField(_doc.docChild, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `docChild` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let docAfter
    if ('docAfter' in _doc) {
      try {
        docAfter = await loadField(_doc.docAfter, LoaderInstances.uriunionOfundefinedtypeOrstrtypeFalseFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `docAfter` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let jsonldPredicate
    if ('jsonldPredicate' in _doc) {
      try {
        jsonldPredicate = await loadField(_doc.jsonldPredicate, LoaderInstances.unionOfundefinedtypeOrstrtypeOrJsonldPredicateLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `jsonldPredicate` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let documentRoot
    if ('documentRoot' in _doc) {
      try {
        documentRoot = await loadField(_doc.documentRoot, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `documentRoot` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let extends_
    if ('extends' in _doc) {
      try {
        extends_ = await loadField(_doc.extends, LoaderInstances.uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse1,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `extends` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!SaladEnumSchema.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`name\`,\`inVocab\`,\`symbols\`,\`type\`,\`doc\`,\`docParent\`,\`docChild\`,\`docAfter\`,\`jsonldPredicate\`,\`documentRoot\`,\`extends\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'SaladEnumSchema'", __errors)
    }

    const schema = new SaladEnumSchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      name: name,
      inVocab: inVocab,
      symbols: symbols,
      type: type,
      doc: doc,
      docParent: docParent,
      docChild: docChild,
      docAfter: docAfter,
      jsonldPredicate: jsonldPredicate,
      documentRoot: documentRoot,
      extends_: extends_
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.name != null) {
      const u = saveRelativeUri(this.name, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r.name = u
      }
    }
                
    if (this.inVocab != null) {
      r.inVocab = save(this.inVocab, false, this.name, relativeUris)
    }
                
    if (this.symbols != null) {
      const u = saveRelativeUri(this.symbols, this.name, true,
                                relativeUris, undefined)
      if (u != null) {
        r.symbols = u
      }
    }
                
    if (this.type != null) {
      r.type = save(this.type, false, this.name, relativeUris)
    }
                
    if (this.doc != null) {
      r.doc = save(this.doc, false, this.name, relativeUris)
    }
                
    if (this.docParent != null) {
      const u = saveRelativeUri(this.docParent, this.name, false,
                                relativeUris, undefined)
      if (u != null) {
        r.docParent = u
      }
    }
                
    if (this.docChild != null) {
      const u = saveRelativeUri(this.docChild, this.name, false,
                                relativeUris, undefined)
      if (u != null) {
        r.docChild = u
      }
    }
                
    if (this.docAfter != null) {
      const u = saveRelativeUri(this.docAfter, this.name, false,
                                relativeUris, undefined)
      if (u != null) {
        r.docAfter = u
      }
    }
                
    if (this.jsonldPredicate != null) {
      r.jsonldPredicate = save(this.jsonldPredicate, false, this.name, relativeUris)
    }
                
    if (this.documentRoot != null) {
      r.documentRoot = save(this.documentRoot, false, this.name, relativeUris)
    }
                
    if (this.extends_ != null) {
      const u = saveRelativeUri(this.extends_, this.name, false,
                                relativeUris, 1)
      if (u != null) {
        r.extends = u
      }
    }
                
    if (top) {
      if (this.loadingOptions.namespaces != null) {
        r.$namespaces = this.loadingOptions.namespaces
      }
      if (this.loadingOptions.schemas != null) {
        r.$schemas = this.loadingOptions.schemas
      }
    }
    return r
  }
            
  static attr: Set<string> = new Set(['name','inVocab','symbols','type','doc','docParent','docChild','docAfter','jsonldPredicate','documentRoot','extends'])
}
