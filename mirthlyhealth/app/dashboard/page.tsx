"use client";
import { NavigationMenuDemo } from "@/components/Navigation";
import { useData } from "@/utils/dataContext";
import { useEffect, useState } from "react";

const data = {
  tasks: [
    {
      shortform: "Calm Breathing",
      longform: [
        "Take a comfortable position.",
        "Place your hands on your stomach or chest.",
        "Close your eyes and take a few deep breaths.",
        "Focus on the rise and fall of your breath.",
      ],
    },
    {
      shortform: "Thought Jogging",
      longform: [
        "Think of a positive memory or experience.",
        "Jot down 5-10 details about the memory.",
        "Try to recall as much as you can about the experience.",
        "Recall the positive feelings associated with the memory.",
      ],
    },
    {
      shortform: "Gratitude List",
      longform: [
        "Write down 3-5 things you're grateful for.",
        "Focus on the positive aspects of your life.",
        "Reflect on the reasons why you're grateful for each item.",
        "Savor the positive feelings associated with gratitude.",
      ],
    },
    {
      shortform: "Mindful Break",
      longform: [
        "Take 5 minutes to focus on your breath.",
        "Notice the sensations of your body.",
        "Pay attention to your thoughts and feelings.",
        "Return to the present moment without judgment.",
      ],
    },
  ],
  exercise: [
    {
      exercise_name: "Yoga",
      exercise_description: [
        "Find a comfortable and quiet space.",
        "Follow a beginner-friendly yoga routine.",
        "Focus on coordinating your breath with your movements.",
      ],
    },
    {
      exercise_name: "Mindfulness Meditation",
      exercise_description: [
        "Sit in a comfortable position with your back straight.",
        "Close your eyes and focus on your breath.",
        "When your mind wanders, gently bring it back to your breath.",
      ],
    },
    {
      exercise_name: "Tai Chi",
      exercise_description: [
        "Find an open space with plenty of room.",
        "Follow a beginner-friendly Tai Chi routine.",
        "Focus on slow and gentle movements.",
      ],
    },
  ],
};

const mentalHealthQuotes = [
  "You don't have to be everything to everyone. You just have to be you.",
  "One day at a time. One step at a time.",
  "You are braver than you believe, stronger than you seem, and smarter than you think.",
  "Don't be afraid to ask for help. It's a sign of strength, not weakness.",
  "Your mental health is just as important as your physical health. Take care of yourself.",
  "You are not alone. Millions of people struggle with mental health issues.",
  "Every day is a new opportunity. Let go of yesterday.",
  "Don't compare your journey to others. Everyone walks at their own pace.",
  "It's okay not to be okay. It's okay to take a break.",
  "You are worthy of love and happiness, no matter what.",
  "Your feelings are valid. Don't let anyone tell you otherwise.",
  "Focus on the things you can control, not the things you can't.",
  "Setbacks are a part of the journey. Don't give up.",
  "Be kind to yourself. You are doing the best you can.",
  "You are capable of amazing things. Believe in yourself.",
  "It's okay to ask for what you need.",
  "Celebrate your small victories. Every step forward counts.",
  "Don't let your past define you. You are stronger than your struggles.",
  "You are worthy of happiness. Don't settle for anything less.",
  "You are enough. You are loved. You are important.",
  "Taking care of your mental health is a lifelong journey. Be patient with yourself.",
  "There is light at the end of the tunnel. You will get through this.",
  "Don't be afraid to reach out for help. There are people who care about you.",
  "Small changes can make a big difference. Start where you are.",
  "You are not your thoughts or your feelings. You are stronger than them.",
  "It's okay to cry. Letting your emotions out can be healing.",
  "Focus on the positive. There is always something good in your life.",
  "Gratitude is a powerful tool. Take time to appreciate the good things in your life.",
  "Helping others is a great way to improve your own mental health.",
  "Surround yourself with positive people who support you.",
  "Set realistic goals for yourself. Don't try to do too much at once.",
  "Take care of your physical health. It can have a big impact on your mental health.",
  "Exercise is a great way to improve your mood and reduce stress.",
  "Getting enough sleep is essential for mental health.",
  "Eating a healthy diet can help improve your mood and energy levels.",
  "Spend time in nature. It can be very calming and grounding.",
  "Find a hobby or activity that you enjoy. It's important to have fun and relax.",
  "Mindfulness and meditation can help you focus on the present moment and reduce stress.",
  "Don't be afraid to say no. It's okay to set boundaries.",
  "Learn to forgive yourself. Everyone makes mistakes.",
  "You are not a burden. People who care about you want to help.",
  "There is hope. Recovery is possible.",
  "You are stronger than you think. You can overcome anything.",
  "Believe in yourself. You are capable of achieving anything you set your mind to.",
  "Don't let mental health hold you back from living your life.",
  "You are worthy of a happy and fulfilling life.",
  "Take care of yourself. You matter.",
  "You are not alone. We are in this together.",
];

const Dashboard = () => {
  // const { data } = useData();
  const [quote, setQuote] = useState<string | null>(null);

  useEffect(() => {
    setQuote(
      mentalHealthQuotes[Math.floor(Math.random() * mentalHealthQuotes.length)]
    );
  }, []);

  return (
    <div className="h-screen">
      <NavigationMenuDemo />
      <div className="p-6 h-[90%]">
        <div className="flex gap-6 h-full">
          <div className="flex flex-col basis-1/2 gap-6">
            <div className="flex justify-between items-center">
              <div className="text-xl">Hello Prem</div>
              <div>{quote}</div>
            </div>
            <div className="flex gap-6 h-[150px]">
              <div className="p-4 basis-1/3 border-white border-2 rounded-xl">
                <div className="text-xl font-semibold">Stress Level</div>
                <div className="pt-4 text-5xl font-light">5/10</div>
              </div>
              <div className="p-4 basis-1/3 border-white border-2 rounded-xl">
                <div className="text-xl font-semibold">Average Sleep</div>
                <div className="pt-4 text-5xl font-light">6 hours</div>
              </div>
              <div className="p-4 basis-1/3 border-white border-2 rounded-xl">
                <div className="text-xl font-semibold">Need to discuss</div>
                <div className="pt-4 text-5xl font-light">NA</div>
              </div>
            </div>
            <div className="h-full border-white border-2 rounded-xl p-4">
              Stress level Graph
            </div>
          </div>
          <div className="basis-1/2 flex flex-col gap-6">
            <div className="flex gap-6 h-fit  ">
              <div className="basis-2/5 border-2 border-white p-4 rounded-xl">
                <div className="font-semibold text-xl">Tasks List :</div>
                <div className="pt-2 pl-2">
                  {data.tasks.map((single_task, index) => (
                    <div key={index} className="pb-2">
                      {single_task.shortform}
                    </div>
                  ))}
                </div>
                <div className="font-semibold text-xl pt-4">
                  Exercises List :
                </div>
                <div className="pt-2 pl-2">
                  {data.exercise.map((single_exercise, index) => (
                    <div key={index} className="pb-2">
                      {single_exercise.exercise_name}
                    </div>
                  ))}
                </div>
              </div>
              <div className="basis-3/5 border-2 border-white p-4 rounded-xl">
                Happiness Feeling pie Chart or graph
              </div>
            </div>
            <div className="border-2 border-white p-4 rounded-xl h-full ">
              Sleep Chart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
