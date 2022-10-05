
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
 * Auto-generated class implementation for https://w3id.org/cwl/salad#SaladRecordSchema
 */
export class SaladRecordSchema extends Saveable implements Internal.SaladRecordSchemaProperties {
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


  constructor ({loadingOptions, extensionFields, name, inVocab, fields, type, doc, docParent, docChild, docAfter, jsonldPredicate, documentRoot, abstract_, extends_, specialize} : {loadingOptions?: LoadingOptions} & Internal.SaladRecordSchemaProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.name = name
    this.inVocab = inVocab
    this.fields = fields
    this.type = type
    this.doc = doc
    this.docParent = docParent
    this.docChild = docChild
    this.docAfter = docAfter
    this.jsonldPredicate = jsonldPredicate
    this.documentRoot = documentRoot
    this.abstract_ = abstract_
    this.extends_ = extends_
    this.specialize = specialize
  }

  /**
   * Used to construct instances of {@link SaladRecordSchema }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link SaladRecordSchema }
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

    let fields
    if ('fields' in _doc) {
      try {
        fields = await loadField(_doc.fields, LoaderInstances.idmapfieldsunionOfundefinedtypeOrarrayOfSaladRecordFieldLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `fields` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let type
    try {
      type = await loadField(_doc.type, LoaderInstances.typedslenum_d9cba076fca539106791a4f46d198c7fcfbdb779Loader2,
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

    let abstract_
    if ('abstract' in _doc) {
      try {
        abstract_ = await loadField(_doc.abstract, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `abstract` field is not valid because: ', [e])
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

    let specialize
    if ('specialize' in _doc) {
      try {
        specialize = await loadField(_doc.specialize, LoaderInstances.idmapspecializeunionOfundefinedtypeOrarrayOfSpecializeDefLoader,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `specialize` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!SaladRecordSchema.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`name\`,\`inVocab\`,\`fields\`,\`type\`,\`doc\`,\`docParent\`,\`docChild\`,\`docAfter\`,\`jsonldPredicate\`,\`documentRoot\`,\`abstract\`,\`extends\`,\`specialize\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'SaladRecordSchema'", __errors)
    }

    const schema = new SaladRecordSchema({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      name: name,
      inVocab: inVocab,
      fields: fields,
      type: type,
      doc: doc,
      docParent: docParent,
      docChild: docChild,
      docAfter: docAfter,
      jsonldPredicate: jsonldPredicate,
      documentRoot: documentRoot,
      abstract_: abstract_,
      extends_: extends_,
      specialize: specialize
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
                
    if (this.fields != null) {
      r.fields = save(this.fields, false, this.name, relativeUris)
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
                
    if (this.abstract_ != null) {
      r.abstract = save(this.abstract_, false, this.name, relativeUris)
    }
                
    if (this.extends_ != null) {
      const u = saveRelativeUri(this.extends_, this.name, false,
                                relativeUris, 1)
      if (u != null) {
        r.extends = u
      }
    }
                
    if (this.specialize != null) {
      r.specialize = save(this.specialize, false, this.name, relativeUris)
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
            
  static attr: Set<string> = new Set(['name','inVocab','fields','type','doc','docParent','docChild','docAfter','jsonldPredicate','documentRoot','abstract','extends','specialize'])
}
