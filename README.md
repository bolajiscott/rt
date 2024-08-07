## Getting Started

First, install the required libraries:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## Configuration

Before running the application, make sure to set up the environment variables correctly. You need to create the `.env.local` file at the root of the project. Specifically, you need to configure the `NEXT_PUBLIC_BASE_URL` to point to the correct base URL of your application.

By default, the `.env.local` file might have the `NEXT_PUBLIC_BASE_URL` commented out, please uncomment it and set to `http://localhost:3000` for local development if you clone this repository:

```bash
NEXT_PUBLIC_AWS_ACCESS_KEY_ID=
NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY=
NEXT_PUBLIC_AWS_BUCKET_NAME=
NEXT_PUBLIC_AWS_REGION=
NEXT_PUBLIC_BASE_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

For deployment or if you want to run the application pointing to a live environment, you need to comment and update the NEXT_PUBLIC_BASE_URL to match your deployed application's URL in vercel.

## Database Migration and Security Policy

To enhance security and ensure users have access only to their images, follow these steps to migrate your database and set up Row Level Security (RLS) policies:

1. **Define RLS Policies**
    NOTE:- This is for `images` table, modify it to use the different tables and execute them in the sql editor of supabase.

   - Define the following RLS policies to control access to the `images` table:
     ```sql
     CREATE POLICY "Allow users to view their own images" ON images FOR SELECT USING (user_id = auth.uid());
     CREATE POLICY "Allow users to insert images" ON images FOR INSERT WITH CHECK (user_id = auth.uid());
     CREATE POLICY "Allow users to delete their own images" ON images FOR DELETE USING (user_id = auth.uid());
     ```

By following these steps, you ensure that each user can only access their images, enhancing the security and privacy of your application.