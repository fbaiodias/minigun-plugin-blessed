# minigun-plugin-blessed

This [Minigun](https://artillery.io/minigun) plugin tries to give you a fancy output of the stats produced by Minigun in real-time.

## Usage

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

## Development
```bash
npm install

npm run build # builds `src` into `lib`

# if you `npm link` and have minigun installed globally,
# you can try it out with the demo config:
minigun run demo/minigun-config.json -q
```
