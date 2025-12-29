# Responsive Design Implementation

## Breakpoint Strategy

The portfolio uses a mobile-first responsive design approach with the following breakpoints:

### Breakpoint Definitions
- **Mobile**: 320px - 767px (default)
- **Small Mobile**: 320px - 480px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1279px
- **Large Desktop**: 1280px+

## Component-Specific Responsive Behavior

### Global Styles (`src/styles/global.css`)
- Container padding adjusts based on screen size
- Section padding reduces on mobile
- Touch-friendly minimum sizes (44px × 44px) for interactive elements on touch devices

### Navbar (`src/components/Navbar.css`)
**Mobile (≤768px)**:
- Hamburger menu appears
- Navigation links slide in from right as full-screen menu
- Touch-friendly tap targets (44px minimum)
- Brand logo size reduced

**Tablet (769px - 1023px)**:
- Reduced gap between nav links
- Adjusted padding

**Desktop (≥1024px)**:
- Full horizontal navigation
- Hover effects enabled

### Hero (`src/components/Hero.css`)
**Mobile (≤768px)**:
- Stacked button layout
- Full-width buttons with 48px minimum height
- Reduced padding
- Adjusted min-height to account for navbar

**Tablet (769px - 1023px)**:
- Moderate padding adjustments
- Max-width constraint for content

**Desktop (≥1024px)**:
- Side-by-side buttons
- Full viewport height

### About (`src/components/About.css`)
**Mobile (≤768px)**:
- Single column layout
- Centered image (max 300px)
- Reduced spacing
- Single column highlights list

**Tablet (769px - 968px)**:
- Single column layout
- Larger image (max 350px)
- Increased spacing

**Desktop (≥1024px)**:
- Two-column grid layout (image + text)
- Maximum spacing
- Multi-column highlights grid

### Skills (`src/components/Skills.css`)
**Mobile (≤480px)**:
- Single column category layout
- Smaller skill cards (80px minimum)
- Reduced icon sizes (1.75rem)
- Compact spacing

**Tablet (481px - 768px)**:
- Single column category layout
- Medium skill cards (90px minimum)
- Standard icon sizes (2rem)

**Desktop (≥1024px)**:
- Multi-column category grid
- Hover effects enabled

**Large Desktop (≥1400px)**:
- Fixed 3-column grid
- Maximum container width

### Projects (`src/components/Projects.css`)
**Mobile (≤768px)**:
- Single column grid
- Stacked project links
- Touch-friendly link heights (48px)
- Reduced card spacing

**Tablet (769px - 1023px)**:
- Two-column grid
- Side-by-side project links

**Desktop (≥1024px)**:
- Auto-fit grid (minimum 320px per card)
- Hover effects with image zoom
- Overlay effects

### Contact (`src/components/Contact.css`)
**Mobile (≤768px)**:
- Single column layout
- Stacked form and info sections
- Touch-friendly inputs (48px minimum)
- Reduced padding

**Tablet (769px - 968px)**:
- Single column layout
- Increased spacing

**Desktop (≥1024px)**:
- Two-column grid (info + form)
- Maximum spacing

### ThemeToggle (`src/components/ThemeToggle.css`)
**Mobile (≤768px)**:
- Larger button size (44px × 44px)
- Touch-friendly tap target

**Desktop (≥1024px)**:
- Standard size (40px × 40px)
- Hover scale effects

## Touch-Friendly Features

All interactive elements on touch devices have:
- Minimum tap target size of 44px × 44px (Apple HIG standard)
- Disabled hover effects that don't work on touch
- Active states for visual feedback
- Appropriate spacing to prevent accidental taps

## Accessibility Features

- Proper focus indicators on all interactive elements
- Reduced motion support for users with motion sensitivity
- Semantic HTML structure maintained across all breakpoints
- ARIA labels preserved on all screen sizes
- Sufficient color contrast in both light and dark themes

## Testing Recommendations

Test the portfolio at these specific widths:
- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 768px (iPad portrait)
- 1024px (iPad landscape)
- 1280px (Desktop)
- 1920px (Large desktop)

## Performance Considerations

- CSS uses efficient media queries
- No JavaScript required for responsive behavior
- Smooth transitions between breakpoints
- Optimized for both portrait and landscape orientations
