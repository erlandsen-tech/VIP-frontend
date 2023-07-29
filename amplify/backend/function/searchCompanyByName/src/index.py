import json
import logging
from fmp import search_company_fmp

def handler(event, context):
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)
    event_json_body = json.loads(event['body'])
    logger.info("Received event: " + json.dumps(event))
    print("Received event: " + json.dumps(event))
    # Handle the event and perform desired operations
    company_list = search_company_fmp(name=event_json_body['name'], exchange=event_json_body['exchange'])
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
        'body': json.dumps({
            "name": "Apple",
            "exchange": "NASDAQ"
        })
    }
    handler(event, None)
