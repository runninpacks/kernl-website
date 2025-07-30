
<summary_title>Reviews</summary_title>

<image_analysis>
Core Purpose:
- Display product/service reviews and ratings
- Enable users to submit new reviews
- Sort and filter review content
- Show aggregate rating metrics

Key Components:
- Review list container
- Individual review cards
- Star rating display
- Filter/sort controls
- Review submission form
- Pagination controls
- Rating summary/statistics

Layout Structure:
- Rating summary at top
- Filter/sort controls below summary
- Scrollable review list
- Review form in modal/separate section
- Responsive grid/list layout
- Mobile-first approach

Component Architecture:
- ReviewsContainer (parent)
- RatingSummary
- FilterControls  
- ReviewList
- ReviewCard
- ReviewForm
- Pagination

Design System:
- Star icons (filled/empty states)
- Rating colors (green/yellow/red)
- Card-based layout
- Consistent padding (16px/24px)
- Clear typography hierarchy

Style Architecture:
- CSS Modules or Styled Components
- Flexbox/Grid for layouts
- Mobile breakpoints (480px, 768px, 1024px)
- Smooth transitions for sorting/filtering

Quality Assurance:
- Unit tests for rating calculations
- Integration tests for form submission
- A11y compliance (ARIA labels, keyboard nav)
- Lazy loading for performance
- Error handling for API failures

Data Requirements:
- Review content (text, rating, date, author)
- User authentication state
- Rating aggregation data
- Sort/filter preferences
- Pagination metadata
</image_analysis>

<development_planning>
Component Architecture:
- Component breakdown
- State management
- Data flow
</development_planning>