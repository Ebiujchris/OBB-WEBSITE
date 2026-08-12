# OBB Website - Project Structure

## Current Pages

### Public Pages
- `/` - Homepage with hero, languages showcase, cultural categories, and latest news
- `/about` - About Obudhingiya Bwa Bwamba
- `/languages` - Overview of three languages
  - `/languages/lubwisi` - Lubwisi language page
  - `/languages/lwamba` - Lwamba language page
  - `/languages/luvanuma` - Luvanuma language page
- `/culture` - Culture & Heritage overview
- `/history` - Historical background
- `/news` - News articles listing
- `/events` - Upcoming and past events
- `/contact` - Contact form and information

## Components

- `Header.tsx` - Navigation with mobile menu
- `Footer.tsx` - Footer with links and copyright

## Design System

### Colors
- Burgundy: `#6B1E2E` - Primary, headers, navigation
- Gold: `#C99A2E` - Accents, buttons, highlights
- Forest Green: `#1F4D3A` - Secondary sections
- Ivory: `#F8F3E7` - Background
- Charcoal: `#242424` - Text
- Earth Brown: `#7A5C3E` - Secondary backgrounds

### Typography
- Headers: Bold, Burgundy or Forest Green
- Body: Regular, Charcoal
- Links: Gold with Burgundy hover

## Next Steps

### Content Pages to Build
1. Cultural content pages:
   - `/culture/stories`
   - `/culture/proverbs`
   - `/culture/riddles`
   - `/culture/songs`
   - `/culture/poems`
   - `/culture/lullabies`
   - `/culture/names`

2. Our People section:
   - `/our-people/clans`
   - `/our-people/leaders`

3. Individual content detail pages (dynamic routes)

### Backend Integration
1. Set up NestJS API
2. PostgreSQL database with Prisma
3. File storage (Cloudinary/R2)
4. Authentication system
5. Admin dashboard

### Features to Add
- Search functionality
- Audio player for songs/lullabies
- Image galleries
- Language filtering
- Content categories/tags
- Related content suggestions
- Social sharing
