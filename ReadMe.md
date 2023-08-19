- install v3
> npm i -g serverless

> serverless --version

# config credentials 
> serverless config credentials --provider aws --key <key> --secret <secret> --profile <profile-name>

- check in folder
> open ~/.aws
- file name credentials default profile

# create new project 
> mkdir notes
> cd notes && serverless create -t aws-nodejs 
> npm init -y

# deploy package with profile 

> sls deploy --aws-profile <profile-name>