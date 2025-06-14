import React, { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const AiChatTrainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        sender: "ai",
        text: generateAiReply(input), // fake logic now
      };
      setMessages((prev) => [...prev, aiResponse]);
      setLoading(false);
    }, 1000);
  };

  const generateAiReply = (userInput: string): string => {
    const lower = userInput.toLowerCase();

    if (lower.includes("workout"))
      return "💪 For better results, try full-body workouts 3x a week!";
    if (lower.includes("diet"))
      return "🥗 A high-protein, low-carb diet works well for cutting.";
    if (lower.includes("motivation"))
      return "🔥 Remember why you started! You're doing amazing.";
    if (lower.includes("rest"))
      return "🛌 Take rest seriously! Your muscles grow during recovery.";
    return "🤖 Keep going! I’m here to help you achieve your fitness goals!";
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md max-h-[500px] overflow-y-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
        🤖 Chat With AI Coach
      </h2>

      <div className="space-y-3 mb-4 max-h-72 overflow-y-auto pr-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs text-sm ${
              msg.sender === "user"
                ? "bg-blue-100 dark:bg-blue-700 text-right ml-auto"
                : "bg-gray-100 dark:bg-gray-700 text-left mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-gray-500 dark:text-gray-300 text-sm">
            Typing...
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask anything..."
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AiChatTrainer;
