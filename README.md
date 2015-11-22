# minigun-plugin-blessed

This [Minigun](https://artillery.io/minigun) plugin tries to give you a fancy output of the stats produced by Minigun in real-time.

![demo](https://raw.githubusercontent.com/xicombd/minigun-plugin-blessed/master/demo.gif)

## Usage
Install the plugin globally:

```bash
npm install minigun-plugin-blessed -g
```

Enable the plugin by adding it in your test script's `config.plugins` section:

```javascript
{
  "config": {
    // ...
    "plugins": {
      "blessed": {}
    }
  }
  // ...
}
```

Run your test, using the quiet (`-q`) option:

```bash
minigun run your-config-file.json -q
```


## Development
```bash
npm install

npm run build # builds `src` into `lib`

npm run demo # uses random data

# if you `npm link` and have minigun installed globally,
# you can try it out with the demo config:
minigun run demo/minigun-config.json -q
```
