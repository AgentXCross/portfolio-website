/*
garminStats.ts

Extracts stats from the Garmin CSV exports in garmin-data/.

1. Total Running Activities ({Integer} Activities)
2. Total Running Distance ({Number} km)
3. Strava Streak ({Integer} Weeks)
4. Total Running Ascent ({Integer} m)
5. Total Gym Time ({Number} h)
6. Total Running Time ({Number} h)
*/

import progressSummaryRaw from "../../../garmin-data/Progress Summary.csv?raw";
import progressSummaryGymRaw from "../../../garmin-data/Progress Summary Gym.csv?raw";
import stravaStreak from "../../../garmin-data/Streak.csv?raw";


function parseSummaryCSV(raw: string): Record<string, string> {
  const stats: Record<string, string> = {};

  for (const line of raw.trim().split(/\r?\n/)) {
    const parts = line.split('","'); // split on ","

    if (parts.length !== 2) continue;

    const key = parts[0].replaceAll('"', ""); // remove any remaining quotations
    const value = parts[1].replaceAll('"', "");

    stats[key] = value;
  }

  return stats;
}

// "1358:04:17 h:m:s" -> 1358.07
function hmsToHours(hms: string): number {
  const [h, m, s] = hms.replace(" h:m:s", "").split(":").map(Number);
  return Math.round((h + m / 60 + s / 3600) * 100) / 100;
}

// "10,895.57 km" -> 10895.57
function toFloat(rawValue: string): number {
  return parseFloat(rawValue.replaceAll(",", ""));
}

// "1878" -> 1878
function toInt(rawValue: string): number {
  return parseInt(rawValue.replaceAll(",", ""));
}


const running = parseSummaryCSV(progressSummaryRaw);
const gym = parseSummaryCSV(progressSummaryGymRaw);
const strava = parseSummaryCSV(stravaStreak);

export const garminStats = {
  totalRunningActivities: toInt(running["Activities"]),
  totalRunningDistancekm: toFloat(running["Total Distance"]),
  stravaStreakweeks: toInt(strava["Streak"]),
  totalAscentm: toInt(running["Total Ascent"]),
  totalGymTimeh: hmsToHours(gym["Total Activity Time"]),
  totalRunningTimeh: hmsToHours(running["Total Activity Time"]),
};
