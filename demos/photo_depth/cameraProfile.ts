import {
  DEVICE_CAMERA_PARAMETERS,
  detectDeviceCameraTarget,
  getUrlParameter,
} from 'xrblocks';

/** Resolve the camera profile used by this app's calibration and marker tracking. */
export function resolveCameraProfile(configured?: string): string {
  const requested = getUrlParameter('camera')?.trim();
  if (requested) {
    const profile = Object.keys(DEVICE_CAMERA_PARAMETERS).find(
      (key) => key.toLowerCase() === requested.toLowerCase()
    );
    if (profile) return profile;
    console.warn(
      `[photo-depth] Ignoring unknown camera profile "${requested}".`
    );
  }
  if (configured) {
    if (Object.hasOwn(DEVICE_CAMERA_PARAMETERS, configured)) return configured;
    console.warn(
      `[photo-depth] Ignoring unknown camera profile "${configured}".`
    );
  }
  return detectDeviceCameraTarget();
}
