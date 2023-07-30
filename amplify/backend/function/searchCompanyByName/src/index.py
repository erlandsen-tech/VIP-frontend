import json
import os
import logging
from fmp import search_company_fmp
from common import get_ssm_client
from dotenv import load_dotenv




# TODO extract and prettify ...
def handler(event, context):
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    logger.info("Received event: " + json.dumps(event))
    print("Received event: " + json.dumps(event))
    # fetch secret from aws cred store
    fmp_api_key_name = os.environ['FMP_API_KEY']
    client = get_ssm_client()
    response = client.get_parameter(
        Name=fmp_api_key_name,
        WithDecryption=True
    )
    # Handle the event and perform desired operation
    company_list = search_company_fmp(api_key=response['Parameter']['Value'],
                                      name=event['arguments']['input'].get('name', None),
                                      exchange=event['arguments']['input'].get('exchange', None))
    if len(company_list) > 0:
        return {
            'statusCode': 200,  # Set the appropriate status code
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': {
                'Companies': company_list
            }
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
    response = {'Parameter': {'Value': os.environ['FMP_API_KEY']}}
    load_dotenv()
    event = {
        "typeName": "Query",
        "fieldName": "searchCompanyByName",
        "arguments": {
            "input": {
                "name": "Test"
            }
        }
    }
    handler(event, None)
