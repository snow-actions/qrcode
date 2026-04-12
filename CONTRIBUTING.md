# Contributing

Welcome discussions, issues and PRs.

## Development

```shell
npm install
```

### Docker

While not required, you can also use [compose.yaml](compose.yaml) to execute commands.

```shell
docker compose run --rm node npm install
```

## Release

Execute [version-up.yml](.github/workflows/version-up.yml) which includes building package and updating version.
