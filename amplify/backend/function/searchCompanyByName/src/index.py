import json
import os
import logging
from fmp import search_company_fmp
from common import get_ssm_client

# TODO get secret from secret store ...
def handler(event, context):
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    logger.info("Received event: " + json.dumps(event))
    print("Received event: " + json.dumps(event))
    # fetch secret from aws cred store
    FMP_API_KEY_NAME = os.environ['FMP_API_KEY']
    client = get_ssm_client()
    response = client.get_parameter(
        Name=FMP_API_KEY_NAME,
        WithDecryption=True
    )
    # Handle the event and perform desired operations
    company_list = search_company_fmp(api_key=response['Parameter']['Value'], name=event['body']['name'], exchange=event['body']['exchange'])
    if len(company_list) > 0:
        return {
            'statusCode': 200,  # Set the appropriate status code
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': json.dumps({
                'Companies': company_list
            })
        }
    else:
        return {
            'statusCode': 404,  # Set the appropriate status code
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': 'Company not found'
        }


if __name__ == "__main__":
    event = {
        'body': {
            "name": "Apple",
            "exchange": "NASDAQ"
        }
    }
    handler(event, None)
