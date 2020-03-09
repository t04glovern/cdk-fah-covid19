import * as cdk from '@aws-cdk/core';
import ecs = require('@aws-cdk/aws-ecs');

import path = require('path');

export class CdkFahCovid19Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a Fargate cluster
    const cluster = new ecs.Cluster(this, 'cluster');

    // Define resource limits for task
    const taskDefinition = new ecs.FargateTaskDefinition(this, 'task', {
      memoryLimitMiB: 8192,
      cpu: 4096
    });

    // Add a container to the Task definition
    taskDefinition.addContainer('container', {
      image: ecs.ContainerImage.fromAsset(path.join(__dirname, '../docker/')),
      logging: new ecs.AwsLogDriver({ streamPrefix: 'covid19' })
    });

    // Create the service in our Fargate Cluster
    new ecs.FargateService(this, 'service', {
      cluster,
      taskDefinition
    });
  }
}
