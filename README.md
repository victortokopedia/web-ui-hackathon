# 🐧 lite-web-ui-hackathon

This is a web project bootstrapped with [create-skipper-app](https://github.com/tokopedia/skipper-web-framework/packages/1089406).

![By Tokopedia](https://img.shields.io/badge/WPE-Tokopedia-brightgreen.svg) [![CodeQL](https://github.com/tokopedia/tokopedia-lite-web-ui-hackathon/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/tokopedia/tokopedia-lite-web-ui-hackathon/actions/workflows/codeql-analysis.yml)
![Coverage](https://img.shields.io/badge/coverage-10%25-brightgreen)

## Getting Started

This service uses Node 16 and pnpm 7. See [Getting Started](https://tokopedia.atlassian.net/l/cp/mTeQqDJP) for more details.

## Learn more about Skipper Framework

Read on our [Confluence](https://tokopedia.atlassian.net/wiki/spaces/PL/pages/1810076096/Skipper+-+Web+Framework).

## Deploy To fly.io

From your local machine, make sure already execute `pnpm run build` and `NODE_ENV=production pnpm install --frozen-lockfile --prod && pnpm store prune` before execute commands below:

1. Download binary from https://fly.io/docs/hands-on/install-flyctl/
2. Login to fly with `flyctl auth login`
3. Create new resource `fly launch`
3. Deploy service `fly deploy`

---

Maintained by WPE, generated on 4/10/2023
