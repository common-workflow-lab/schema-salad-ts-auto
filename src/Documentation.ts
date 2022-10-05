
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
 * Auto-generated class implementation for https://w3id.org/cwl/salad#Documentation
 *
 * A documentation section.  This type exists to facilitate self-documenting
 * schemas but has no role in formal validation.
 * 
 */
export class Documentation extends Saveable implements Internal.DocumentationProperties {
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


  constructor ({loadingOptions, extensionFields, name, inVocab, doc, docParent, docChild, docAfter, type} : {loadingOptions?: LoadingOptions} & Internal.DocumentationProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.name = name
    this.inVocab = inVocab
    this.doc = doc
    this.docParent = docParent
    this.docChild = docChild
    this.docAfter = docAfter
    this.type = type
  }

  /**
   * Used to construct instances of {@link Documentation }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link Documentation }
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

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslenum_056429f0e9355680bd9b2411dc96a69c7ff2e76bLoader2,
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

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!Documentation.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`name\`,\`inVocab\`,\`doc\`,\`docParent\`,\`docChild\`,\`docAfter\`,\`type\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'Documentation'", __errors)
    }

    const schema = new Documentation({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      name: name,
      inVocab: inVocab,
      doc: doc,
      docParent: docParent,
      docChild: docChild,
      docAfter: docAfter,
      type: type
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
                
    if (this.type != null) {
      r.type = save(this.type, false, this.name, relativeUris)
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
            
  static attr: Set<string> = new Set(['name','inVocab','doc','docParent','docChild','docAfter','type'])
}
