import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Scale, Ruler, Activity } from 'lucide-react'

export function BMICalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [activityLevel, setActivityLevel] = useState('moderate')
  const [results, setResults] = useState<any>(null)

  const calculateBMI = () => {
    const heightM = Number(height) / 100 // Convert cm to meters
    const weightKg = Number(weight)
    const bmi = weightKg / (heightM * heightM)
    
    let category = ''
    let color = ''
    
    if (bmi < 18.5) {
      category = 'Underweight'
      color = 'text-blue-600'
    } else if (bmi < 25) {
      category = 'Normal weight'
      color = 'text-green-600'
    } else if (bmi < 30) {
      category = 'Overweight'
      color = 'text-orange-600'
    } else {
      category = 'Obese'
      color = 'text-red-600'
    }

    return { bmi: bmi.toFixed(1), category, color }
  }

  const calculateBMR = () => {
    const weightKg = Number(weight)
    const heightCm = Number(height)
    const ageYears = Number(age)
    
    let bmr = 0
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * ageYears)
    } else {
      bmr = 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * ageYears)
    }

    // Activity level multipliers
    const multipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    }

    const tdee = bmr * multipliers[activityLevel as keyof typeof multipliers]
    
    return {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee)
    }
  }

  const handleCalculate = () => {
    if (!height || !weight || !age) {
      return
    }

    const bmiData = calculateBMI()
    const bmrData = calculateBMR()
    
    setResults({
      ...bmiData,
      ...bmrData
    })
  }

  const getBMIBarPosition = (bmi: number) => {
    if (bmi < 18.5) return (bmi / 18.5) * 25
    if (bmi < 25) return 25 + ((bmi - 18.5) / 6.5) * 25
    if (bmi < 30) return 50 + ((bmi - 25) / 5) * 25
    return Math.min(75 + ((bmi - 30) / 10) * 25, 100)
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          BMI & BMR Calculator
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Calculate your Body Mass Index and Basal Metabolic Rate
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Calculator className="h-6 w-6 mr-2" />
            Enter Your Details
          </h2>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Height (cm)
                </label>
                <div className="relative">
                  <Ruler className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="170"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Weight (kg)
                </label>
                <div className="relative">
                  <Scale className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="70"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Activity Level
              </label>
              <select
                value={activityLevel}
                onChange={(e) => setActivityLevel(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              >
                <option value="sedentary">Sedentary (little/no exercise)</option>
                <option value="light">Light (light exercise 1-3 days/week)</option>
                <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                <option value="active">Active (hard exercise 6-7 days/week)</option>
                <option value="very_active">Very Active (very hard exercise & physical job)</option>
              </select>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-teal-600 transition-all flex items-center justify-center space-x-2"
            >
              <Activity className="h-5 w-5" />
              <span>Calculate Results</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {results ? (
            <>
              {/* BMI Results */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  BMI Results
                </h3>
                
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {results.bmi}
                  </div>
                  <div className={`text-lg font-semibold ${results.color}`}>
                    {results.category}
                  </div>
                </div>

                {/* BMI Scale */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
                    <span>Underweight</span>
                    <span>Normal</span>
                    <span>Overweight</span>
                    <span>Obese</span>
                  </div>
                  <div className="h-3 bg-gradient-to-r from-blue-400 via-green-400 via-orange-400 to-red-400 rounded-full relative">
                    <div 
                      className="absolute top-0 w-1 h-full bg-gray-900 dark:bg-white rounded-full transform -translate-x-1/2"
                      style={{ left: `${getBMIBarPosition(Number(results.bmi))}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                    <span>18.5</span>
                    <span>25</span>
                    <span>30</span>
                    <span>35+</span>
                  </div>
                </div>
              </div>

              {/* BMR Results */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Metabolic Rate
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                      {results.bmr}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      BMR (calories/day)
                    </div>
                  </div>
                  <div className="text-center p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                    <div className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-1">
                      {results.tdee}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      TDEE (calories/day)
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <p><strong>BMR:</strong> Calories your body needs at rest</p>
                  <p><strong>TDEE:</strong> Total daily calories including activity</p>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-12 text-center">
              <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Ready to Calculate
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Fill in your details and click calculate to see your BMI and BMR results
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}