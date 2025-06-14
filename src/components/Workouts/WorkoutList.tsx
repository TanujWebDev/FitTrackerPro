import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Filter, Clock, Flame, Weight } from 'lucide-react'
import { WorkoutForm } from './WorkoutForm'

// Mock data - in real app this would come from Supabase
const mockWorkouts = [
  {
    id: '1',
    exercise_name: 'Bench Press',
    sets: 4,
    reps: 12,
    weight: 185,
    duration: 45,
    calories_burned: 220,
    muscle_group: 'Chest',
    notes: 'Felt strong today, increased weight by 5lbs',
    created_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    exercise_name: 'Deadlifts',
    sets: 3,
    reps: 8,
    weight: 225,
    duration: 35,
    calories_burned: 180,
    muscle_group: 'Back',
    notes: 'Focus on form, slower controlled reps',
    created_at: '2024-01-14T16:15:00Z'
  },
  {
    id: '3',
    exercise_name: 'Running',
    sets: 1,
    reps: 0,
    weight: 0,
    duration: 30,
    calories_burned: 350,
    muscle_group: 'Cardio',
    notes: '5K run in the park, beautiful weather',
    created_at: '2024-01-13T07:00:00Z'
  }
]

export function WorkoutList() {
  const [workouts, setWorkouts] = useState(mockWorkouts)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterMuscleGroup, setFilterMuscleGroup] = useState('')

  const handleAddWorkout = (newWorkout: any) => {
    const workout = {
      ...newWorkout,
      id: Date.now().toString(),
      created_at: new Date().toISOString()
    }
    setWorkouts(prev => [workout, ...prev])
  }

  const filteredWorkouts = workouts.filter(workout => {
    const matchesSearch = workout.exercise_name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = !filterMuscleGroup || workout.muscle_group === filterMuscleGroup
    return matchesSearch && matchesFilter
  })

  const muscleGroups = [...new Set(workouts.map(w => w.muscle_group))]

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My Workouts
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and manage your training sessions
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowForm(true)}
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all flex items-center space-x-2"
        >
          <Plus className="h-5 w-5" />
          <span>Log Workout</span>
        </motion.button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search exercises..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <select
            value={filterMuscleGroup}
            onChange={(e) => setFilterMuscleGroup(e.target.value)}
            className="pl-12 pr-8 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
          >
            <option value="">All Muscle Groups</option>
            {muscleGroups.map(group => (
              <option key={group} value={group}>{group}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Workouts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorkouts.map((workout, index) => (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {workout.exercise_name}
              </h3>
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-sm font-medium rounded-full">
                {workout.muscle_group}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4">
              {workout.sets > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {workout.sets}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Sets
                  </div>
                </div>
              )}
              {workout.reps > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {workout.reps}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Reps
                  </div>
                </div>
              )}
              {workout.weight > 0 && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {workout.weight}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    lbs
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{workout.duration}min</span>
                </div>
                <div className="flex items-center">
                  <Flame className="h-4 w-4 mr-1" />
                  <span>{workout.calories_burned} cal</span>
                </div>
              </div>
              <div className="text-xs">
                {new Date(workout.created_at).toLocaleDateString()}
              </div>
            </div>

            {workout.notes && (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {workout.notes}
                </p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {filteredWorkouts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-600 mb-4">
            <Weight className="h-16 w-16 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No workouts found
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {searchTerm || filterMuscleGroup 
              ? 'Try adjusting your search or filter criteria'
              : 'Start by logging your first workout'
            }
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all"
          >
            Log Your First Workout
          </motion.button>
        </div>
      )}

      {showForm && (
        <WorkoutForm
          onClose={() => setShowForm(false)}
          onSubmit={handleAddWorkout}
        />
      )}
    </div>
  )
}