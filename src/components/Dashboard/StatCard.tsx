import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatCardProps {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: 'blue' | 'teal' | 'orange' | 'purple'
}

const colorClasses = {
  blue: 'from-blue-500 to-blue-600 text-blue-50',
  teal: 'from-teal-500 to-teal-600 text-teal-50',
  orange: 'from-orange-500 to-orange-600 text-orange-50',
  purple: 'from-purple-500 to-purple-600 text-purple-50',
}

export function StatCard({ title, value, change, icon: Icon, color }: StatCardProps) {
  const isPositive = change.startsWith('+')
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses[color]}`}>
            <Icon className="h-6 w-6" />
          </div>
          <span className={`text-sm font-medium px-2 py-1 rounded-full ${
            isPositive 
              ? 'text-green-700 bg-green-100 dark:text-green-400 dark:bg-green-900/30' 
              : 'text-red-700 bg-red-100 dark:text-red-400 dark:bg-red-900/30'
          }`}>
            {change}
          </span>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {value}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {title}
          </p>
        </div>
      </div>
    </motion.div>
  )
}