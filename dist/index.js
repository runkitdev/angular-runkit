"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    core_1.ViewChild('embed'),
    __metadata("design:type", Object)
], RunKitEmbedComponent.prototype, "embed", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "source", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], RunKitEmbedComponent.prototype, "readOnly", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "mode", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "nodeVersion", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], RunKitEmbedComponent.prototype, "env", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "minHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "packageTimestamp", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], RunKitEmbedComponent.prototype, "preamble", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RunKitEmbedComponent.prototype, "onLoad", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RunKitEmbedComponent.prototype, "onURLChanged", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RunKitEmbedComponent.prototype, "onEvaluate", void 0);
RunKitEmbedComponent = __decorate([
    core_1.Component({
        selector: 'runkit-embed',
        template: "<div #embed></div>"
    })
], RunKitEmbedComponent);
exports.RunKitEmbedComponent = RunKitEmbedComponent;
//# sourceMappingURL=index.js.map