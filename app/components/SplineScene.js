"use client";

import { Suspense } from "react";
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
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<SplineLoader />}>
        <Spline scene="https://prod.spline.design/POMaOgUDSZSAgM0Q/scene.splinecode" />
      </Suspense>
    </div>
  );
}
