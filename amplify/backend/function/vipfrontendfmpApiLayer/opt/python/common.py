import boto3


def get_ssm_client(region_name: str = 'eu-west-1'):
    return boto3.client('ssm', region_name=region_name)
