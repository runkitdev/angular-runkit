import 'core-js/fn/reflect';
import { EventEmitter } from '@angular/core';
export declare class RunKitEmbedComponent {
    embed: any;
    source: string;
    readOnly: boolean;
    mode: string;
    nodeVersion: string;
    env: string[];
    title: string;
    minHeight: string;
    packageTimestamp: string;
    preamble: string;
    onLoad: EventEmitter<{}>;
    onURLChanged: EventEmitter<{}>;
    onEvaluate: EventEmitter<{}>;
    notebook: any;
    ngAfterViewInit(): void;
    evaluate(): void;
}
