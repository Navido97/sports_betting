import requests
import pandas as pd
import boto3
from collections import defaultdict
from datetime import datetime
import pytz

# ---------------------------------------
# STEP 1: Configuration
# ---------------------------------------
API_KEY = "6c13523c85c4fae3bb0d6d5ec7a89784"  
BUCKET_NAME = "soccer-data-bucket-nav"  
CSV_FILE_NAME = "worldcup_odds.csv"
S3_KEY = f"data/{CSV_FILE_NAME}"

# Central Timezone (Chicago = UTC-6/UTC-5 DST)
central_tz = pytz.timezone("America/Chicago")

# ---------------------------------------
# STEP 2: Fetch World Cup odds
# ---------------------------------------
url = "https://api.the-odds-api.com/v4/sports/soccer_fifa_world_cup_winner/odds/"
params = {
    "regions": "us",
    "markets": "outrights",
    "oddsFormat": "decimal",
    "apiKey": API_KEY
}

response = requests.get(url, params=params)
response.raise_for_status()
data = response.json()

# ---------------------------------------
# STEP 3: Parse and pivot odds data
# ---------------------------------------
odds_dict = defaultdict(dict)
last_updated_map = {}

for event in data:
    for bookmaker in event.get("bookmakers", []):
        bookmaker_name = bookmaker["title"]
        updated_time = bookmaker.get("last_update", "")
        
        # Convert to Central Time if timestamp exists
        if updated_time:
            utc_time = datetime.fromisoformat(updated_time.replace("Z", "+00:00"))
            central_time = utc_time.astimezone(central_tz).strftime("%Y-%m-%d %H:%M:%S %Z")
        else:
            central_time = ""

        for market in bookmaker.get("markets", []):
            if market["key"] == "outrights":
                for outcome in market.get("outcomes", []):
                    team = outcome["name"]
                    odds = outcome["price"]
                    odds_dict[team][bookmaker_name] = odds
                    last_updated_map[team] = central_time

# Convert to DataFrame
df = pd.DataFrame.from_dict(odds_dict, orient="index")
df.index.name = "Team"
df.reset_index(inplace=True)

# Add last_updated column (Central Time)
df["last_updated"] = df["Team"].map(last_updated_map)

# Sort teams by their best (lowest) odds
df["Best Odds"] = df.iloc[:, 1:-1].min(axis=1)
df = df.sort_values(by="Best Odds", ascending=True).drop(columns="Best Odds")

# ---------------------------------------
# STEP 4: Save CSV locally
# ---------------------------------------
df.to_csv(CSV_FILE_NAME, index=False)
print(f"✅ CSV saved: {CSV_FILE_NAME}")

# ---------------------------------------
# STEP 5: Upload to S3
# ---------------------------------------
s3 = boto3.client("s3")
s3.upload_file(CSV_FILE_NAME, BUCKET_NAME, S3_KEY)
print(f"✅ File uploaded to s3://{BUCKET_NAME}/{S3_KEY}")
