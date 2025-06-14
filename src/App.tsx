import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./hooks/useAuth";
import { AuthForm } from "./components/Auth/AuthForm";
import { Header } from "./components/Layout/Header";
import { Sidebar } from "./components/Layout/Sidebar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { WorkoutList } from "./components/Workouts/WorkoutList";
import { BMICalculator } from "./components/Calculator/BMICalculator";
import Calendar from "./components/CalenderView/Calender";
import GoalDashboard from "./components/Goals/GoalDashboard";
import AnalyticsDashboard from "./components/Analytics/AnalyticsDashboard";
import AiDietRecommender from "./components/AiCoach/AiDietRecommender";
import AiFaqBot from "./components/AiCoach/AiFaqBot";
import ConnectedServicesCard from "./components/Profile/ConnectedServicesCard";
import DownloadDataCard from "./components/Profile/DownloadDataCard";
import ThemeToggleCard from "./components/Profile/ThemeToggleCard";
import ProfileInfoCard from "./components/Profile/ProfileInfoCard";

function App() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState("dashboard");

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <AuthForm />
        <Toaster position="top-right" />
      </>
    );
  }

  const renderActiveComponent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "workouts":
        return <WorkoutList />;
      case "calculator":
        return <BMICalculator />;
      case "calendar":
        return <Calendar />;
      case "goals":
        return <GoalDashboard />;
      case "analytics":
        return <AnalyticsDashboard />;
      case "ai-coach":
        return (
          <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              🤖 Your AI Fitness Coach
            </h1>

            {/* 1. AI Diet Recommender */}
            <div className="mb-8">
              <AiDietRecommender />
            </div>

            {/* 2. AI FAQ Bot */}
            <div className="mb-8">
              <AiFaqBot />
            </div>

            {/* 3. Coming Soon: AI Chat Coach, Routine Scheduler, etc. */}
            <div className="p-6 rounded-lg bg-blue-50 dark:bg-gray-800 text-blue-800 dark:text-white shadow">
              💬 More powerful AI tools like AI Chat Coach, Smart Routine
              Generator, and Progress Analyzer are coming soon!
            </div>
          </div>
        );

      case "profile":
        return (
          <div className="p-6 space-y-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              ⚙️ Profile Settings
            </h1>

            {/* 1. Basic Info */}
            <ProfileInfoCard />

            {/* 2. Theme toggle */}
            <ThemeToggleCard />

            {/* 3. Download progress data */}
            <DownloadDataCard />

            {/* 4. Connected fitness services */}
            <ConnectedServicesCard />
          </div>
        );

      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 overflow-y-auto">
          {renderActiveComponent()}
        </main>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
