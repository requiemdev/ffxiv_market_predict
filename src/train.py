import os
import numpy as np
import pandas as pd
import matplotlib.pyplot as plot
# We want to use RandomForestRegressor for a general non-linear regression model
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import KFold
from sklearn.metrics import root_mean_squared_error

# Get path of item data jason
currentDir = os.path.dirname(__file__) 
path = os.path.join(currentDir, "../data/cache/itemData.json")  # Relative path to the data file
df = pd.read_json(path)
print("Item data read")

# We need to convert timestamp to datetime
df['datetime'] = pd.to_datetime(df['timestamp'], unit = 's')
df.set_index('datetime', inplace=True)

# Remove unneeded tags
df.drop( columns= ['buyerName', 'hq', 'onMannequin'] )

#Resample the data to group average price per day
dfResampled = df['pricePerUnit'].resample('D').mean()

# We are making a time series regression, so we should
# account for prices up to a week ago, to account for weekly trends
dfWeek = dfResampled.to_frame('pricePerUnit')
dfWeek['lag_1'] = dfWeek['pricePerUnit'].shift(1)
dfWeek['lag_2'] = dfWeek['pricePerUnit'].shift(2)
dfWeek['lag_3'] = dfWeek['pricePerUnit'].shift(3)
dfWeek['lag_4'] = dfWeek['pricePerUnit'].shift(4)
dfWeek['lag_5'] = dfWeek['pricePerUnit'].shift(5)
dfWeek['lag_6'] = dfWeek['pricePerUnit'].shift(6)

# Set x and y axes
X = dfWeek[['lag_1', 'lag_2', 'lag_3', 'lag_4', 'lag_5', 'lag_6']]
y = dfWeek['pricePerUnit']

# Get rid of rows with invalid values due to shifting
dfWeek.dropna(inplace = True)

model = RandomForestRegressor()

kf = KFold(n_splits = 10, shuffle = True)

rmseScores = []
for train, test in kf.split(X):
    X_train, X_test = X.iloc[train], X.iloc[test]
    y_train, y_test = y.iloc[train], y.iloc[test]
    
    # Fit the train data to the model
    model.fit(X_train, y_train)
    
    # Use the model to predict prices
    y_pred = model.predict(X_test)
    
    # Find the RMSE to evaluate the fit
    rmse = root_mean_squared_error(y_test, y_pred)
    rmseScores.append(rmse)

print(f"Mean RMSE: {np.mean(rmseScores)}")

