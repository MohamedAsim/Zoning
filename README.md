# Zoning Map

This repository hosts a single-page web application showing industrial zones in Egypt.

## Testing

There are no automated tests. You can manually verify the map features by opening the page in a browser.

## Running with a Local Server

External libraries referenced by `index.html` load more reliably when the file is served over HTTP. A quick way to do this is with `npx http-server` (requires Node.js):

```bash
npx http-server -p 8080
```

Navigate to `http://localhost:8080/index.html` to view the map.
