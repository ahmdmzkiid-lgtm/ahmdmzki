# Design: Update Portfolio Projects

## 1. Architecture Overview

The Projects component follows a component-based architecture with conditional rendering based on device capabilities. The design separates concerns between data management, device detection, and presentation logic.

### 1.1 Component Hierarchy
```
Projects (Main Container)
├── TiltCard (Desktop Wrapper)
│   └── Project Card Content
├── MobileExpandableCard (Mobile Wrapper)
│   └── Expandable Project Content
└── ProjectSkeleton (Loading State)
```

### 1.2 Key Design Patterns
- **Conditional Rendering**: Different UI components based on touch device detection
- **Composition**: Reusable wrapper components (TiltCard, MobileExpandableCard)
- **Progressive Enhancement**: Base functionality works, enhanced interactions on capable devices
- **Lazy Loading**: Images load on-demand with loading attribute

## 2. Data Model

### 2.1 Project Interface
```typescript
interface Project {
  title: string
  category?: string
  description: string
  image?: string
  tech: string[]
  github?: string
  live?: string
  isCompleted: boolean
}
```

### 2.2 Data Location
Projects are defined as a constant array within the component. This approach:
- Keeps data close to presentation logic
- Simplifies updates (no external API calls)
- Enables easy addition/modification of projects
- Maintains type safety with TypeScript

## 3. Component Design

### 3.1 Device Detection Hook
```typescript
useIsTouchDevice()
```
- Detects touch capability on mount
- Returns boolean for conditional rendering
- Checks both 'ontouchstart' and maxTouchPoints

### 3.2 TiltCard Component (Desktop)
**Purpose**: Provides 3D tilt effect on mouse movement

**Features**:
- Motion values for mouse position tracking
- Spring animations for smooth tilt
- Radial gradient glow following cursor
- Perspective transform for 3D effect

**Interaction Flow**:
1. Mouse enters → Enable tracking
2. Mouse moves → Update tilt and glow position
3. Mouse leaves → Reset to neutral position

### 3.3 MobileExpandableCard Component
**Purpose**: Provides tap-to-expand interaction for mobile

**Features**:
- Collapsed state shows image and title
- Expanded state reveals description, tech stack, and links
- Smooth height animation on expand/collapse
- Chevron icon rotates to indicate state

**Interaction Flow**:
1. Tap card → Toggle expanded state
2. AnimatePresence handles enter/exit animations
3. Content height animates automatically

### 3.4 ProjectSkeleton Component
**Purpose**: Loading placeholder during initial render

**Features**:
- Mimics final layout structure
- Pulse animation for loading indication
- Matches card aspect ratio and spacing

## 4. Styling Strategy

### 4.1 Utility Classes
- `glass-panel`: Glassmorphism effect for cards
- `tracking-tighter-pro`: Custom tight letter spacing
- Tailwind utilities for responsive design

### 4.2 Color Palette
- Background: `bg-black`
- Cards: `bg-zinc-900/50` with glass effects
- Text Primary: `text-white`
- Text Secondary: `text-zinc-400`
- Text Muted: `text-zinc-500`
- Accents: `bg-white/[0.04]` with borders

### 4.3 Responsive Breakpoints
- Mobile: < 768px (single column, expandable cards)
- Tablet/Desktop: ≥ 768px (two columns, tilt cards)

## 5. Animation Design

### 5.1 Entry Animations
- Fade in + slide up on scroll into view
- Staggered delays for sequential appearance
- Easing: `[0.16, 1, 0.3, 1]` (custom cubic-bezier)

### 5.2 Interaction Animations
- Tilt: Spring physics with 300 stiffness, 30 damping
- Expand/Collapse: 0.4s duration with custom easing
- Hover: 0.3s opacity transitions
- Scale: Active state scales to 0.98

### 5.3 Loading Animation
- Pulse effect on skeleton elements
- 500ms delay before showing content

## 6. Accessibility Considerations

### 6.1 Touch Targets
- Minimum 44px height for mobile buttons
- Adequate spacing between interactive elements

### 6.2 Semantic HTML
- `<section>` for main container with id="projects"
- `<button>` for expandable card triggers
- `<a>` for external links with proper attributes

### 6.3 ARIA Attributes
- `aria-expanded` on expandable cards
- `aria-label` on icon-only buttons
- `rel="noopener noreferrer"` on external links

### 6.4 Focus Management
- `focus:outline-none` with `focus-visible:ring-2`
- Visible focus indicators for keyboard navigation

## 7. Update Process

### 7.1 Adding New Projects
To add a new project, append to the projects array:

```typescript
const projects = [
  // ... existing projects
  {
    title: 'New Project',
    category: 'Category',
    description: 'Description text',
    image: '/image/project.png',
    tech: ['Tech1', 'Tech2'],
    github: 'https://github.com/...',
    live: 'https://...',
    isCompleted: true
  }
]
```

### 7.2 Image Management
1. Add image to `/public/image/` directory
2. Reference with path `/image/filename.png`
3. Use descriptive filenames (lowercase, no spaces)

### 7.3 Updating Existing Projects
1. Locate project in array by title
2. Modify desired properties
3. Ensure isCompleted status is accurate
4. Update image path if changed

### 7.4 Marking Projects as Ongoing
Set `isCompleted: false` to:
- Hide image (show "In Progress" placeholder)
- Display "Ongoing" badge
- Hide GitHub and Live Demo links

## 8. Performance Optimizations

### 8.1 Rendering Optimizations
- Conditional rendering prevents unnecessary DOM nodes
- `viewport={{ once: true }}` prevents re-animation on scroll
- `loading="lazy"` on images defers loading

### 8.2 Animation Performance
- Transform and opacity for GPU acceleration
- Spring physics calculated by Framer Motion
- Pointer-events-none on overlay elements

### 8.3 State Management
- Minimal state (loading, expanded, hover)
- Local state in components (no global state needed)
- useEffect cleanup for timers

## 9. Testing Considerations

### 9.1 Manual Testing Checklist
- [ ] Projects display correctly on mobile
- [ ] Projects display correctly on desktop
- [ ] Touch detection works on mobile devices
- [ ] Tilt effect works on desktop
- [ ] Expand/collapse works on mobile
- [ ] All links open in new tabs
- [ ] Images load correctly
- [ ] Skeleton shows during loading
- [ ] Animations are smooth
- [ ] Keyboard navigation works

### 9.2 Browser Testing
- Chrome/Edge (Chromium)
- Firefox
- Safari (iOS and macOS)
- Mobile browsers (iOS Safari, Chrome Android)

### 9.3 Accessibility Testing
- Screen reader compatibility
- Keyboard-only navigation
- Focus visible indicators
- Touch target sizes

## 10. Future Enhancements

### 10.1 Potential Improvements
- External JSON file for project data
- CMS integration for dynamic updates
- Project filtering by technology
- Search functionality
- Pagination for large project lists
- Project detail modal/page

### 10.2 Technical Debt
- Consider extracting project data to separate file
- Add TypeScript interface export for reuse
- Consider adding unit tests for components
- Add E2E tests for interactions
