import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[lazyLoad]',
})
export class IntersectionDirective {
  private readonly _observer: IntersectionObserver;
  private htmlElement?: ElementRef<HTMLElement>;
  private _animation: string = 'animate__fadeIn';

  private readonly numSteps = 20;
  private readonly options = {
    root: null,
    rootMargin: '0px',
    threshold: this.buildThresholdList(),
  };

  @Input() set animation(value: string) {
    this._animation = value;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
    if (el) el.nativeElement.classList.add('invisible');
    this._observer = new IntersectionObserver(
      (
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) => {
        for (let i = 0; i < entries.length; i++) {
          const e = entries[i];
          if (e.intersectionRatio > 0) {
            e.target.classList.remove('invisible');
            e.target.classList.add(this._animation);
            observer.unobserve(e.target);
            observer.disconnect();
          }
        }
      },
      this.options
    );
    if (!el) {
      this._observer.disconnect();
      return;
    }

    this._observer.observe(el.nativeElement);
  }

  private buildThresholdList() {
    const thresholds = [];

    for (let i = 1.0; i <= this.numSteps; i++) {
      var ratio = i / this.numSteps;
      thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
  }
}
