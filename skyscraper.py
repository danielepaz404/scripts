import requests
import pandas as pd

def read_from_url(url):
    res = requests.get(url)
    tables = pd.read_html(res.text, skiprows=1)
    return process_data(tables[0])

def process_data(data):
    x_coords = data[0]
    y_coords = data[2]
    chars = data[1]

    multiindex = pd.MultiIndex.from_arrays([x_coords, y_coords])
    dict_df = pd.DataFrame(list(chars), index=multiindex).to_dict()

    return max(x_coords), max(y_coords), dict_df.get(0)

def print_grid(x_max, y_max, data):
    for y in range(y_max, -1, -1):
        for x in range(x_max):
            current = data.get((x, y))
            
            if current is None:
                current = " "

            print(current, end="")

        print()


def fetch_and_print_data(url):
    x_max, y_max, data = read_from_url(url)

    print_grid(x_max, y_max, data)

url = 'https://docs.google.com/document/d/e/2PACX-1vQE2s6jshoXfQTIkFnKzKXZa2zdJq43tL5cD4-M9TZuYetrPUmj4f6vZCDRrJyDEUYACB8SHXG-CLm8/pub'
fetch_and_print_data(url)