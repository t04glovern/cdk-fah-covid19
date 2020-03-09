#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkFahCovid19Stack } from '../lib/cdk-fah-covid19-stack';

const app = new cdk.App();
new CdkFahCovid19Stack(app, 'CdkFahCovid19Stack');
