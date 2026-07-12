import { Component, Input } from '@angular/core';
import { IRFRulesSection } from '../../../irf-rules.data';

@Component({
  selector: 'app-irf-rule',
  templateUrl: './irf-rule.html',
  styleUrl: './irf-rule.css',
})
export class IrfRule {
  @Input() section!: IRFRulesSection;
  localExpanded = true;

  toggle(): void {
    this.localExpanded = !this.localExpanded;
  }
}
