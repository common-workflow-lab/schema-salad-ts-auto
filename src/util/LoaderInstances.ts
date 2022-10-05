import {
  _AnyLoader,
  _ExpressionLoader,
  _PrimitiveLoader,
  _UnionLoader,
  _RecordLoader,
  _URILoader,
  _ArrayLoader,
  _EnumLoader,
  _IdMapLoader,
  _TypeDSLLoader,
  _SecondaryDSLLoader,
  TypeGuards,
  Any,
  ArraySchema,
  ArraySchemaProperties,
  DocTypeProperties,
  Documentation,
  DocumentationProperties,
  DocumentedProperties,
  EnumSchema,
  EnumSchemaProperties,
  JsonldPredicate,
  JsonldPredicateProperties,
  NamedTypeProperties,
  PrimitiveType,
  RecordField,
  RecordFieldProperties,
  RecordSchema,
  RecordSchemaProperties,
  SaladEnumSchema,
  SaladEnumSchemaProperties,
  SaladRecordField,
  SaladRecordFieldProperties,
  SaladRecordSchema,
  SaladRecordSchemaProperties,
  SchemaDefinedTypeProperties,
  SpecializeDef,
  SpecializeDefProperties,
  enum_056429f0e9355680bd9b2411dc96a69c7ff2e76b,
  enum_d062602be0b4b8fd33e69e29a841317b6ab665bc,
  enum_d961d79c225752b9fadb617367615ab176b47d77,
  enum_d9cba076fca539106791a4f46d198c7fcfbdb779
} from './Internal'

