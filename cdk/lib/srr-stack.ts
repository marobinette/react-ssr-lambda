// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import {
  Duration,
  CfnOutput,
  Stack,
  StackProps,
} from "aws-cdk-lib";

import * as lambda from "aws-cdk-lib/aws-lambda";
import * as apigw from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";

export class SsrStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const ssrFunction = new lambda.Function(this, "ssrHandler", {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset("../simple-ssr/server-build"),
      memorySize: 128,
      timeout: Duration.seconds(5),
      handler: "index.handler",
    });

    const ssrApi = new apigw.LambdaRestApi(this, "ssrEndpoint", {
      handler: ssrFunction,
    });

    new CfnOutput(this, "SSR API URL", { value: ssrApi.url });
  }
}
