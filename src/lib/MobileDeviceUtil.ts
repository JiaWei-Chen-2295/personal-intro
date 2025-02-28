/**
 * Checks if the current device is a mobile device.
 * @returns {boolean} True if the device is a mobile device, false otherwise.
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
  )
}
