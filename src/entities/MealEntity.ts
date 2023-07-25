export interface MealInterface {
  id: string;
  title: string;
  type: 'BAD' | 'GOOD';
  description: string;
  createdAt: Date;
}