export const strtype = new _PrimitiveLoader(TypeGuards.String);
export const inttype = new _PrimitiveLoader(TypeGuards.Int);
export const floattype = new _PrimitiveLoader(TypeGuards.Float);
export const booltype = new _PrimitiveLoader(TypeGuards.Bool);
export const undefinedtype = new _PrimitiveLoader(TypeGuards.Undefined);
export const anyType = new _AnyLoader();
export const PrimitiveTypeLoader = new _EnumLoader((Object.keys(PrimitiveType) as Array<keyof typeof PrimitiveType>).map(key => PrimitiveType[key]));
export const AnyLoader = new _EnumLoader((Object.keys(Any) as Array<keyof typeof Any>).map(key => Any[key]));
export const RecordFieldLoader = new _RecordLoader(RecordField.fromDoc);
export const RecordSchemaLoader = new _RecordLoader(RecordSchema.fromDoc);
export const EnumSchemaLoader = new _RecordLoader(EnumSchema.fromDoc);
export const ArraySchemaLoader = new _RecordLoader(ArraySchema.fromDoc);
export const JsonldPredicateLoader = new _RecordLoader(JsonldPredicate.fromDoc);
export const SpecializeDefLoader = new _RecordLoader(SpecializeDef.fromDoc);
export const SaladRecordFieldLoader = new _RecordLoader(SaladRecordField.fromDoc);
export const SaladRecordSchemaLoader = new _RecordLoader(SaladRecordSchema.fromDoc);
export const SaladEnumSchemaLoader = new _RecordLoader(SaladEnumSchema.fromDoc);
export const DocumentationLoader = new _RecordLoader(Documentation.fromDoc);
export const arrayOfstrtype = new _ArrayLoader([strtype]);
export const unionOfundefinedtypeOrstrtypeOrarrayOfstrtype = new _UnionLoader([undefinedtype, strtype, arrayOfstrtype]);
export const uristrtypeTrueFalseNone = new _URILoader(strtype, true, false, undefined);
export const unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype = new _UnionLoader([PrimitiveTypeLoader, RecordSchemaLoader, EnumSchemaLoader, ArraySchemaLoader, strtype]);
export const arrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype = new _ArrayLoader([unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype]);
export const unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype = new _UnionLoader([PrimitiveTypeLoader, RecordSchemaLoader, EnumSchemaLoader, ArraySchemaLoader, strtype, arrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype]);
export const typedslunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype2 = new _TypeDSLLoader(unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype, 2);
export const arrayOfRecordFieldLoader = new _ArrayLoader([RecordFieldLoader]);
export const unionOfundefinedtypeOrarrayOfRecordFieldLoader = new _UnionLoader([undefinedtype, arrayOfRecordFieldLoader]);
export const idmapfieldsunionOfundefinedtypeOrarrayOfRecordFieldLoader = new _IdMapLoader(unionOfundefinedtypeOrarrayOfRecordFieldLoader, 'name', 'type');
export const enum_d9cba076fca539106791a4f46d198c7fcfbdb779Loader = new _EnumLoader((Object.keys(enum_d9cba076fca539106791a4f46d198c7fcfbdb779) as Array<keyof typeof enum_d9cba076fca539106791a4f46d198c7fcfbdb779>).map(key => enum_d9cba076fca539106791a4f46d198c7fcfbdb779[key]));
export const typedslenum_d9cba076fca539106791a4f46d198c7fcfbdb779Loader2 = new _TypeDSLLoader(enum_d9cba076fca539106791a4f46d198c7fcfbdb779Loader, 2);
export const uriarrayOfstrtypeTrueFalseNone = new _URILoader(arrayOfstrtype, true, false, undefined);
export const enum_d961d79c225752b9fadb617367615ab176b47d77Loader = new _EnumLoader((Object.keys(enum_d961d79c225752b9fadb617367615ab176b47d77) as Array<keyof typeof enum_d961d79c225752b9fadb617367615ab176b47d77>).map(key => enum_d961d79c225752b9fadb617367615ab176b47d77[key]));
export const typedslenum_d961d79c225752b9fadb617367615ab176b47d77Loader2 = new _TypeDSLLoader(enum_d961d79c225752b9fadb617367615ab176b47d77Loader, 2);
export const uriunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeFalseTrue2 = new _URILoader(unionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtypeOrarrayOfunionOfPrimitiveTypeLoaderOrRecordSchemaLoaderOrEnumSchemaLoaderOrArraySchemaLoaderOrstrtype, false, true, 2);
export const enum_d062602be0b4b8fd33e69e29a841317b6ab665bcLoader = new _EnumLoader((Object.keys(enum_d062602be0b4b8fd33e69e29a841317b6ab665bc) as Array<keyof typeof enum_d062602be0b4b8fd33e69e29a841317b6ab665bc>).map(key => enum_d062602be0b4b8fd33e69e29a841317b6ab665bc[key]));
export const typedslenum_d062602be0b4b8fd33e69e29a841317b6ab665bcLoader2 = new _TypeDSLLoader(enum_d062602be0b4b8fd33e69e29a841317b6ab665bcLoader, 2);
export const unionOfundefinedtypeOrstrtype = new _UnionLoader([undefinedtype, strtype]);
export const uriunionOfundefinedtypeOrstrtypeTrueFalseNone = new _URILoader(unionOfundefinedtypeOrstrtype, true, false, undefined);
export const unionOfundefinedtypeOrbooltype = new _UnionLoader([undefinedtype, booltype]);
export const unionOfundefinedtypeOrinttype = new _UnionLoader([undefinedtype, inttype]);
export const uristrtypeFalseFalse1 = new _URILoader(strtype, false, false, 1);
export const uriunionOfundefinedtypeOrstrtypeFalseFalseNone = new _URILoader(unionOfundefinedtypeOrstrtype, false, false, undefined);
export const uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalseNone = new _URILoader(unionOfundefinedtypeOrstrtypeOrarrayOfstrtype, false, false, undefined);
export const unionOfundefinedtypeOrstrtypeOrJsonldPredicateLoader = new _UnionLoader([undefinedtype, strtype, JsonldPredicateLoader]);
export const unionOfundefinedtypeOranyType = new _UnionLoader([undefinedtype, anyType]);
export const arrayOfSaladRecordFieldLoader = new _ArrayLoader([SaladRecordFieldLoader]);
export const unionOfundefinedtypeOrarrayOfSaladRecordFieldLoader = new _UnionLoader([undefinedtype, arrayOfSaladRecordFieldLoader]);
export const idmapfieldsunionOfundefinedtypeOrarrayOfSaladRecordFieldLoader = new _IdMapLoader(unionOfundefinedtypeOrarrayOfSaladRecordFieldLoader, 'name', 'type');
export const uriunionOfundefinedtypeOrstrtypeOrarrayOfstrtypeFalseFalse1 = new _URILoader(unionOfundefinedtypeOrstrtypeOrarrayOfstrtype, false, false, 1);
export const arrayOfSpecializeDefLoader = new _ArrayLoader([SpecializeDefLoader]);
export const unionOfundefinedtypeOrarrayOfSpecializeDefLoader = new _UnionLoader([undefinedtype, arrayOfSpecializeDefLoader]);
export const idmapspecializeunionOfundefinedtypeOrarrayOfSpecializeDefLoader = new _IdMapLoader(unionOfundefinedtypeOrarrayOfSpecializeDefLoader, 'specializeFrom', 'specializeTo');
export const enum_056429f0e9355680bd9b2411dc96a69c7ff2e76bLoader = new _EnumLoader((Object.keys(enum_056429f0e9355680bd9b2411dc96a69c7ff2e76b) as Array<keyof typeof enum_056429f0e9355680bd9b2411dc96a69c7ff2e76b>).map(key => enum_056429f0e9355680bd9b2411dc96a69c7ff2e76b[key]));
export const typedslenum_056429f0e9355680bd9b2411dc96a69c7ff2e76bLoader2 = new _TypeDSLLoader(enum_056429f0e9355680bd9b2411dc96a69c7ff2e76bLoader, 2);
export const unionOfSaladRecordSchemaLoaderOrSaladEnumSchemaLoaderOrDocumentationLoader = new _UnionLoader([SaladRecordSchemaLoader, SaladEnumSchemaLoader, DocumentationLoader]);
export const arrayOfunionOfSaladRecordSchemaLoaderOrSaladEnumSchemaLoaderOrDocumentationLoader = new _ArrayLoader([unionOfSaladRecordSchemaLoaderOrSaladEnumSchemaLoaderOrDocumentationLoader]);
export const unionOfSaladRecordSchemaLoaderOrSaladEnumSchemaLoaderOrDocumentationLoaderOrarrayOfunionOfSaladRecordSchemaLoaderOrSaladEnumSchemaLoaderOrDocumentationLoader = new _UnionLoader([SaladRecordSchemaLoader, SaladEnumSchemaLoader, DocumentationLoader, arrayOfunionOfSaladRecordSchemaLoaderOrSaladEnumSchemaLoaderOrDocumentationLoader]);
