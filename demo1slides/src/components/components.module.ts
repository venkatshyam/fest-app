import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion';
import { NontechComponent } from './nontech/nontech';
import { PptComponent } from './ppt/ppt';
import { TechnicalComponent } from './technical/technical';
import { SpotlightsComponent } from './spotlights/spotlights';
@NgModule({
	declarations: [AccordionComponent,
    NontechComponent,
    PptComponent,
    TechnicalComponent,
    SpotlightsComponent],
	imports: [],
	exports: [AccordionComponent,
    NontechComponent,
    PptComponent,
    TechnicalComponent,
    SpotlightsComponent]
})
export class ComponentsModule {}
