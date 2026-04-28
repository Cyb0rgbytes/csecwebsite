"use client";

import { useState, Suspense } from "react";
import Spline from "@splinetool/react-spline";
import styles from "./SplineScene.module.css";

function SplineLoader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderPulse} />
      <span className={styles.loaderText}>Loading 3D Scene...</span>
    </div>
  );
}

export default function SplineScene() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.wrapper}>
      {/* Show loader until Spline fires onLoad */}
      {!loaded && <SplineLoader />}

      <div className={`${styles.splineInner} ${loaded ? styles.visible : ""}`}>
        <Suspense fallback={null}>
          <Spline
            scene="https://csecnix.com/models/nexbot_robot_character_concept.spline"
            onLoad={() => setLoaded(true)}
          />
        </Suspense>
      </div>
    </div>
  );
}
