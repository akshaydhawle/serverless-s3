'use strict';
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const client = new S3Client({ region:'ap-south-1'});

module.exports.hello = async (event) => {
  console.log(JSON.stringify(event,null,4));

  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));

  // // Build the S3 URL
  // const s3Url = `https://${bucket}.s3.amazonaws.com/${key}`;
  const input = { // GetObjectRequest
    Bucket: bucket, // required
    Key: key, // required
  };
  const command = new GetObjectCommand(input);
  const downloadedFile = (await client.send(command)).Body;
  
  console.log('Downloaded file:', downloadedFile);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
