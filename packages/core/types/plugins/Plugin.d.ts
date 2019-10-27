import { PluginType } from "./PluginTypes";

export class Plugin {
    name: string;
    type: PluginType;

    static placeholder(): Plugin;
    static fromJson(json: Object): Plugin;

    isSignatureProvider(): boolean;
    isValid(): boolean;
}