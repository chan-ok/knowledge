### top down

```bash
npx depcruise --include-only '^src/vue' {target_folder_or_file} --output-type dot | {graphviz_path}/bin/dot -T svg > {svg_filename}.svg
```

### bottom-up
```shell
npx depcruise ...
```