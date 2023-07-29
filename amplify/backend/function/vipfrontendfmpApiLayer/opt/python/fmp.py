import requests
from constants import FMP_BASE_URL


# Used to get the toolkit that includes some API calls from FMP
def get_dividend_history_for_symbol(symbol: str, api_key: str) -> dict:
    url = f"{FMP_BASE_URL}historical-price-full/stock_dividend/{symbol}?apikey={api_key}"
    return requests.get(url).json()


def search_company_fmp(api_key: str, name: str = "", exchange: str = "") -> [dict]:
    url = f"{FMP_BASE_URL}search"
    params = {
        "query": name,
        "exchange": exchange,
        "apikey": api_key
    }
    response = requests.get(url, params=params)
    data = response.json()
    return data
