export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  category: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Sustainable Fashion: Building a Conscious Wardrobe',
    excerpt: 'Learn how to create a stylish, sustainable wardrobe that reflects your values while staying on-trend.',
    content: `
# Sustainable Fashion: Building a Conscious Wardrobe

Fashion doesn't have to come at the cost of our planet. At Nova-Wear, we believe in creating beautiful clothing that's both stylish and sustainable. Here's how you can build a conscious wardrobe that makes you look good and feel even better.

## Start with Quality Basics

The foundation of any sustainable wardrobe is quality basics that will last for years. Invest in:

- **Classic white t-shirts** in organic cotton
- **Well-fitted jeans** in durable denim
- **Neutral sweaters** that work with everything
- **Versatile blazers** for any occasion

## Choose Natural Materials

When shopping, look for clothing made from:
- **Organic cotton** - grown without harmful pesticides
- **Linen** - biodegradable and gets better with age
- **Wool** - renewable and naturally odor-resistant
- **Tencel** - made from sustainably sourced wood

## Care for Your Clothes

Extend the life of your garments with proper care:

### Washing Tips
- Wash in cold water to save energy and prevent shrinking
- Use eco-friendly detergents
- Air dry when possible to reduce energy consumption
- Wash clothes inside out to protect colors and prints

### Storage
- Use cedar blocks instead of mothballs
- Store on wooden hangers to maintain shape
- Keep clothes in a cool, dry place
- Rotate seasonal items properly

## Quality Over Quantity

Instead of buying 10 cheap items, invest in 3 high-quality pieces that will:
- Last longer
- Fit better
- Look more expensive
- Cost less per wear

## Mix and Match

Build a capsule wardrobe where every piece works with multiple others. A good rule of thumb: each new item should work with at least 3 pieces you already own.

## Support Ethical Brands

Research brands before you buy. Look for companies that:
- Pay fair wages to workers
- Use sustainable materials
- Have transparent supply chains
- Give back to their communities

## Second-Hand Shopping

Thrifting and vintage shopping are great ways to:
- Find unique pieces
- Reduce waste
- Save money
- Discover high-quality vintage items

## Take Care of What You Have

The most sustainable piece of clothing is the one already in your closet. Learn basic alterations, invest in good tailoring, and repair items instead of replacing them.

Building a sustainable wardrobe is a journey, not a destination. Start small, make conscious choices, and remember that every sustainable decision makes a difference.

*Ready to start your sustainable fashion journey? Explore our collection of ethically-made essentials.*
`,
    author: 'Emma Thompson',
    publishDate: '2024-03-15',
    readTime: '5 min read',
    image: '/api/placeholder/600/400',
    category: 'Sustainability',
    tags: ['sustainable fashion', 'eco-friendly', 'conscious shopping', 'wardrobe']
  },
  {
    id: '2',
    title: 'Spring Style Guide: Fresh Looks for the New Season',
    excerpt: 'Discover the hottest spring trends and learn how to incorporate them into your existing wardrobe.',
    content: `
# Spring Style Guide: Fresh Looks for the New Season

Spring is here, and it's time to refresh your wardrobe with the season's most exciting trends. This year is all about comfort meets style, with pieces that transition seamlessly from work to weekend.

## Color Palette of the Season

This spring, we're embracing:

### Soft Pastels
- **Sage green** - calming and versatile
- **Lavender** - adds a feminine touch
- **Butter yellow** - brings sunshine to any outfit
- **Powder pink** - classic and romantic

### Bold Brights
- **Coral** - energizing and flattering
- **Ocean blue** - refreshing and crisp
- **Emerald** - luxurious and striking

## Key Trends to Try

### 1. Oversized Blazers
The power blazer is back, but bigger and better. Style it:
- Over a fitted tee and jeans for casual chic
- With matching trousers for a modern suit look
- As a light jacket over summer dresses

### 2. Flowy Midi Dresses
Perfect for the transitional weather, midi dresses offer:
- Comfortable movement
- Versatile styling options
- Effortless elegance
- Easy care and wear

### 3. Wide-Leg Trousers
Say goodbye to skinny jeans and hello to:
- **Palazzo pants** for ultimate comfort
- **Cropped wide-legs** perfect with sneakers
- **High-waisted styles** that elongate the silhouette

### 4. Lightweight Knits
Spring knitwear should be:
- Breathable for layering
- Soft and comfortable
- Available in fresh spring colors
- Perfect for chilly mornings and air-conditioned offices

## Styling Tips for Spring

### Layer Like a Pro
Spring weather is unpredictable, so master the art of layering:
- Start with a basic tee
- Add a light cardigan or blazer
- Carry a versatile scarf for unexpected cold snaps

### Accessory Updates
Refresh your look with new accessories:
- **Straw hats** for sunny days
- **Canvas totes** for everyday use
- **Delicate jewelry** in gold and silver
- **Comfortable sneakers** in fresh colors

### Transition Your Winter Pieces
Don't pack away everything just yet:
- Wear boots with spring dresses
- Layer summer tops under jackets
- Mix textures for visual interest

## Shopping Smart This Season

### Investment Pieces
Focus on versatile items that will work all season:
- A great blazer in a neutral color
- Comfortable, well-fitting jeans
- A classic trench coat
- Quality basic tees in spring colors

### Trend Pieces
Have fun with affordable trend items:
- Statement earrings
- Colorful scarves
- Trendy sunglasses
- Fun, printed accessories

## Care Tips for Spring Fabrics

### Delicate Fabrics
Many spring fabrics need special care:
- Hand wash or use delicate cycle for silks and chiffons
- Air dry to prevent shrinking and fading
- Store carefully to prevent wrinkles

### Transitional Cleaning
- Dry clean wool blazers before storing
- Wash and store winter items properly
- Refresh spring items that have been in storage

## Building Your Spring Capsule

A perfect spring capsule includes:
- 2-3 basic tees in fresh colors
- 1 versatile blazer
- 1-2 pairs of comfortable pants
- 1 flowy dress for special occasions
- 1 lightweight cardigan for layering

Remember, spring fashion is about feeling fresh and renewed. Choose pieces that make you feel confident and comfortable as you step into the new season.

*Explore our spring collection to find your perfect seasonal pieces.*
`,
    author: 'Sofia Martinez',
    publishDate: '2024-03-08',
    readTime: '7 min read',
    image: '/api/placeholder/600/400',
    category: 'Style Guide',
    tags: ['spring fashion', 'trends', 'styling tips', 'seasonal']
  }
];

export const featuredPosts = blogPosts.slice(0, 2);