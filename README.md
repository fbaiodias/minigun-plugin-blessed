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

npm run demo # builds src and runs minigun

npm run build # builds `src` into `lib`
```
