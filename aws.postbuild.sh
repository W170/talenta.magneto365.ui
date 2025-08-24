#!/bin/bash

check_environment()
{
  source .env

  if [ ! -d "./dist/assets" ]
  then
    echo "The directory ./dist/assets does NOT exist; compile the library first with the yarn rollup command."
  fi

  if ! command -v aws --version &> /dev/null
  then
    echo "aws cli could not be found"
    exit
  fi

  if [ -z ${AWS_ACCESS_KEY_ID} ]
  then
    echo "AWS_ACCESS_KEY_ID is not set"
    exit
  fi

  if [ -z ${AWS_SECRET_ACCESS_KEY} ]
  then
    echo "AWS_SECRET_ACCESS_KEY is not set"
    exit
  fi

  if [ -z ${ASSETS_CDN_CLOUDFRONT_ID} ]
  then
    echo "ASSETS_CDN_CLOUDFRONT_ID is not set"
    exit
  fi
}

upload_assets_to_cdn()
{
  source .env
  export AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
  export AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}

  echo "Pushing assets into s3://$ASSETS_CDN_S3_BUCKET"
  aws s3 sync --delete dist/assets s3://${ASSETS_CDN_S3_BUCKET}
  echo "Propagating assets in CDN"
  aws cloudfront create-invalidation --distribution-id $ASSETS_CDN_CLOUDFRONT_ID --paths "/lib/assets/*" 1> /dev/null
}

check_environment
upload_assets_to_cdn