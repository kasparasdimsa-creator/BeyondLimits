import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

export default function Profile() {
  const [weight, setWeight] = useState(80);
  const [height, setHeight] = useState(180);
  const [workoutsThisWeek, setWorkoutsThisWeek] = useState(0);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [currentDate, setCurrentDate] = useState("");
  const [name, setName] = useState("Kasparas");

  // Disable scrolling
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  // Date display
  useEffect(() => {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-US", options));
  }, []);

  // Count login once per day
  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0]; // YYYY-MM-DD
    const weekStart = new Date(now);
    weekStart.setDate(now.getDate() - now.getDay());
    weekStart.setHours(0, 0, 0, 0);

    // Get stored logins or initialize
    const stored = JSON.parse(localStorage.getItem("login_workouts") || "[]");

    // Only add a new login if today's date isn't already recorded
    if (!stored.includes(today)) {
      stored.push(today);
      localStorage.setItem("login_workouts", JSON.stringify(stored));
    }

    // Calculate totals
    let weekly = 0;
    stored.forEach((d) => {
      if (new Date(d) >= weekStart) weekly++;
    });

    setTotalWorkouts(stored.length);
    setWorkoutsThisWeek(weekly);
  }, []); // runs once on mount

  return (
    <div className="profile-container">
      <h1 className="welcome-text">
        Welcome Back,&nbsp;
        <input
          className="name-inline"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="(your name)"
        />
      </h1>

      <div className="date-display">{currentDate.toUpperCase()}</div>

      <div className="stats-section">
        <div className="input-card">
          <label>WEIGHT:</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <span>kg</span>
        </div>

        <div className="input-card">
          <label>HEIGHT:</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <span>cm</span>
        </div>

        <img
          className="gym-image"
          src="https://static.vecteezy.com/system/resources/thumbnails/037/228/850/small/ai-generated-exercise-machines-in-a-gym-free-photo.jpg"
          alt="gym"
        />
      </div>

      <h2 className="history-title">Your training history</h2>

      <div className="history-cards">
        <div className="history-card">
          <div className="number">{workoutsThisWeek}</div>
          <div className="label">workouts this week</div>
        </div>

        <div className="history-card">
          <div className="number">{totalWorkouts}</div>
          <div className="label">total workouts</div>
        </div>
      </div>

      <a className="back-link" href="/home">Back to main page</a>
    </div>
  );
}
