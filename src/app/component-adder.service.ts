import { Injectable, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentAdderService {

  viewRef: ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver) { }

  // Where to Add
  setViewReference(viewRef: ViewContainerRef) {
    this.viewRef = viewRef;
  }

  // What to Add
  addComponent(componetToAdd: any): any {
    // Entry component Will have a facory created and registered in resolver
    const factory = this.resolver.resolveComponentFactory(componetToAdd);
    // Access the view ref injector to inject the component
    const compRef = factory.create(this.viewRef.parentInjector);
    // Insert the host view of the component
    this.viewRef.insert(compRef.hostView);
    return compRef;
  }
}
