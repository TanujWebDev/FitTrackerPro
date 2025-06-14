import { motion } from 'framer-motion'
import { Clock, Flame } from 'lucide-react'

const recentWorkouts = [
  {
    id: 1,
    exercise: 'Bench Press',
    sets: 4,
    reps: 12,
    weight: 185,
    duration: 45,
    calories: 220,
    date: '2 hours ago'
  },
  {
    id: 2,
    exercise: 'Deadlifts',
    sets: 3,
    reps: 8,
    weight: 225,
    duration: 35,
    calories: 180,
    date: 'Yesterday'
  },
  {
    id: 3,
    exercise: 'Running',
    sets: 1,
    reps: 0,
    weight: 0,
    duration: 30,
    calories: 350,
    date: '2 days ago'
  }
]

export function RecentWorkouts() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Recent Workouts
      </h3>
      
      <div className="space-y-4">
        {recentWorkouts.map((workout, index) => (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
          >
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {workout.exercise}
              </h4>
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mt-1">
                {workout.sets > 0 && (
                  <span>{workout.sets} sets × {workout.reps} reps</span>
                )}
                {workout.weight > 0 && (
                  <span>{workout.weight} lbs</span>
                )}
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {workout.duration}min
                </span>
                <span className="flex items-center">
                  <Flame className="h-3 w-3 mr-1" />
                  {workout.calories} cal
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {workout.date}
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors font-medium"
      >
        View All Workouts
      </motion.button>
    </div>
  )
}