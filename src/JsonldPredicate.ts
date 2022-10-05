
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
 * Auto-generated class implementation for https://w3id.org/cwl/salad#JsonldPredicate
 *
 * Attached to a record field to define how the parent record field is handled for
 * URI resolution and JSON-LD context generation.
 * 
 */
export class JsonldPredicate extends Saveable implements Internal.JsonldPredicateProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The predicate URI that this field corresponds to.
   * Corresponds to JSON-LD `@id` directive.
   * 
   */
  _id?: undefined | string

  /**
   * The context type hint, corresponds to JSON-LD `@type` directive.
   * 
   * * If the value of this field is `@id` and `identity` is false or
   * unspecified, the parent field must be resolved using the link
   * resolution rules.  If `identity` is true, the parent field must be
   * resolved using the identifier expansion rules.
   * 
   * * If the value of this field is `@vocab`, the parent field must be
   *   resolved using the vocabulary resolution rules.
   * 
   */
  _type?: undefined | string

  /**
   * Structure hint, corresponds to JSON-LD `@container` directive.
   * 
   */
  _container?: undefined | string

  /**
   * If true and `_type` is `@id` this indicates that the parent field must
   * be resolved according to identity resolution rules instead of link
   * resolution rules.  In addition, the field value is considered an
   * assertion that the linked value exists; absence of an object in the loaded document
   * with the URI is not an error.
   * 
   */
  identity?: undefined | boolean

  /**
   * If true, this indicates that link validation traversal must stop at
   * this field.  This field (it is is a URI) or any fields under it (if it
   * is an object or array) are not subject to link checking.
   * 
   */
  noLinkCheck?: undefined | boolean

  /**
   * If the value of the field is a JSON object, it must be transformed
   * into an array of JSON objects, where each key-value pair from the
   * source JSON object is a list item, the list items must be JSON objects,
   * and the key is assigned to the field specified by `mapSubject`.
   * 
   */
  mapSubject?: undefined | string

  /**
   * Only applies if `mapSubject` is also provided.  If the value of the
   * field is a JSON object, it is transformed as described in `mapSubject`,
   * with the addition that when the value of a map item is not an object,
   * the item is transformed to a JSON object with the key assigned to the
   * field specified by `mapSubject` and the value assigned to the field
   * specified by `mapPredicate`.
   * 
   */
  mapPredicate?: undefined | string

  /**
   * If the field contains a relative reference, it must be resolved by
   * searching for valid document references in each successive parent scope
   * in the document fragment.  For example, a reference of `foo` in the
   * context `#foo/bar/baz` will first check for the existence of
   * `#foo/bar/baz/foo`, followed by `#foo/bar/foo`, then `#foo/foo` and
   * then finally `#foo`.  The first valid URI in the search order shall be
   * used as the fully resolved value of the identifier.  The value of the
   * refScope field is the specified number of levels from the containing
   * identifier scope before starting the search, so if `refScope: 2` then
   * "baz" and "bar" must be stripped to get the base `#foo` and search
   * `#foo/foo` and the `#foo`.  The last scope searched must be the top
   * level scope before determining if the identifier cannot be resolved.
   * 
   */
  refScope?: undefined | number

  /**
   * Field must be expanded based on the the Schema Salad type DSL.
   * 
   */
  typeDSL?: undefined | boolean

  /**
   * Field must be expanded based on the the Schema Salad secondary file DSL.
   * 
   */
  secondaryFilesDSL?: undefined | boolean

  /**
   * Append the subscope to the current scope when performing
   * identifier resolution to objects under this field.
   * 
   */
  subscope?: undefined | string


  constructor ({loadingOptions, extensionFields, _id, _type, _container, identity, noLinkCheck, mapSubject, mapPredicate, refScope, typeDSL, secondaryFilesDSL, subscope} : {loadingOptions?: LoadingOptions} & Internal.JsonldPredicateProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this._id = _id
    this._type = _type
    this._container = _container
    this.identity = identity
    this.noLinkCheck = noLinkCheck
    this.mapSubject = mapSubject
    this.mapPredicate = mapPredicate
    this.refScope = refScope
    this.typeDSL = typeDSL
    this.secondaryFilesDSL = secondaryFilesDSL
    this.subscope = subscope
  }

  /**
   * Used to construct instances of {@link JsonldPredicate }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link JsonldPredicate }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let _id
    if ('_id' in _doc) {
      try {
        _id = await loadField(_doc._id, LoaderInstances.uriunionOfundefinedtypeOrstrtypeTrueFalseNone,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `_id` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let _type
    if ('_type' in _doc) {
      try {
        _type = await loadField(_doc._type, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `_type` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let _container
    if ('_container' in _doc) {
      try {
        _container = await loadField(_doc._container, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `_container` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let identity
    if ('identity' in _doc) {
      try {
        identity = await loadField(_doc.identity, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `identity` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let noLinkCheck
    if ('noLinkCheck' in _doc) {
      try {
        noLinkCheck = await loadField(_doc.noLinkCheck, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `noLinkCheck` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let mapSubject
    if ('mapSubject' in _doc) {
      try {
        mapSubject = await loadField(_doc.mapSubject, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `mapSubject` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let mapPredicate
    if ('mapPredicate' in _doc) {
      try {
        mapPredicate = await loadField(_doc.mapPredicate, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `mapPredicate` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let refScope
    if ('refScope' in _doc) {
      try {
        refScope = await loadField(_doc.refScope, LoaderInstances.unionOfundefinedtypeOrinttype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `refScope` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let typeDSL
    if ('typeDSL' in _doc) {
      try {
        typeDSL = await loadField(_doc.typeDSL, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `typeDSL` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let secondaryFilesDSL
    if ('secondaryFilesDSL' in _doc) {
      try {
        secondaryFilesDSL = await loadField(_doc.secondaryFilesDSL, LoaderInstances.unionOfundefinedtypeOrbooltype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `secondaryFilesDSL` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    let subscope
    if ('subscope' in _doc) {
      try {
        subscope = await loadField(_doc.subscope, LoaderInstances.unionOfundefinedtypeOrstrtype,
          baseuri, loadingOptions)
      } catch (e) {
        if (e instanceof ValidationException) {
          __errors.push(
            new ValidationException('the `subscope` field is not valid because: ', [e])
          )
        } else {
          throw e
        }
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!JsonldPredicate.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`_id\`,\`_type\`,\`_container\`,\`identity\`,\`noLinkCheck\`,\`mapSubject\`,\`mapPredicate\`,\`refScope\`,\`typeDSL\`,\`secondaryFilesDSL\`,\`subscope\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'JsonldPredicate'", __errors)
    }

    const schema = new JsonldPredicate({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      _id: _id,
      _type: _type,
      _container: _container,
      identity: identity,
      noLinkCheck: noLinkCheck,
      mapSubject: mapSubject,
      mapPredicate: mapPredicate,
      refScope: refScope,
      typeDSL: typeDSL,
      secondaryFilesDSL: secondaryFilesDSL,
      subscope: subscope
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this._id != null) {
      const u = saveRelativeUri(this._id, baseUrl, true,
                                relativeUris, undefined)
      if (u != null) {
        r._id = u
      }
    }
                
    if (this._type != null) {
      r._type = save(this._type, false, baseUrl, relativeUris)
    }
                
    if (this._container != null) {
      r._container = save(this._container, false, baseUrl, relativeUris)
    }
                
    if (this.identity != null) {
      r.identity = save(this.identity, false, baseUrl, relativeUris)
    }
                
    if (this.noLinkCheck != null) {
      r.noLinkCheck = save(this.noLinkCheck, false, baseUrl, relativeUris)
    }
                
    if (this.mapSubject != null) {
      r.mapSubject = save(this.mapSubject, false, baseUrl, relativeUris)
    }
                
    if (this.mapPredicate != null) {
      r.mapPredicate = save(this.mapPredicate, false, baseUrl, relativeUris)
    }
                
    if (this.refScope != null) {
      r.refScope = save(this.refScope, false, baseUrl, relativeUris)
    }
                
    if (this.typeDSL != null) {
      r.typeDSL = save(this.typeDSL, false, baseUrl, relativeUris)
    }
                
    if (this.secondaryFilesDSL != null) {
      r.secondaryFilesDSL = save(this.secondaryFilesDSL, false, baseUrl, relativeUris)
    }
                
    if (this.subscope != null) {
      r.subscope = save(this.subscope, false, baseUrl, relativeUris)
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
            
  static attr: Set<string> = new Set(['_id','_type','_container','identity','noLinkCheck','mapSubject','mapPredicate','refScope','typeDSL','secondaryFilesDSL','subscope'])
}
