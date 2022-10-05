
import * as Internal from './util/Internal'


/**
 * Auto-generated interface for https://w3id.org/cwl/salad#SpecializeDef
 */
export interface SpecializeDefProperties  {
                    
  extensionFields?: Internal.Dictionary<any>

  /**
   * The data type to be replaced
   */
  specializeFrom: string

  /**
   * The new data type to replace with
   */
  specializeTo: string
}