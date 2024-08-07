import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL and key are required.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Handler for POST requests
export async function POST(req: Request) {
  try {
    const { image_url, user_id } = await req.json();

    if (!user_id || !validateUUID(user_id)) {
      return new Response(JSON.stringify({ error: 'Invalid user ID.' }), {
        status: 400,
      });
    }

    const { data, error } = await supabase
      .from('images')
      .insert([{ image_url, user_id }]);

    if (error) {
      console.error('Supabase Insert Error:', error);
      return new Response(
        JSON.stringify({ error: 'Error saving image URL.' }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Request Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
    });
  }
}

// Handler for GET requests
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('images')
      .select('*')
      .order('upload_date', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Supabase Fetch Error:', error);
      return new Response(
        JSON.stringify({ error: 'Error fetching recent uploads.' }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error('Request Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error.' }), {
      status: 500,
    });
  }
}

// Function to validate UUID format
function validateUUID(uuid: string): boolean {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return regex.test(uuid);
}
