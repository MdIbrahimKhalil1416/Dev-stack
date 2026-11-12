// A union type lists the ONLY values allowed. Category must be exactly one of these strings.
export type Category =
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Language'
  | 'Styling'
  | 'DevOps'
  | 'Tools'

export type Difficulty = 'Beginner-Friendly' | 'Intermediate' | 'Advanced'

// An interface describes the shape of an object: which fields it has and the type of each.
// Every technology in technologies.json must match this shape.
export interface Technology {
  id: string
  name: string
  category: Category
  description: string
  icon: string // image URL
  rating: number
  difficulty: Difficulty
  badge: string
}
