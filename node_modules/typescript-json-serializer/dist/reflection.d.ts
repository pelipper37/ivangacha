import 'reflect-metadata';
import { JsonObjectMetadata } from './json-object';
import { JsonPropertiesMetadata } from './json-property';
export declare class Reflection {
    static apiMap: string;
    static apiMapJsonObject: string;
    static designType: string;
    static designParamTypes: string;
    static getBaseClass(target: object): {
        name: string;
    } | undefined;
    static getJsonPropertiesMetadata(target: object, name?: string): JsonPropertiesMetadata | undefined;
    static getParamTypes(target: object): any | undefined;
    static getJsonObjectMetadata(type: object): JsonObjectMetadata | undefined;
    static getType(target: object, key: string): any | undefined;
    static isJsonObject(type: object): boolean;
    static setJsonPropertiesMetadata(value: JsonPropertiesMetadata, target: object): void;
    static setJsonObject(value: JsonObjectMetadata, target: object): void;
    static setType(type: any, target: object, key: string): void;
}
