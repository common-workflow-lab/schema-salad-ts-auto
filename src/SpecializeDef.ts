
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
 * Auto-generated class implementation for https://w3id.org/cwl/salad#SpecializeDef
 */
export class SpecializeDef extends Saveable implements Internal.SpecializeDefProperties {
  extensionFields?: Internal.Dictionary<any>

  /**
   * The data type to be replaced
   */
  specializeFrom: string

  /**
   * The new data type to replace with
   */
  specializeTo: string


  constructor ({loadingOptions, extensionFields, specializeFrom, specializeTo} : {loadingOptions?: LoadingOptions} & Internal.SpecializeDefProperties) {
    super(loadingOptions)
    this.extensionFields = extensionFields ?? {}
    this.specializeFrom = specializeFrom
    this.specializeTo = specializeTo
  }

  /**
   * Used to construct instances of {@link SpecializeDef }.
   *
   * @param __doc                           Document fragment to load this record object from.
   * @param baseuri                         Base URI to generate child document IDs against.
   * @param loadingOptions                  Context for loading URIs and populating objects.
   * @param docRoot                         ID at this position in the document (if available)
   * @returns                               An instance of {@link SpecializeDef }
   * @throws {@link ValidationException}    If the document fragment is not a
   *                                        {@link Dictionary} or validation of fields fails.
   */
  static override async fromDoc (__doc: any, baseuri: string, loadingOptions: LoadingOptions,
    docRoot?: string): Promise<Saveable> {
    const _doc = Object.assign({}, __doc)
    const __errors: ValidationException[] = []
            
    let specializeFrom
    try {
      specializeFrom = await loadField(_doc.specializeFrom, LoaderInstances.uristrtypeFalseFalse1,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `specializeFrom` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    let specializeTo
    try {
      specializeTo = await loadField(_doc.specializeTo, LoaderInstances.uristrtypeFalseFalse1,
        baseuri, loadingOptions)
    } catch (e) {
      if (e instanceof ValidationException) {
        __errors.push(
          new ValidationException('the `specializeTo` field is not valid because: ', [e])
        )
      } else {
        throw e
      }
    }

    const extensionFields: Dictionary<any> = {}
    for (const [key, value] of Object.entries(_doc)) {
      if (!SpecializeDef.attr.has(key)) {
        if ((key as string).includes(':')) {
          const ex = expandUrl(key, '', loadingOptions, false, false)
          extensionFields[ex] = value
        } else {
          __errors.push(
            new ValidationException(`invalid field ${key as string}, \
            expected one of: \`specializeFrom\`,\`specializeTo\``)
          )
          break
        }
      }
    }

    if (__errors.length > 0) {
      throw new ValidationException("Trying 'SpecializeDef'", __errors)
    }

    const schema = new SpecializeDef({
      extensionFields: extensionFields,
      loadingOptions: loadingOptions,
      specializeFrom: specializeFrom,
      specializeTo: specializeTo
    })
    return schema
  }
        
  save (top: boolean = false, baseUrl: string = '', relativeUris: boolean = true)
  : Dictionary<any> {
    const r: Dictionary<any> = {}
    for (const ef in this.extensionFields) {
      r[prefixUrl(ef, this.loadingOptions.vocab)] = this.extensionFields.ef
    }

    if (this.specializeFrom != null) {
      const u = saveRelativeUri(this.specializeFrom, baseUrl, false,
                                relativeUris, 1)
      if (u != null) {
        r.specializeFrom = u
      }
    }
                
    if (this.specializeTo != null) {
      const u = saveRelativeUri(this.specializeTo, baseUrl, false,
                                relativeUris, 1)
      if (u != null) {
        r.specializeTo = u
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
            
  static attr: Set<string> = new Set(['specializeFrom','specializeTo'])
}
