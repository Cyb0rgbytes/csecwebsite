"use client";

import { useState, useCallback, Suspense, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import styles from "./SplineScene.module.css";

/* ─── R2 primary → Spline CDN fallback ─── */
const R2_URL = "https://assets.csecnix.com/nexbot_robot_character_concept.splinecode";
const FALLBACK_URL = "https://prod.spline.design/POMaOgUDSZSAgM0Q/scene.splinecode";

function SplineLoader() {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderRing} />
      <span className={styles.loaderText}>Initializing 3D Scene…</span>
    </div>
  );
}

export default function SplineScene() {
  const [loaded, setLoaded] = useState(false);
  const [sceneUrl, setSceneUrl] = useState(null); // start null, resolve after check
  const resolved = useRef(false);

  const handleLoad = useCallback(() => setLoaded(true), []);

  /* Pre-check R2 reachability, then set the correct URL */
  useEffect(() => {
    if (resolved.current) return;
    resolved.current = true;

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3000); // 3s timeout

    fetch(R2_URL, { method: "HEAD", mode: "cors", signal: controller.signal })
      .then((res) => {
        clearTimeout(timeout);
        if (res.ok) {
          setSceneUrl(R2_URL);
        } else {
          setSceneUrl(FALLBACK_URL);
        }
      })
      .catch(() => {
        clearTimeout(timeout);
        setSceneUrl(FALLBACK_URL);
      });

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {!loaded && <SplineLoader />}

      <div className={`${styles.splineInner} ${loaded ? styles.visible : ""}`}>
        {sceneUrl && (
          <Suspense fallback={null}>
            <Spline
              scene={sceneUrl}
              onLoad={handleLoad}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
