import requests
import pandas as pd
import boto3
from datetime import datetime
import pytz

# --- CONFIGURATION ---
API_KEY = "6c13523c85c4fae3bb0d6d5ec7a89784"
BUCKET_NAME = "soccer-data-bucket-nav"
CSV_FILE_NAME = "worldcup_qualifiers_south_america.csv"
S3_KEY = f"data/{CSV_FILE_NAME}"
SPORT_KEY = "soccer_fifa_world_cup_qualifiers_south_america"
MARKET_KEY = "h2h"  # head-to-head matches

# --- FETCH ODDS ---
url = f"https://api.the-odds-api.com/v4/sports/{SPORT_KEY}/odds/"
params = {
    "regions": "us",
    "markets": MARKET_KEY,
    "oddsFormat": "decimal",
    "apiKey": API_KEY
}

response = requests.get(url, params=params)
response.raise_for_status()
data = response.json()

# --- PARSE DATA ---
rows = []
for match in data:
    for bookmaker in match.get("bookmakers", []):
        for market in bookmaker.get("markets", []):
            if market["key"] == MARKET_KEY:
                for outcome in market.get("outcomes", []):
                    rows.append({
                        "Match": match.get("home_team") + " vs " + match.get("away_team"),
                        "Team": outcome["name"],
                        "Odds": outcome["price"],
                        "Bookmaker": bookmaker["title"],
                        "Commence Time UTC": match["commence_time"],
                        "Last Update UTC": bookmaker["last_update"]
                    })

# ---- CREATE FLAT DATAFRAME ----
df = pd.DataFrame(rows)

# ---- CONVERT TO WIDE FORMAT ----
pivot_df = df.pivot_table(
    index=["Match", "Team", "Commence Time UTC"],
    columns="Bookmaker",
    values="Odds"
).reset_index()

# ---- Add Central Time and unified last_updated ----
df["Last Update UTC"] = pd.to_datetime(df["Last Update UTC"], utc=True)
df["Last Update Central Time"] = df["Last Update UTC"].dt.tz_convert("US/Central")
last_updated = df["Last Update Central Time"].max()
pivot_df["last_updated"] = last_updated

# ---- SAVE TO CSV ----
pivot_df.to_csv(CSV_FILE_NAME, index=False)
print(f"✅ CSV saved: {CSV_FILE_NAME}")

# ---- UPLOAD TO S3 ----
s3 = boto3.client("s3")
s3.upload_file(CSV_FILE_NAME, BUCKET_NAME, S3_KEY)
print(f"✅ File uploaded to s3://{BUCKET_NAME}/{S3_KEY}")
