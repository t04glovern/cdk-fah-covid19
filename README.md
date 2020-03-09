# CDK - Folding@Home (COVID-19)

Setup project dependencies and create a new CDK project

```bash
npm install -g aws-cdk
mkdir cdk-fah-covid19 && cd cdk-fah-covid19
cdk init --language typescript
```

## CDK dependencies

```bash
npm install @aws-cdk/aws-ecs
```

## Deploy

```bash
npm run watch
cdk deploy
```
