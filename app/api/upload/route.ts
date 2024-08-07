import { createPresignedPost } from '@aws-sdk/s3-presigned-post'
import { S3Client } from '@aws-sdk/client-s3'

export async function POST(request: Request) {
  try {
    const { filename, contentType } = await request.json()

    // Validate inputs
    if (!filename || !contentType) {
      return new Response(
        JSON.stringify({ error: 'Filename and contentType are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Generate object key
    const now = new Date().toISOString().replace(/[:.]/g, '-')
    const objectKey = `${filename}-${now}`

    // Create S3 client
    const client = new S3Client({ region: process.env.AWS_REGION })

    // Generate presigned post
    const { url, fields } = await createPresignedPost(client, {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: objectKey,
      Conditions: [
        ['content-length-range', 0, 10485760], // up to 10 MB
        ['starts-with', '$Content-Type', contentType],
      ],
      Fields: {
        acl: 'public-read',
        'Content-Type': contentType,
      },
      Expires: 600, // Seconds before the presigned post expires.
    })

    // Return the presigned URL and fields
    return new Response(
      JSON.stringify({ url, fields, objectKey }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error generating presigned URL:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
