from pytrends.request import TrendReq
from pytrends.dailydata import getTimeframe
from datetime import datetime
import pandas as pd
from time import sleep

hip_hop = ['Keith Ape', 'Kohh', 'Vince Staples', 'Higher Brothers']
pop = ['BTS', 'AKB48', 'Maroon 5']
rock = []
REGIONS = ['', 'KR', 'JP', 'US', 'TW']
MUSIC = 35  # SEE: https://github.com/pat310/google-trends-api/wiki/Google-Trends-Categories
GPROP = 'youtube'

def get_trend_data(keywords):
    getter = TrendReq(backoff_factor=0.4)
    # Interest Over Time Range
    frame = getTimeframe(datetime(2015, 1, 1, 0), datetime(2019, 6, 1, 0))
    print(frame)

    all_df = pd.DataFrame()

    for region in REGIONS:
        getter.build_payload(keywords, timeframe=frame, cat=MUSIC, geo=region, gprop=GPROP)
        df = getter.interest_over_time()
        df['GROUP'] = 'ALL'
        region = 'GLOBAL' if region == '' else region
        df['REGION'] = region
        df = df.drop(columns='isPartial')
        all_df = all_df.append(df)
        print('REGION AND GROUPING:', region, 'ALL')

    print(list(all_df))
    all_df.to_csv('../data/all_hiphop.csv')

    ind_df = pd.DataFrame()
    for region in REGIONS:
        for kw in keywords:
            getter.build_payload([kw], timeframe=frame, cat=MUSIC, geo=region, gprop=GPROP)
            df = getter.interest_over_time()
            df['GROUP'] = kw
            df['REGION'] = region if region != '' else 'GLOBAL'
            df.rename(columns={kw:'Interest'}, inplace=True)
            df = df[['GROUP', 'Interest', 'REGION']]
            ind_df = ind_df.append(df)
            print(list(df))
            print('REGION AND GROUPING:', region, kw)
            sleep(10)

    ind_df.to_csv('../data/hiphop_by_artist.csv')

def hourly_test(keywords):
    getter = TrendReq(backoff_factor=0.2)
    for region in REGIONS:
        print(region)
        df = getter.get_historical_interest(keywords,
                year_start=2018, month_start=1, day_start=1, hour_start=0,
                year_end=2018, month_end=2, day_end=1, hour_end=0, cat=0,
                geo=region, gprop='youtube', sleep=60)
        df.to_csv('hourly_test.csv')

if __name__ == '__main__':
    get_trend_data(hip_hop)
    #hourly_test(hip_hop)

