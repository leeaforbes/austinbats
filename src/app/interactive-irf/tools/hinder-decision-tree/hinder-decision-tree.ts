import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export type OutcomeType = 'no-call' | 'point' | 'replay' | null;

export interface TreeNode {
  id: string;
  question: string;
  detail?: string;
  ruleRef?: string;
  yesId: string | null;
  noId: string | null;
  outcome?: OutcomeType;
  outcomeLabel?: string;
  outcomeDetail?: string;
}

const TREE_NODES: TreeNode[] = [
  {
    id: 'interference',
    question: 'Was there actual interference by an opponent?',
    detail: 'Interference means the opponent failed to provide unobstructed direct access to the ball or freedom to hit with a reasonable swing (§6.2). This applies even if the opponent made every effort to avoid it.',
    ruleRef: '§6.3',
    yesId: 'minimal',
    noId: 'outcome-no-call-no-interference',
  },
  {
    id: 'outcome-no-call-no-interference',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'no-call',
    outcomeLabel: 'No Call — No Interference',
    outcomeDetail: 'There was no hinder because there was no interference. Play stands.',
  },
  {
    id: 'minimal',
    question: 'Was the interference so minimal that the player\'s freedom to reach and play the ball was not affected?',
    detail: 'If the interference existed but had no practical effect on the player\'s ability to get to and hit the ball, no hinder applies.',
    ruleRef: '§6.5.1',
    yesId: 'outcome-no-call-minimal',
    noId: 'played-on',
  },
  {
    id: 'outcome-no-call-minimal',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'no-call',
    outcomeLabel: 'No Call — Interference Too Minimal',
    outcomeDetail: 'The interference was so minimal it did not affect the player\'s freedom to reach and play the ball. Play stands.',
  },
  {
    id: 'played-on',
    question: 'Did the player move past the point of interference and continue playing?',
    detail: 'If a player encounters interference but plays on instead of immediately stopping and calling hinder, no hinder is awarded.',
    ruleRef: '§6.4, §6.5.3',
    yesId: 'outcome-no-call-played-on',
    noId: 'indirect-route',
  },
  {
    id: 'outcome-no-call-played-on',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'no-call',
    outcomeLabel: 'No Call — Player Played On',
    outcomeDetail: 'The player moved past the point of interference and played on. A hinder must be called immediately by stopping play.',
  },
  {
    id: 'indirect-route',
    question: 'Did the player create the interference by taking an indirect route when a direct route was clearly available?',
    detail: 'If the opponent clearly provided direct access to the ball but the player chose an indirect path (not due to a positional disadvantage), no hinder applies. Note: this is different from a player who guesses the wrong direction, then changes course to find the opponent in the way.',
    ruleRef: '§6.5.4',
    yesId: 'outcome-no-call-indirect',
    noId: 'opportunity',
  },
  {
    id: 'outcome-no-call-indirect',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'no-call',
    outcomeLabel: 'No Call — Player Created Interference',
    outcomeDetail: 'The player took an indirect route while the opponent provided direct access. The player created the interference.',
  },
  {
    id: 'opportunity',
    question: 'Would the hindered player have had an opportunity for a return?',
    detail: 'Consider whether, absent the interference, the player making every effort to get to the ball (short of dangerous physical contact) would have been able to make a return. Give benefit of the doubt to the hindered player. Player safety is the number one priority in any questionable situation.',
    ruleRef: '§6.5.2',
    yesId: 'effort',
    noId: 'outcome-no-call-no-opportunity',
  },
  {
    id: 'outcome-no-call-no-opportunity',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'no-call',
    outcomeLabel: 'No Call — No Opportunity for Return',
    outcomeDetail: 'Even with the interference, there was no opportunity for a return. No hinder is awarded.',
  },
  {
    id: 'effort',
    question: 'Did the opponent make every effort to avoid the interference?',
    detail: 'If the opponent tried but simply could not avoid interfering, it is an unavoidable hinder → Replay. If the opponent did not make every effort to avoid interfering, the hindered team is awarded the point.',
    ruleRef: '§6.6, §6.7',
    yesId: 'outcome-replay',
    noId: 'outcome-point',
  },
  {
    id: 'outcome-replay',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'replay',
    outcomeLabel: 'Replay',
    outcomeDetail: 'There was interference the opponent made every effort to avoid, and the player would have had an opportunity for a return. The point is replayed. Any faults reset.',
  },
  {
    id: 'outcome-point',
    question: '',
    yesId: null,
    noId: null,
    outcome: 'point',
    outcomeLabel: 'Point to Hindered Team',
    outcomeDetail: 'There was interference the opponent did not make every effort to avoid, and the player would have had an opportunity for a return. The hindered team receives the point.',
  },
];

@Component({
  selector: 'app-hinder-decision-tree',
  imports: [CommonModule, RouterLink],
  templateUrl: './hinder-decision-tree.html',
  styleUrl: './hinder-decision-tree.css',
})
export class HinderDecisionTree {
  private nodeMap: Map<string, TreeNode> = new Map(
    TREE_NODES.map((n) => [n.id, n])
  );

  history: { node: TreeNode; answer: 'yes' | 'no' }[] = [];
  currentNode: TreeNode = this.nodeMap.get('interference')!;

  get isOutcome(): boolean {
    return !!this.currentNode.outcome;
  }

  answer(choice: 'yes' | 'no'): void {
    const nextId = choice === 'yes' ? this.currentNode.yesId : this.currentNode.noId;
    if (!nextId) return;
    const nextNode = this.nodeMap.get(nextId);
    if (!nextNode) return;
    this.history.push({ node: this.currentNode, answer: choice });
    this.currentNode = nextNode;
  }

  goBack(): void {
    const prev = this.history.pop();
    if (prev) {
      this.currentNode = prev.node;
    }
  }

  reset(): void {
    this.history = [];
    this.currentNode = this.nodeMap.get('interference')!;
  }

  get stepNumber(): number {
    return this.history.length + 1;
  }

  get totalQuestions(): number {
    return TREE_NODES.filter((n) => !n.outcome).length;
  }
}
