# Bundle Optimization Guide

This document describes the bundle optimization strategies implemented in this portfolio project.

## Optimizations Implemented

### 1. Code Splitting

The build configuration splits the bundle into multiple chunks:

- **vendor.js**: Core React libraries (react, react-dom)
- **icons.js**: React Icons library
- **index.js**: Application code

This allows browsers to cache vendor code separately from application code, improving load times on subsequent visits.

### 2. Lazy Loading Images

All images use the `LazyImage` component which:
- Only loads images when they're about to enter the viewport
- Shows a loading skeleton placeholder while images load
- Uses Intersection Observer API for efficient scroll detection
- Reduces initial page load time by deferring below-the-fold images

### 3. Removed Unused Dependencies

- Removed `framer-motion` (not being used in the codebase)
- Kept only essential dependencies

### 4. Optimized React Icons Imports

React Icons are imported from specific icon sets (e.g., `react-icons/fa`, `react-icons/si`) rather than the entire library, reducing bundle size.

### 5. Build Configuration

The Vite build is configured with:
- **Minification**: Using esbuild for fast, efficient minification
- **Chunk size warnings**: Set to 1000kb to monitor large chunks
- **Source maps**: Disabled in production for smaller bundle size
- **Dependency optimization**: Pre-bundling common dependencies

## Bundle Analysis

To analyze the bundle size and composition:

```bash
npm run analyze
```

This will:
1. Build the production bundle
2. Generate a visual report at `dist/stats.html`
3. Show the size of each chunk and module

## Current Bundle Sizes

After optimization (gzipped):
- **index.css**: ~5.14 KB
- **icons.js**: ~1.09 KB
- **vendor.js**: ~4.07 KB
- **index.js**: ~72.83 KB

**Total**: ~83 KB (gzipped)

## Performance Best Practices

1. **Images**: All images should be optimized before adding to the project
   - Use WebP format when possible
   - Compress images to reduce file size
   - Use appropriate dimensions (don't serve 4K images for thumbnails)

2. **Code Splitting**: Large features can be lazy-loaded using React.lazy()
   ```javascript
   const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
   ```

3. **Tree Shaking**: Import only what you need
   ```javascript
   // Good
   import { useState } from 'react';
   
   // Avoid
   import * as React from 'react';
   ```

4. **CSS**: CSS is automatically optimized and minified by Vite

## Monitoring Bundle Size

- Run `npm run build` regularly to check bundle sizes
- Use `npm run analyze` to visualize what's in your bundle
- Keep an eye on the chunk size warnings during build
- Consider code splitting if any chunk exceeds 500KB

## Future Optimizations

Potential future optimizations to consider:
- Implement route-based code splitting if adding more pages
- Use dynamic imports for heavy components
- Consider using a CDN for static assets
- Implement service worker for offline caching
- Use HTTP/2 server push for critical resources
