"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RunKitEmbedComponent = (function () {
    function RunKitEmbedComponent() {
        this.onLoad = new core_1.EventEmitter;
        this.onURLChanged = new core_1.EventEmitter;
        this.onEvaluate = new core_1.EventEmitter;
    }
    RunKitEmbedComponent.prototype.ngAfterViewInit = function () {
        this.notebook = window['RunKit'].createNotebook({
            element: this.embed.nativeElement,
            source: this.source,
            readOnly: this.readOnly,
            mode: this.mode,
            nodeVersion: this.nodeVersion,
            env: this.env,
            title: this.title,
            minHeight: this.minHeight,
            packageTimestamp: this.packageTimestamp,
            preamble: this.preamble,
            onLoad: this.onLoad.emit.bind(this.onLoad),
            onURLChanged: this.onURLChanged.emit.bind(this.onURLChanged),
            onEvaluate: this.onEvaluate.emit.bind(this.onEvaluate)
        });
    };
    RunKitEmbedComponent.prototype.evaluate = function () {
        this.notebook.evaluate();
    };
    return RunKitEmbedComponent;
}());
__decorate([
    core_1.ViewChild('embed')
], RunKitEmbedComponent.prototype, "embed", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "source", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "nodeVersion", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "env", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "title", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "minHeight", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "packageTimestamp", void 0);
__decorate([
    core_1.Input()
], RunKitEmbedComponent.prototype, "preamble", void 0);
__decorate([
    core_1.Output()
], RunKitEmbedComponent.prototype, "onLoad", void 0);
__decorate([
    core_1.Output()
], RunKitEmbedComponent.prototype, "onURLChanged", void 0);
__decorate([
    core_1.Output()
], RunKitEmbedComponent.prototype, "onEvaluate", void 0);
RunKitEmbedComponent = __decorate([
    core_1.Component({
        selector: 'runkit-embed',
        template: "<div #embed></div>"
    })
], RunKitEmbedComponent);
exports.RunKitEmbedComponent = RunKitEmbedComponent;
//# sourceMappingURL=index.js.map