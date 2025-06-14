import { motion } from 'framer-motion'
import { Activity, Target, Calendar, Zap } from 'lucide-react'
import { StatCard } from './StatCard'
import { ActivityChart } from './ActivityChart'
import { RecentWorkouts } from './RecentWorkouts'
import { QuickActions } from './QuickActions'

export function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, Champion! 💪
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Ready to crush your fitness goals today?
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <StatCard
          title="Total Workouts"
          value="42"
          change="+12%"
          icon={Activity}
          color="blue"
        />
        <StatCard
          title="Calories Burned"
          value="8,540"
          change="+8%"
          icon={Zap}
          color="orange"
        />
        <StatCard
          title="Goals Achieved"
          value="7/10"
          change="+2"
          icon={Target}
          color="teal"
        />
        <StatCard
          title="Streak Days"
          value="15"
          change="+3"
          icon={Calendar}
          color="purple"
        />
      </motion.div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ActivityChart />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <RecentWorkouts />
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <QuickActions />
      </motion.div>
    </div>
  )
}