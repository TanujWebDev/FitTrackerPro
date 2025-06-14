import { motion } from 'framer-motion'
import { 
  Home, 
  Activity, 
  Calendar, 
  Target, 
  Calculator,
  TrendingUp,
  User,
  Brain
} from 'lucide-react'

interface SidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'workouts', label: 'Workouts', icon: Activity },
  { id: 'calendar', label: 'Calendar', icon: Calendar },
  { id: 'goals', label: 'Goals', icon: Target },
  { id: 'analytics', label: 'Analytics', icon: TrendingUp },
  { id: 'calculator', label: 'BMI/BMR', icon: Calculator },
  { id: 'ai-coach', label: 'AI Coach', icon: Brain },
  { id: 'profile', label: 'Profile', icon: User },
]

export function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <motion.button
              key={item.id}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(item.id)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left font-medium transition-all
                ${isActive 
                  ? 'bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }
              `}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </motion.button>
          )
        })}
      </nav>
    </aside>
  )
}