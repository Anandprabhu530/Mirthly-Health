"use client";

import { NavigationMenuDemo } from "@/components/Navigation";
import { fetchAll } from "@/server";
import { useData } from "@/utils/dataContext";
import { useEffect } from "react";

// const data = {
//   exercise: [
//     {
//       exercise_name: "Deep Breathing",
//       exercise_description: [
//         "Take a deep breath in through your nose for 4 seconds.",
//         "Hold your breath for 7 seconds.",
//         "Exhale slowly through your mouth for 8 seconds.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },

//     {
//       exercise_name: "Deep Breathing",
//       exercise_description: [
//         "Take a deep breath in through your nose for 4 seconds.",
//         "Hold your breath for 7 seconds.",
//         "Exhale slowly through your mouth for 8 seconds.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },
//     {
//       exercise_name: "Deep Breathing",
//       exercise_description: [
//         "Take a deep breath in through your nose for 4 seconds.",
//         "Hold your breath for 7 seconds.",
//         "Exhale slowly through your mouth for 8 seconds.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },
//   ],
//   tasks: [
//     {
//       shortform: "Breathe",
//       longform: [
//         "Inhale slowly through your nose for 4 counts.",
//         "Hold your breath for 7 counts.",
//         "Exhale slowly through your mouth for 8 counts.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },
//     {
//       shortform: "Breathe",
//       longform: [
//         "Inhale slowly through your nose for 4 counts.",
//         "Hold your breath for 7 counts.",
//         "Exhale slowly through your mouth for 8 counts.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },
//     {
//       shortform: "Breathe",
//       longform: [
//         "Inhale slowly through your nose for 4 counts.",
//         "Hold your breath for 7 counts.",
//         "Exhale slowly through your mouth for 8 counts.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },
//     {
//       shortform: "Breathe",
//       longform: [
//         "Inhale slowly through your nose for 4 counts.",
//         "Hold your breath for 7 counts.",
//         "Exhale slowly through your mouth for 8 counts.",
//         "Repeat for 5-10 minutes.",
//       ],
//     },
//   ],
// };
interface exercise_type {
  exercise_name: string;
  exercise_description: string[];
}
interface tasks_type {
  shortform: string;
  longform: string[];
}

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, user, setData } = useData();

  useEffect(() => {
    const response = async () => {
      try {
        const res = await fetchAll(user);
        if (res) {
          if (!data) {
            setData(res);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    response();
  }, [data, setData, user]);
  return (
    <div className="h-screen">
      <NavigationMenuDemo />
      {data && (
        <div className="p-6 flex gap-6 ">
          <div className="basis-2/3">
            <div className="font-bold text-xl pb-4">Your Tasks:</div>
            <div className="grid grid-flow-row-dense gap-6 grid-cols-2 grid-row-2 ">
              {data.tasks.map((solo: tasks_type, index: number) => (
                <div
                  className="border-2 border-white rounded-xl p-4 shadow-xl"
                  key={index}
                >
                  <div className="font-semibold">{solo.shortform}</div>
                  <div>
                    {solo.longform.map((solodata: string, index: number) => (
                      <li key={index} className=" pt-2">
                        {solodata}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="basis-1/3 border-2 border-white rounded-xl p-4 shadow-xl">
            <div className="font-bold text-xl pb-4">Recommended Exercises</div>
            {data && (
              <div>
                {data.exercise.map((single: exercise_type, index: number) => (
                  <div className="pb-4" key={index}>
                    <div className="font-semibold">
                      {index + 1}. {single.exercise_name}
                    </div>
                    <div>
                      {single.exercise_description.map(
                        (singleexe: string, index: number) => (
                          <li className="pt-2" key={index}>
                            {singleexe}
                          </li>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
