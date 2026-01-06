import "../styles/Progress.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Progress() {
  const location = useLocation();

  const [exerciseType, setExerciseType] = useState(
    location.state?.exerciseType || ""
  );

  const [chartData, setChartData] = useState(null);
  const [noData, setNoData] = useState(false);

  const exercises = [
    "Barbell Bench Press","Weighted Squats","Deadlifts","Overhead Press",
    "Barbell Row","Incline Dumbbell Press","Decline Dumbbell Press",
    "Chest Flies","Cable Chest Press","Weighted Dips","Weighted Pull-Ups",
    "Weighted Chin-Ups","Lat Pulldowns","Seated Cable Rows",
    "Single-Arm Dumbbell Rows","Romanian Deadlifts","Leg Presses",
    "Walking Lunges","Bulgarian Split Squats","Step-Ups","Lateral Raises",
    "Front Raises","Rear Delt Flies","Arnold Press","Machine Row",
    "Bicep Curls","Hammer Curls","Skull Crushers","Tricep Pushdowns",
    "Overhead Tricep Extensions","Shoulder Press","Hip Thrusts",
    "Glute Bridges","Calf Raises","Face Pulls","Shrugs",
    "Forearm Curls","Ab Crunches"
  ];

  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  useEffect(() => {
    if (!exerciseType) {
      setChartData(null);
      setNoData(false);
      return;
    }

    setNoData(false);
    createGraph(exerciseType);
  }, [exerciseType]);

  const createGraph = (type) => {
    const stored = JSON.parse(
      localStorage.getItem(`${type}_logs`) || "null"
    );

    if (!stored || !stored.weights || stored.weights.length === 0) {
      setChartData(null);
      setNoData(true);
      return;
    }

    setChartData({
      labels: stored.dates,
      datasets: [
        {
          label: `${type} Progress (kg)`,
          data: stored.weights,
          borderColor: "#4CAF50",
          tension: 0.3
        }
      ]
    });
  };

  return (
  <div className="progress-container">
    {/* LEFT PANEL */}
    <div className="input-section">
      <select
        className="exercise-input"
        value={exerciseType}
        onChange={(e) => setExerciseType(e.target.value)}
      >
        <option value="">-- Select exercise --</option>
        {exercises.map((ex) => (
          <option key={ex} value={ex}>
            {ex}
          </option>
        ))}
      </select>

      {/* ✅ THIS TEXT NEVER DISAPPEARS */}
      <p className="info-text">
        Studies prove that by tracking workouts, you measure your progress,
        which positively motivates you for future improvements and lets you
        stay accountable and disciplined in the near future. Don’t forget to
        create the graph each time! (“How and why should I track my workouts?)
      </p>
    </div>

    {/* RIGHT PANEL — ALWAYS EXISTS */}
    <div className="graph-section">
      {!exerciseType && (
        <p className="error-text">
          SELECT AN EXERCISE TO VIEW YOUR PROGRESS GRAPH.
        </p>
      )}

      {exerciseType && noData && (
        <p className="error-text">
          NO DATA AVAILABLE FOR THIS EXERCISE YET.
        </p>
      )}

      {chartData && <Line data={chartData} />}
    </div>

    <a href="/home" className="back-link">
      Back to main page
    </a>
  </div>
);
}
