# Odds Maker Dashboard

A web dashboard for tracking soccer betting odds across major international tournaments. Built with automated data collection and free-tier cloud services.

## Features

- Real-time odds from multiple sportsbooks (World Cup, Gold Cup, Club World Cup)
- Interactive Tableau dashboards with daily automated updates
- Responsive web interface hosted on AWS EC2
- Cost-efficient pipeline using AWS S3, Google Sheets API, and Tableau Public

## Architecture

1. Python scripts fetch odds from the-odds-api.com
2. Data stored in AWS S3, pushed to Google Sheets via API
3. Tableau Public dashboards connect to Google Sheets for live data
4. Static HTML site hosted on EC2 with embedded visualizations
5. Daily cron jobs automate the entire pipeline

## Quick Start

**Requirements:** Python 3.7+, AWS account, Google Sheets API access

```bash
pip install requests pandas boto3 pytz
```

**Configuration:** Update API keys and bucket names in Python scripts
```python
API_KEY = "your_odds_api_key"
BUCKET_NAME = "your_s3_bucket_name"
```

**Run Scripts:**
```bash
python concacaf_gold_cup.py
python copa_libertadores.py
```


## Live Links

- **Website:** https://oddsmaker.duckdns.org
- **Tableau Dashboards:**
  - [World Cup Winners] https://public.tableau.com/app/profile/navid.istanbullu/viz/WorldCupOdds/Dashboard1
  - [Concacaf Gold Cup] https://public.tableau.com/app/profile/navid.istanbullu/viz/ConcacafGoldCup/Dashboard1
  - [Club World Cup] https://public.tableau.com/views/ClubWorldCup/Dashboard1)](https://public.tableau.com/app/profile/navid.istanbullu/viz/ClubWorldCup/Dashboard1

## Automation

Set up daily cron jobs for automatic updates:
```bash
0 6 * * * /usr/bin/python3 /path/to/concacaf_gold_cup.py
```

## Data Flow

API Fetch → CSV Processing → S3 Upload → Google Sheets → Tableau Refresh → Web Display

The entire system runs on free-tier services: AWS S3/EC2, Google Sheets API, Tableau Public, and The Odds API free quota.
