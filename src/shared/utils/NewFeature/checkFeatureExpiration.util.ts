type FeatureCheckResult = {
  expired: boolean
  noFeatureFound: boolean
  message: string | null
}

function makeResult(expired: boolean, noFeatureFound: boolean, message: string | null): FeatureCheckResult {
  return { expired, noFeatureFound, message }
}

export function checkFeatureExpiration(featureName: string): FeatureCheckResult {
  if (typeof window === 'undefined') {
    return makeResult(false, true, 'window.notAvailable')
  }

  const features = window.__magneto_features
  if (!features) {
    return makeResult(false, true, 'window.__magneto_features.notAvailable')
  }

  const feature = features[featureName]
  if (!feature) {
    return makeResult(false, true, `feature.${featureName}.notFound`)
  }

  const { day, month, year } = feature.expires
  const expiresAt = new Date(year, month - 1, day)
  const now = new Date()

  if (isNaN(expiresAt.getTime())) {
    return makeResult(false, true, `feature.${featureName}.invalidDate`)
  }

  if (expiresAt < now) {
    return makeResult(true, false, null)
  }

  return makeResult(false, false, null)
}
