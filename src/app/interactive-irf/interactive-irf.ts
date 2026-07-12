import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { irfRulesData, IRFRulesData } from '../../irf-rules.data';

export interface SearchResult {
  number: string;
  title: string;
  snippet: string;
  chapterNumber: string;
  elementId: string;
}

@Component({
  selector: 'app-interactive-irf',
  imports: [RouterLink, FormsModule],
  templateUrl: './interactive-irf.html',
  styleUrl: './interactive-irf.css',
})
export class InteractiveIrf {
  data: IRFRulesData = irfRulesData;

  searchQuery = '';
  searchResults: SearchResult[] = [];
  searchOpen = false;

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

  onSearch(): void {
    const q = this.searchQuery.trim().toLowerCase();
    if (q.length < 2) {
      this.searchResults = [];
      this.searchOpen = false;
      return;
    }

    const results: SearchResult[] = [];

    for (const chapter of irfRulesData.chapters) {
      for (const section of chapter.sections) {
        if (this.matches(section.title, section.content, q)) {
          results.push({
            number: section.number,
            title: section.title,
            snippet: this.excerpt(section.content, q),
            chapterNumber: chapter.number,
            elementId: `section-${section.number}`,
          });
        }
        for (const sub of section.subsections ?? []) {
          if (this.matches(sub.title, sub.content, q)) {
            results.push({
              number: sub.number,
              title: sub.title,
              snippet: this.excerpt(sub.content, q),
              chapterNumber: chapter.number,
              elementId: `section-${sub.number}`,
            });
          }
        }
      }
    }

    this.searchResults = results.slice(0, 12);
    this.searchOpen = this.searchResults.length > 0;
  }

  jumpTo(result: SearchResult): void {
    this.expandedChapters.add(result.chapterNumber);
    const parts = result.number.split('.');
    if (parts.length >= 2) {
      this.expandedSections.add(`${parts[0]}.${parts[1]}`);
    }
    this.expandedSections.add(result.number);

    this.searchQuery = '';
    this.searchResults = [];
    this.searchOpen = false;

    setTimeout(() => {
      const el = document.getElementById(result.elementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        el.classList.add('search-highlight');
        setTimeout(() => el.classList.remove('search-highlight'), 2000);
      }
    }, 50);
  }

  closeSearch(): void {
    this.searchOpen = false;
  }

  onSearchFocusOut(event: FocusEvent): void {
    const wrapper = (event.currentTarget as HTMLElement);
    const related = event.relatedTarget as Node | null;
    if (!related || !wrapper.contains(related)) {
      this.searchOpen = false;
    }
  }

  private matches(title: string, content: string, q: string): boolean {
    return title.toLowerCase().includes(q) || content.toLowerCase().includes(q);
  }

  private excerpt(content: string, q: string): string {
    if (!content) return '';
    const idx = content.toLowerCase().indexOf(q);
    if (idx === -1) return content.slice(0, 100) + (content.length > 100 ? '…' : '');
    const start = Math.max(0, idx - 40);
    const end = Math.min(content.length, idx + q.length + 60);
    return (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
  }
}
