export interface LabChallenge {
  id: string;
  title: string;
  platform: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  problemStatement: string;
  approach: string[];
  tools: string[];
  screenshots: string[];
  lessonsLearned: string[];
  dateCompleted: string;
}