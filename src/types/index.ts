export interface User {
  id: string
  email: string
  full_name?: string
  avatar_url?: string
  created_at: string
}

export interface Workout {
  id: string
  user_id: string
  exercise_name: string
  sets: number
  reps: number
  weight: number
  duration: number
  calories_burned: number
  notes?: string
  muscle_group: string
  created_at: string
}

export interface Goal {
  id: string
  user_id: string
  title: string
  target_value: number
  current_value: number
  unit: string
  deadline: string
  completed: boolean
  created_at: string
}

export interface UserProfile {
  id: string
  user_id: string
  age: number
  height: number
  weight: number
  goal_weight: number
  activity_level: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active'
  gender: 'male' | 'female'
  updated_at: string
}