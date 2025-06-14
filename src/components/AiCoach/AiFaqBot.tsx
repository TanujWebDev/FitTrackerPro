import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "💪 How many days a week should I work out?",
    answer:
      "It depends on your goal. For general fitness, 3–4 days a week is great. For muscle gain or cutting, 5–6 days with proper rest is ideal.",
  },
  {
    question: "🥗 What diet is best for muscle gain?",
    answer:
      "A protein-rich diet with healthy carbs and fats is essential. Aim for 1.6–2.2g protein per kg body weight. Include eggs, paneer, whey, legumes, and good carbs like oats and rice.",
  },
  {
    question: "🧘‍♂️ Can I work out at home and still see results?",
    answer:
      "Yes! With bodyweight exercises, resistance bands, or dumbbells, you can get fit. Consistency and progressive overload are key.",
  },
  {
    question: "🕒 What's the best time to exercise?",
    answer:
      "The best time is when you can be consistent. Morning workouts boost energy for the day, evening workouts improve strength.",
  },
  {
    question: "💤 Is rest day important?",
    answer:
      "Absolutely! Muscles grow when you rest. Aim for at least 1-2 rest days per week, especially if you're training hard.",
  },
];

const AiFaqBot: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        🤖 AI Coach FAQ Bot
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 text-left text-gray-800 dark:text-white font-semibold"
              onClick={() => toggleIndex(index)}
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiFaqBot;
