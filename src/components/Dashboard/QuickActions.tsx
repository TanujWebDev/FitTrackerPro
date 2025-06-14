import { motion } from 'framer-motion'
import { Plus, Target, Calculator, Calendar } from 'lucide-react'

const actions = [
  {
    id: 'new-workout',
    title: 'Log Workout',
    description: 'Record your latest training session',
    icon: Plus,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'set-goal',
    title: 'Set Goal',
    description: 'Define new fitness objectives',
    icon: Target,
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 'calculate-bmi',
    title: 'BMI Calculator',
    description: 'Check your body mass index',
    icon: Calculator,
    color: 'from-orange-500 to-orange-600',
  },
  {
    id: 'schedule',
    title: 'Schedule',
    description: 'Plan your workout calendar',
    icon: Calendar,
    color: 'from-purple-500 to-purple-600',
  },
]

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((action, index) => {
          const Icon = action.icon
          
          return (
            <motion.button
              key={action.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-all text-left group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {action.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {action.description}
              </p>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}