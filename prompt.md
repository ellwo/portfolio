# TODO
1. **Layout Fixes**
   - Ensure all 3 sections are fully visible (no hidden titles/content)
   - Make responsive across devices (mobile/tablet/desktop)
   - Adjust avatar layout to wrap properly on smaller screens
   - Reduce badge sizes in desktop view

2. **Missing Starfield Implementation**
   - Add cosmic background with:
     - Multiple star sizes (small/medium/large)
     - Random twinkle animations
     - Shooting stars with fade-out trails
     - Optimized for 60fps performance

3. **Section Navigation**
   - Implement vertical scroll snapping between sections
   - Add visual scroll progress indicator
   - Allow smooth transitions (not instant jumps)

4. **Splash Screen**
   - Show spaceship animation on initial load
   - Animation options considering performance:
     ```markdown
     - **Option 1:** CSS/SVG Animations (Lightweight)
       - 60% smaller bundle size
       - Simple ship vector animation
       
     - **Option 2:** Lottie Web (Balance)
       - Rich animations with After Effects export
       - ~150kb library
       
     - **Option 3:** React-Three-Fiber (Heavy)
       - Full 3D experience
       - ~500kb+ bundle size
     ```
   - Recommended: **Lottie Web** for good balance
   - Trigger transition on:
     - Animation completion (3-4s)
     - User interaction (scroll/tap)

### Technical Implementation Plan:

**1. Layout Fixes** (`components/Layout.tsx`)
```tsx
// Responsive avatar container
<div className="
  w-full md:w-[40%] 
  flex flex-col 
  order-2 md:order-1
  ">
  <Avatar />
</div>

// Badge scaling formula (utils/sizing.ts)
export const getBadgeSize = (priority: number, isMobile: boolean) => {
  const base = isMobile ? 36 : 44;
  return `${base * (0.5 + priority/2)}px`;
};
```

**2. Starfield Background** (`components/Starfield.tsx`)
```tsx
// Optimized CSS star implementation
const Star = ({size, left, top, delay}) => (
  <div 
    className="absolute bg-white rounded-full animate-twinkle"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      left: `${left}%`,
      top: `${top}%`,
      animationDelay: `${delay}s`,
      boxShadow: '0 0 8px rgba(255,255,255,0.5)'
    }}
  />
);

// Shooting star using CSS clip-path
<div className="
  absolute 
  h-[2px] w-[80px]
  bg-gradient-to-r from-transparent via-white to-transparent
  animate-shooting-star
"/>
```

**3. Scroll Transitions** (`app/page.tsx`)
```tsx
// CSS Scroll Snap
<section className="
  h-screen w-screen
  overflow-y-scroll snap-y snap-mandatory
  scrollbar-hidden
">
  {sections.map((section) => (
    <div 
      key={section.id}
      className="snap-always snap-start h-screen"
    />
  ))}
</section>
```

**4. Splash Screen** (`components/Splash.tsx`)
```tsx
// Lottie implementation example
import Lottie from 'lottie-react';

const Splash = ({ onComplete }) => (
  <Lottie 
    animationData={spaceshipData}
    loop={false}
    onComplete={onComplete}
    className="fixed inset-0 z-50 bg-black"
  />
);

// Preload animation JSON
<link rel="preload" href="/spaceship.json" as="fetch" crossorigin="anonymous"/>
```

### Performance Optimizations:
1. **Animation Prioritization**
   - Use `will-change: transform/opacity` for animated elements
   - Implement `requestAnimationFrame` for shooting stars

2. **Asset Optimization**
   - Compress Lottie JSON with `lottie-minifier`
   - Use WebP images for project thumbnails

3. **Code Splitting**
   - Dynamic import for heavy components:
     ```tsx
     const Starfield = dynamic(() => import('./Starfield'), { 
       ssr: false,
       loading: () => <Skeleton />
     });
     ```