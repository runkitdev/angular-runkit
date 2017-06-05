import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'

@Component({
	selector: 'runkit-embed',
	template: `<div #embed></div>`
})
export class RunKitEmbedComponent {
	@ViewChild('embed') embed
	@Input() source: string
	@Input() readOnly: boolean
	@Input() mode: string
	@Input() nodeVersion: string
	@Input() env: string[]
	@Input() title: string
	@Input() minHeight: string
	@Input() packageTimestamp: string
	@Input() preamble: string
	@Output() onLoad: EventEmitter<{}> = new EventEmitter
	@Output() onURLChanged: EventEmitter<{}> = new EventEmitter
	@Output() onEvaluate: EventEmitter<{}> = new EventEmitter
	notebook: any
	ngAfterViewInit() {
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
		})
	}
	evaluate() {
		this.notebook.evaluate()
	}
}

