import pandas as pd

path = "../data/itemData.json"


df = pd.read_json(path)

# We need to convert timestamp to datetime
df['datetime'] = pd.to_datetime(df['timestamp'], unit = 's')

# Remove unneeded tags
df.drop( columns= ['buyerName', 'hq', 'onMannequin'] )

