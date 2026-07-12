import { Component } from '@angular/core';
import { irfRulesData, IRFRulesData } from '../../irf-rules.data';

@Component({
  selector: 'app-interactive-irf',
  imports: [],
  templateUrl: './interactive-irf.html',
  styleUrl: './interactive-irf.css',
})
export class InteractiveIrf {
  data: IRFRulesData = irfRulesData;

  expandedChapters = new Set<string>(irfRulesData.chapters.map((c) => c.number));
  expandedSections = new Set<string>(
    irfRulesData.chapters.flatMap((c) => [
      ...c.sections.map((s) => s.number),
      ...c.sections.flatMap((s) => (s.subsections ?? []).map((ss) => ss.number)),
    ]),
  );
  overviewExpanded = true;

  toggleChapter(number: string): void {
    this.toggle(this.expandedChapters, number);
  }

  toggleSection(number: string): void {
    this.toggle(this.expandedSections, number);
  }

  toggleOverview(): void {
    this.overviewExpanded = !this.overviewExpanded;
  }

  isChapterExpanded(number: string): boolean {
    return this.expandedChapters.has(number);
  }

  isSectionExpanded(number: string): boolean {
    return this.expandedSections.has(number);
  }

  private toggle(set: Set<string>, key: string): void {
    if (set.has(key)) {
      set.delete(key);
    } else {
      set.add(key);
    }
  }

  chapterId(number: string): string {
    return `chapter${number}`;
  }
}
