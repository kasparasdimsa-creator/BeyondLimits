import React, { useState, useEffect } from "react";
import "../styles/Help.css";
import { Link } from "react-router-dom";

export default function Help() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, []);

  const [exercise, setExercise] = useState("");
  const [response, setResponse] = useState("");

  // Predefined exercises with info + video link
  const help_menu = {
  "Barbell Bench Press": {
    text: "The barbell bench press is a foundational compound exercise that primarily targets the chest, while also engaging the shoulders and triceps. Lie flat on a bench with your feet firmly planted on the floor and grip the bar slightly wider than shoulder-width. Lower the bar slowly to your chest while keeping your elbows at about a 45-degree angle to your torso. Press the bar back up explosively while maintaining a tight core and stable back. Focus on controlled breathing: inhale as you lower and exhale as you press up. Avoid bouncing the bar off your chest or flaring your elbows excessively, which can lead to injury.",
    link: "https://www.youtube.com/watch?v=gRVjAtPip0Y"
  },
  "Weighted Squats": {
    text: "Weighted squats are a staple lower-body exercise that strengthens the quadriceps, hamstrings, glutes, and core. Position a barbell across your upper back, keep feet shoulder-width apart, and brace your core before beginning the movement. Lower your hips by bending the knees and pushing them slightly outward, keeping the chest upright and spine neutral. Descend until your thighs are at least parallel to the floor, then press through your heels to return to standing. Controlled breathing is key: inhale as you descend and exhale as you push up. Avoid letting your knees collapse inward or rounding your back, which can cause injury.",
    link: "https://www.youtube.com/watch?v=bKYKDYr2WIs"
  },
  "Deadlifts": {
    text: "The deadlift is a full-body exercise that targets the hamstrings, glutes, lower back, traps, and forearms. Stand with feet hip-width apart and grip the barbell on the floor, hands just outside your legs. Engage your core and maintain a neutral spine as you lift the bar by driving through the heels and extending your hips and knees simultaneously. Keep the barbell close to your shins throughout the lift. Lower the weight slowly under control to the ground. Deadlifts improve posture, build total-body strength, and enhance pulling power, but improper form can cause serious lower-back injuries, so maintain focus on technique.",
    link: "https://www.youtube.com/watch?v=bKYKDYr2WIs"
  },
  "Overhead Press": {
    text: "The overhead press is a fundamental shoulder exercise that targets the deltoids, triceps, and upper chest. Stand with feet shoulder-width apart and grip a barbell or dumbbells at shoulder height. Press the weight overhead while keeping your core tight and avoiding excessive arching of the lower back. Lower the weight back to shoulder height under control. The overhead press improves upper-body pressing strength and shoulder stability. Focus on controlled breathing and avoid using momentum to lift the weight, as this reduces effectiveness and can lead to injury.",
    link: "https://www.youtube.com/watch?v=qEwKCR5JCog"
  },
  "Barbell Row": {
    text: "Barbell rows are a compound pulling exercise that primarily target the lats, traps, rhomboids, and rear delts, while also engaging the biceps and core. Bend at the hips until your torso is nearly parallel to the ground, maintaining a straight back and a slight bend in the knees. Grip the barbell and pull it toward your lower chest or upper abdomen, squeezing your shoulder blades together at the top. Lower the bar under control to the starting position. Barbell rows improve back thickness, posture, and pulling strength. Avoid jerking the weight or rounding the spine, which can cause injury and reduce effectiveness.",
    link: "https://www.youtube.com/watch?v=vT2GjY_Umpw"
  },
  "Incline Dumbbell Press": {
    text: "The incline dumbbell press targets the upper chest, shoulders, and triceps. Lie on an incline bench and hold a dumbbell in each hand at chest level. Press the dumbbells upward until arms are fully extended, then lower them slowly to maintain tension. Keep your shoulder blades retracted and your core tight to prevent arching your lower back. This exercise emphasizes the clavicular portion of the chest more than flat presses. Avoid flaring the elbows too much, which can strain the shoulders.",
    link: "https://www.youtube.com/watch?v=LYZDsNv8kJ8"
  },
  "Decline Dumbbell Press": {
    text: "The decline dumbbell press emphasizes the lower chest, shoulders, and triceps. Lie on a decline bench and hold dumbbells at chest level. Press the dumbbells upward until arms are fully extended, then lower them slowly to maintain control. Keep your shoulder blades stable and avoid bouncing the dumbbells off your chest. This exercise develops the lower portion of the pectorals and complements incline and flat pressing movements. Controlled breathing and proper form are essential to prevent shoulder strain.",
    link: "https://www.youtube.com/watch?v=6iW6gYlR2Es"
  },
  "Chest Flies": {
    text: "Chest flies isolate the pectoral muscles and provide a deep stretch for the chest. Lie on a flat or incline bench with a dumbbell in each hand, palms facing each other. Open your arms wide in a hugging motion and bring the dumbbells together above your chest, keeping a slight bend in the elbows. Lower the weights slowly to maximize tension. Chest flies improve chest definition and help with muscular symmetry. Avoid dropping your arms too low to protect your shoulders.",
    link: "https://www.youtube.com/watch?v=eozdVDA78K0"
  },
  "Cable Chest Press": {
    text: "Cable chest presses are a controlled movement targeting the chest, shoulders, and triceps. Stand in a cable machine with handles at chest level, step forward slightly, and press the handles forward until arms are fully extended. Slowly return to the starting position while maintaining core engagement. Constant tension from the cables ensures muscle activation throughout the movement. This exercise is excellent for refining chest strength and stability. Avoid locking your elbows at the top to maintain tension.",
    link: "https://www.youtube.com/playlist?list=PL8OM5ZzYjzbDZnI1iOWB64segChFuQOD7"
  },
  "Weighted Dips": {
    text: "Weighted dips are a compound movement that targets the chest, triceps, and shoulders. Using parallel bars, lower your body by bending your elbows until your upper arms are parallel to the floor. Push back up while maintaining control, and add weight with a dip belt if desired. Keep your torso slightly leaned forward to emphasize the chest or upright for triceps. Weighted dips increase pressing strength and upper body mass. Avoid flaring elbows excessively to protect the shoulders.",
    link: "https://www.youtube.com/playlist?list=PL8OM5ZzYjzbDZnI1iOWB64segChFuQOD7"
  },
  "Weighted Pull-Ups": {
    text: "Weighted pull-ups primarily target the lats, biceps, and upper back. Hang from a pull-up bar with additional weight using a dip belt, palms facing away. Pull yourself up until your chin clears the bar, then lower under control. Keep your core tight and avoid swinging. Weighted pull-ups build pulling strength and upper-body mass. Avoid kipping unless performing a specific variation for power.",
    link: "https://www.youtube.com/watch?v=eGo4IYlbE5g"
  },
  "Weighted Chin-Ups": {
    text: "Weighted chin-ups target the biceps, lats, and forearms. Hang from a bar with palms facing toward you and add weight if needed. Pull yourself up until the chin clears the bar, then lower slowly. Keep core engaged and elbows tucked close to the body. Chin-ups improve arm and back strength, and adding weight increases resistance for growth. Avoid swinging or jerking the body to prevent injury.",
    link: "https://www.youtube.com/watch?v=brhRXlOhsAM"
  },
  "Lat Pulldowns": {
    text: "Lat pulldowns work the lats, biceps, and upper back. Sit at a cable machine and grip the bar wider than shoulder width. Pull the bar down toward your upper chest while leaning slightly back, then slowly return to the starting position. Keep shoulders down and elbows pointed toward the floor. Lat pulldowns improve V-taper appearance and pulling strength. Avoid using momentum or leaning excessively.",
    link: "https://www.youtube.com/watch?v=bufWUiCwrRI"
  },
  "Seated Cable Rows": {
    text: "Seated cable rows target the lats, traps, rhomboids, and rear delts. Sit upright with feet against the platform, grip the handle, and pull toward your torso while squeezing shoulder blades together. Control the weight back to the start and avoid leaning too far. Rows build mid-back thickness and improve posture. Keep your spine neutral and core engaged throughout. Avoid rounding your back, which can lead to injury.",
    link: "https://www.youtube.com/watch?v=GZbfZ033f74"
  },
  "Single-Arm Dumbbell Rows": {
    text: "Single-arm dumbbell rows strengthen the lats, traps, rhomboids, and rear delts. Place one knee and hand on a bench for support, hold a dumbbell in the other hand, and row toward your torso. Lower slowly and repeat for the other side. This unilateral exercise corrects strength imbalances and improves core stability. Maintain a straight back and avoid rotating the torso. Controlled motion ensures maximum muscle engagement.",
    link: "https://www.youtube.com/playlist?list=PL8OM5ZzYjzbDZnI1iOWB64segChFuQOD7"
  },
  "Romanian Deadlifts": {
    text: "Romanian deadlifts target the hamstrings, glutes, and lower back. Hold a barbell in front of your thighs, hinge at the hips, and lower the bar down the front of your legs while keeping a slight bend in the knees. Return to standing by driving the hips forward. Maintain a neutral spine throughout. This movement improves posterior chain strength, hip hinge mechanics, and flexibility. Avoid rounding your back to prevent injury.",
    link: "https://www.youtube.com/watch?v=zbYgjREbdb0"
  },
  "Leg Presses": {
    text: "Leg presses primarily target the quadriceps, hamstrings, and glutes. Sit in a leg press machine with feet shoulder-width on the platform. Push the weight upward by extending your legs while keeping knees aligned with toes, then lower slowly. Maintain control and avoid locking knees at the top. Leg presses are a safe alternative to heavy squats and help build lower body strength. Avoid letting your lower back round during the movement.",
    link: "https://www.youtube.com/watch?v=mJSsWpuyiCM"
  },
  "Walking Lunges": {
    text: "Walking lunges target quads, glutes, and hamstrings while improving balance and stability. Hold a dumbbell in each hand, step forward, and lower your back knee toward the floor. Push off the front leg and continue moving forward. Keep your torso upright and knees tracking over your toes. Walking lunges strengthen unilateral leg strength and coordination. Avoid overextending the stride to prevent knee strain.",
    link: "https://www.youtube.com/watch?v=wrwwXE_x-pQ"
  },
  "Bulgarian Split Squats": {
    text: "Bulgarian split squats target the quads, glutes, and hamstrings. Place one foot behind on a bench and hold dumbbells at your sides. Lower the back knee toward the floor and press through the front heel to return to standing. Keep torso upright and core engaged. This unilateral exercise improves balance, hip stability, and leg strength. Avoid letting the front knee travel past the toes to protect the joints.",
    link: "https://www.youtube.com/watch?v=2C-uNgKwPLE"
  },
  "Step-Ups": {
    text: "Step-ups strengthen the quads, glutes, and hamstrings. Step onto a platform or bench with a dumbbell in each hand, drive through the leading leg, and step down slowly. Alternate legs for balanced development. Keep your torso upright and maintain control. Step-ups improve unilateral leg strength, stability, and coordination. Avoid pushing off the back leg excessively to maximize front-leg activation.",
    link: "https://www.youtube.com/watch?v=dQqApCGd6Q0"
  },
  "Lateral Raises": {
    text: "Lateral raises isolate the lateral deltoids for wider shoulders. Hold a dumbbell in each hand by your sides, lift arms to shoulder height with a slight elbow bend, and lower slowly. Keep core engaged and avoid using momentum. Lateral raises improve shoulder aesthetics and stability. Focus on controlled motion for maximum activation. Avoid shrugging your shoulders during the lift.",
    link: "https://www.youtube.com/watch?v=pg3hz43P09w"
  },
  "Front Raises": {
    text: "Front raises target the anterior delts and help develop shoulder strength. Hold dumbbells in front of your thighs, lift straight or slightly bent arms to shoulder height, then lower slowly. Maintain core engagement and avoid swinging. Front raises improve pressing movements and shoulder definition. Controlled movement maximizes isolation. Avoid arching your back excessively.",
    link: "https://www.youtube.com/watch?v/-t7fuZ0KhDA"
  },
  "Rear Delt Flies": {
    text: "Rear delt flies strengthen the posterior delts, traps, and rhomboids. Bend forward at the hips holding dumbbells, open arms out to the sides, and squeeze shoulder blades at the top. Lower slowly and maintain tension. This improves posture, shoulder balance, and rear deltoid development. Avoid swinging or using momentum. Keep a slight bend in elbows for safety.",
    link: "https://www.youtube.com/watch?v=pYcpY20QaE8"
  },
  "Arnold Press": {
    text: "The Arnold press targets all heads of the deltoids and triceps. Start with dumbbells in front of shoulders, palms facing you. Press overhead while rotating palms outward, then reverse on the way down. Maintain core engagement and avoid arching the back. This exercise improves shoulder strength, mobility, and overall pressing ability. Controlled motion ensures maximum muscle activation.",
    link: "https://www.youtube.com/watch?v=vj2w851ZHRM"
  },
  "Machine Row": {
    text: "Machine rows primarily target the lats, traps, and rhomboids. Sit upright, grip handles, and pull toward your torso while squeezing shoulder blades together. Slowly return to start without leaning excessively. Machine rows develop mid-back thickness and improve posture. Maintain neutral spine and core engagement. Avoid jerking the weight to prevent injury.",
    link: "https://www.youtube.com/watch?v=GZbfZ033f74"
  },
  "Bicep Curls": {
    text: "Bicep curls isolate the biceps for arm strength and hypertrophy. Hold a dumbbell or barbell, curl the weight upward while keeping elbows stationary, and lower slowly. Avoid swinging or using momentum. Focus on controlled contraction and full range of motion. Bicep curls improve arm definition and pulling strength. Keep wrists neutral to avoid strain.",
    link: "https://www.youtube.com/watch?v=DcRJ3bLJuVw"
  },
  "Hammer Curls": {
    text: "Hammer curls target the brachialis and biceps while strengthening forearms. Hold dumbbells with a neutral grip, curl upward while keeping elbows close, then lower slowly. Maintain core stability and avoid swinging. This exercise adds thickness to the upper arm and improves grip strength. Controlled motion maximizes engagement. Avoid excessive leaning during the lift.",
    link: "https://www.youtube.com/watch?v=xsOm9xn83-8"
  },
  "Skull Crushers": {
    text: "Skull crushers target the triceps, especially the long head. Lie on a bench with a barbell or EZ-bar, lower the weight toward your forehead by bending elbows, then extend arms back up. Keep elbows stable and avoid flaring. This exercise builds triceps strength and mass. Use controlled motion to prevent joint strain. Avoid using excessive weight to reduce injury risk.",
    link: "https://www.youtube.com/watch?v=d_KZxkY_0cM"
  },
  "Tricep Pushdowns": {
    text: "Tricep pushdowns isolate the triceps using a cable machine. Grip the bar or rope, push down until arms are fully extended, and return slowly. Keep elbows at your sides and avoid swinging. This movement develops tricep definition and pressing strength. Focus on controlled motion for maximum effectiveness. Avoid leaning forward excessively.",
    link: "https://www.youtube.com/watch?v=6Fzep104f0s"
  },
  "Overhead Tricep Extensions": {
    text: "Overhead tricep extensions work the long head of the triceps. Hold a dumbbell or bar overhead, lower behind the head by bending elbows, and extend back up. Keep upper arms stable and core engaged. Improves triceps size and pressing strength. Controlled motion prevents shoulder and elbow strain. Avoid using excessively heavy weight to maintain form.",
    link: "https://www.youtube.com/watch?v=1u18yJELsh0"
  },
  "Shoulder Press": {
    text: "The shoulder press targets the deltoids and triceps. Press dumbbells or a barbell overhead from shoulder height, then lower slowly. Engage your core to stabilize the torso and prevent arching. Builds upper body pressing strength and deltoid mass. Controlled motion ensures safety and effectiveness. Avoid using momentum to lift the weight.",
    link: "https://www.youtube.com/watch?v=qEwKCR5JCog"
  },
  "Hip Thrusts": {
    text: "Hip thrusts primarily target the glutes and hamstrings. Sit on the floor with upper back against a bench, place a barbell over the hips, and thrust upward by extending hips. Lower slowly under control. Strengthens posterior chain, improves hip extension, and enhances squat performance. Keep chin tucked and core tight. Avoid overarching the lower back during the lift.",
    link: "https://www.youtube.com/watch?v=xDmFkJxPzeM"
  },
  "Glute Bridges": {
    text: "Glute bridges strengthen the glutes, hamstrings, and lower back. Lie on your back with knees bent, weight on hips, and lift hips to form a straight line from shoulders to knees. Lower slowly while maintaining tension. This improves posterior chain strength and hip stability. Keep core tight and avoid letting knees collapse inward. Controlled motion ensures maximum glute activation.",
    link: "https://www.youtube.com/watch?v=m2Zx-6zWz2Y"
  },
  "Calf Raises": {
    text: "Calf raises target the gastrocnemius and soleus muscles. Stand on a platform with weight, lift heels as high as possible, and lower slowly. Maintain control throughout the movement. Builds calf strength, size, and ankle stability. Avoid bouncing for better activation. Keep balance using core engagement.",
    link: "https://www.youtube.com/watch?v=N3awlEyTY98"
  },
  "Face Pulls": {
    text: "Face pulls target the rear delts, traps, and rhomboids. Using a rope attachment on a cable machine, pull toward the face while flaring elbows and squeezing shoulder blades. Maintain upright posture and controlled motion. Improves shoulder health, posture, and rear shoulder development. Avoid using momentum. Keep elbows high to maximize rear delt engagement.",
    link: "https://www.youtube.com/watch?v=eIq5CB9JfKE"
  },
  "Shrugs": {
    text: "Shrugs primarily strengthen the trapezius muscles. Hold dumbbells or a barbell, lift shoulders toward ears, and lower slowly. Avoid rolling shoulders to focus on traps. Builds upper trap size, strength, and posture. Maintain controlled motion and core stability. Avoid jerky movements to prevent neck strain.",
    link: "https://www.youtube.com/watch?v=C6sYjDFuq9I"
  },
  "Forearm Curls": {
    text: "Forearm curls target wrist flexors and forearm muscles. Hold a dumbbell or barbell and curl the weight using wrists while keeping forearms stationary. Lower slowly to maintain tension. Strengthens grip, forearms, and wrist endurance. Avoid using momentum or bending the elbows. Controlled reps maximize results.",
    link: "https://www.youtube.com/watch?v=iPtxiNtBY-M"
  },
  "Ab Crunches": {
    text: "Ab crunches target the rectus abdominis for core strength. Lie on your back with knees bent, curl your torso upward toward your knees, then lower slowly. Keep neck relaxed and avoid pulling on it with hands. Improves core stability, posture, and abdominal definition. Controlled motion ensures maximum engagement. Avoid swinging the torso to prevent strain.",
    link: "https://www.youtube.com/watch?v=odsG9W8c2Po"
  }
};

  // Array of exercise types for dropdown
  const exercises = Object.keys(help_menu);

  // Display info when exercise changes
  const handleSelect = (e) => {
  const selected = e.target.value;
  setExercise(selected);

  if (help_menu[selected]) {
    const exerciseData = help_menu[selected];
    

    setResponse(
      <>
        {/* Keep the full text as-is */}
        <p>{exerciseData.text}</p>

        {/* Only add the link */}
        {exerciseData.link && (
          <p>
            Watch a video demonstration{" "}
            <a
              href={exerciseData.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="video-link">here</span>
            </a>
            .
          </p>
        )}
      </>
    );
  } else {
    setResponse("");
  }
};


  return (
    <div className="help-page">
      {/* LEFT SECTION */}
      <div className="help-left">
        <h2 className="help-title">
          Need Assistance? Select an Exercise for Guidance from ChatGPT.
        </h2>

        {/* Dropdown selection */}
        <select
          className="help-input"
          value={exercise}
          onChange={handleSelect}
        >
          <option value="">-- Select Exercise --</option>
          {exercises.map((ex) => (
            <option key={ex} value={ex}>
              {ex}
            </option>
          ))}
        </select>

        <div className="response-box">
          {!exercise && (
            <p className="info-text">
              Select an exercise from the dropdown to see the instructions and a video.
            </p>
          )}

          {exercise && response && <div className="response-text">{response}</div>}
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="help-right">
        <img
          src="https://i.pinimg.com/1200x/50/d3/26/50d326d1153cda60ea36e7b1c638de4c.jpg"
          alt="Exercise visualization"
          className="exercise-image"
        />

        <div className="back-wrapper">
          <Link to="/home" className="back-link">
            Back to main page
          </Link>
        </div>
      </div>
    </div>
  );
}
