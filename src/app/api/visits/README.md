# Visit Counter API

## Overview
This API tracks the number of visits to your portfolio website.

## Endpoints

### GET `/api/visits`
Retrieves the current visit count.

**Response:**
```json
{
  "count": 1234,
  "success": true
}
```

### POST `/api/visits`
Increments the visit count by 1.

**Response:**
```json
{
  "count": 1235,
  "success": true,
  "message": "Visit counted"
}
```

## How It Works

1. **Client-side tracking**: Uses `sessionStorage` to prevent counting the same user multiple times in the same session
2. **Server-side storage**: Stores count in `data/visits.json` file
3. **Automatic increment**: When a user visits the site for the first time in a session, the count is incremented

## Production Considerations

For production deployment (e.g., on Vercel), consider:

1. **Use a database**: Replace file storage with:
   - Vercel KV (Redis)
   - MongoDB
   - Supabase
   - PlanetScale

2. **Rate limiting**: Implement proper rate limiting to prevent abuse

3. **Analytics**: Consider using Google Analytics or Vercel Analytics for more detailed tracking

## Example: Using Vercel KV

```typescript
import { kv } from '@vercel/kv';

export async function GET() {
  const count = await kv.get<number>('visits') || 0;
  return NextResponse.json({ count, success: true });
}

export async function POST() {
  const count = await kv.incr('visits');
  return NextResponse.json({ count, success: true });
}
```

