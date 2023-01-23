# Sample to deploy React SSR on Lambda

This repository executes Server Side Rendering with AWS Lambda for React applications.
It usues AWS CDK to make the deployment.


## Requirements
- Node.js 12.x
- AWS CDK 1.72+
- Configured aws credentials

## Folder structure

- /cdk - code to deploy the solution
- /simple-ssr - React application created with the create-react-app tool.


## Deployment
- Clone git repository


- Run the following commands in your terminal window

    `cd ./cdk`

    `npm install`

    `npm run build`

    `cd ../simple-ssr`

    `npm install`

    `npm run build-all`

    `cd ../cdk`

    `cdk deploy`

- After successful deployment you will see an output variable

    **Lambda SSR URL** - for React App rendered by Lambda behind API Gateway

