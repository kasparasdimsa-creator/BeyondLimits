import React, { useState, useEffect } from "react";
import "../styles/Workouts.css";
import strengthImage from '../assets/strength-vs-hyp.jpeg';
import { useNavigate } from "react-router-dom";

export default function Workouts() {
     useEffect(() => {
            document.body.classList.add("no-scroll");
            return () => document.body.classList.remove("no-scroll");
          }, []);
  const navigate = useNavigate();
  const [exerciseType, setExerciseType] = useState("");
  const [weight, setWeight] = useState("");

  const exercises = [
        "Barbell Bench Press",
        "Weighted Squats",
        "Deadlifts",
        "Overhead Press",
        "Barbell Row",
        "Incline Dumbbell Press",
        "Decline Dumbbell Press",
        "Chest Flies",
        "Cable Chest Press",
        "Weighted Dips",
        "Weighted Pull-Ups",
        "Weighted Chin-Ups",
        "Lat Pulldowns",
        "Seated Cable Rows",
        "Single-Arm Dumbbell Rows",
        "Romanian Deadlifts",
        "Leg Presses",
        "Walking Lunges",
        "Bulgarian Split Squats",
        "Step-Ups",
        "Lateral Raises",
        "Front Raises",
        "Rear Delt Flies",
        "Arnold Press",
        "Machine Row",
        "Bicep Curls",
        "Hammer Curls",
        "Skull Crushers",
        "Tricep Pushdowns",
        "Overhead Tricep Extensions",
        "Shoulder Press",
        "Hip Thrusts",
        "Glute Bridges",
        "Calf Raises",
        "Face Pulls",
        "Shrugs",
        "Forearm Curls",
        "Ab Crunches",
  ];
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const storageKey = `${exerciseType}_logs`;

    const existing =
      JSON.parse(localStorage.getItem(storageKey)) || {
        weights: [],
        dates: []
      };

    existing.weights.push(Number(weight));
    existing.dates.push(new Date().toISOString().split("T")[0]);

    localStorage.setItem(storageKey, JSON.stringify(existing));

    console.log("Logged:", exerciseType, weight);

    setExerciseType("");
    setWeight("");
    navigate("/progress", {
        state: { exerciseType }
        });
  };

  return (
    <div className="workout-page">
      <div className="workout-container">
        <form className="workout-form" onSubmit={handleSubmit}>
          <select
            className="input-box"
            value={exerciseType}
            onChange={(e) => setExerciseType(e.target.value)}
            required
          >
            <option value="">Select exercise</option>
            {exercises.map((ex) => (
              <option key={ex} value={ex}>
                {ex}
              </option>
            ))}
          </select>

          <input
            type="number"
            className="input-box"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />

          <p className="note">
            Note: when submitting the weight, always complete the same amount of repetitions.
          </p>

          <p className="instructions">
            To know what amount of repetitions you should do, look at the image on the right and determine which type of training you are doing.
          </p>

          <button type="submit" className="log-button">Log workout</button>
        </form>
      </div>

      <div className="side-panel">
        <img
          src={strengthImage}
          alt="Repetition guide chart"
          className="rep-image"
        />

        <p className="details-text">
          More detailed information{" "}
          <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC7927075/" className="details-link">here.</a>  {/* ← leave blank for now */}
        </p>

        <a href="/home" className="back-link back-link-specific">Back to main page</a>
      </div>
    </div>
  );
}
