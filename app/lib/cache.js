let tourDatesCache = null;
let cacheTimestamp = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // Cache duration in milliseconds (1 day)

export async function getCachedTourDates(fetchTourDates) {
  const now = Date.now();

  if (tourDatesCache && (now - cacheTimestamp < CACHE_DURATION)) {
    // Return cached data if it's still valid
    return tourDatesCache;
  }

  // Fetch new data and update the cache
  tourDatesCache = await fetchTourDates();
  cacheTimestamp = now;
  return tourDatesCache;
}
