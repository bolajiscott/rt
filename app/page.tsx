// 'use client'

// export default function ProtectedPage() {
//   const [user, setUser] = useState(null);
//   const router = useRouter();

//   useEffect(() => {
//     const session = supabase.auth.session();
//     setUser(session?.user ?? null);

//     const { data: authListener } = supabase.auth.onAuthStateChange(
//       (_event, session) => {
//         setUser(session?.user ?? null);
//       }
//     );

//     if (!user) {
//       router.push('/login');
//     }

//     return () => {
//       authListener?.unsubscribe();
//     };
//   }, [user, router]);

//   if (!user) return null; // Optionally render a loading spinner

//   return <div>Protected Content</div>;
// }

// import { useState, useEffect } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
// import Layout from './layout'

// export default function Page() {
//   const [file, setFile] = useState<File | null>(null)
//   const [uploading, setUploading] = useState(false)
//   const [error, setError] = useState<string | null>(null)
//   const [darkMode, setDarkMode] = useState(false)
//   const [recentUploads, setRecentUploads] = useState<string[]>([])

//   const userId = '00000000-0000-0000-0000-000000000001' // remove this line too after implementing login page

//   useEffect(() => {
//     // Fetch function on the client side
//     async function fetchRecentUploads() {
//       try {
//         const response = await fetch('/api/recent-uploads');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json(); // Ensure the response is valid JSON
//         return data;
//       } catch (error) {
//         console.error('Error fetching recent uploads:', error);
//       }
//     }
//     fetchRecentUploads()
//   }, [])

// useEffect(() => {
//   if (darkMode) {
//     document.body.classList.add('dark')
//   } else {
//     document.body.classList.remove('dark')
//   }
// }, [darkMode])

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     if (!file) {
//       alert('Please select a file to upload.')
//       return
//     }

//     setUploading(true)
//     setError(null)

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`,
//         {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ filename: file.name, contentType: file.type }),
//         }
//       )

//       if (response.ok) {
//         const { url, fields, objectKey } = await response.json()

//         const formData = new FormData()
//         Object.entries(fields).forEach(([key, value]) => {
//           formData.append(key, value as string)
//         })
//         formData.append('file', file)

//         const uploadResponse = await fetch(url, {
//           method: 'POST',
//           body: formData,
//         })

//         if (uploadResponse.ok) {
//           // Save the image URL to Supabase
//           const imageUrl = `https://${process.env.NEXT_PUBLIC_AWS_BUCKET_NAME}.s3.${process.env.NEXT_PUBLIC_AWS_REGION}.amazonaws.com/${objectKey}`
//           const supabaseResponse = await fetch('/api/recent-uploads', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//               image_url: imageUrl,
//               user_id: userId, // Replace with actual user ID once implemented
//             }),
//           })

//           if (supabaseResponse.ok) {
//             alert('Upload successful!')
//             setRecentUploads([imageUrl, ...recentUploads])
//           } else {
//             const errorText = await supabaseResponse.text()
//             console.error('Supabase Save Error:', errorText)
//             setError('Failed to save image URL. Please try again.')
//           }
//         } else {
//           const errorText = await uploadResponse.text()
//           console.error('S3 Upload Error:', errorText)
//           setError('Upload failed. Please try again.')
//         }
//       } else {
//         const errorText = await response.text()
//         console.error('Failed to get pre-signed URL:', errorText)
//         setError('Failed to get pre-signed URL. Please try again.')
//       }
//     } catch (error) {
//       console.error('Upload Error:', error)
//       setError('An error occurred while uploading. Please try again.')
//     } finally {
//       setUploading(false)
//     }
//   }

//   return (
//     <Layout>
//       <header>
//         {/* <div className="nav">

// <button onClick={() => setDarkMode(!darkMode)}>
//   <FontAwesomeIcon icon={darkMode ? faMoon : faSun} />
// </button>
//         </div> */}
//         <div className="welcome-message">Welcome, User!</div>
//       </header>
//       <section className="content">
//         <div className="upload-card">
//           <form onSubmit={handleSubmit}>
//             <div className="upload-icon">☁️</div>
//             <div className="upload-text">Tap to upload images</div>
//             <input
//               id="file"
//               type="file"
//               onChange={(e) => {
//                 const files = e.target.files
//                 if (files) {
//                   setFile(files[0])
//                 }
//               }}
//               accept="image/png, image/jpeg"
//             />
//             <button type="submit" disabled={uploading}>
//               {uploading ? 'Uploading...' : 'Upload'}
//             </button>
//           </form>
//         </div>
//         <div className="recent-uploads">
//           <h2>Recent Uploads</h2>
//           <ul>
//             {recentUploads.map((upload, index) => (
//               <li key={index}>
//                 <img src={upload} alt={`Upload ${index}`} style={{ width: '100px', height: 'auto' }} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </section>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//     </Layout>
//   )
// }

'use client';

import Image from 'next/image';
import base from '../app/public/image-slider.png';
import { Input } from './reusables/Input';
import { Button } from './reusables/Button';
import { Navs } from './reusables/Navs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FormEvent, useState, useTransition } from 'react';
import { loginAction } from './helpers/auth';

export default function Page() {
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await loginAction(formData);

      if (result.error) {
        setError(result.error);
        setSuccess(false);
      } else {
        setError(null);
        setSuccess(true);
        // Redirect or update UI on successful login
      }
    });
  };

  return (
    <div>
      <Navs />
      <div className="flex flex-row  justify-center items-center h-[80vh] ">
        <div className="flex flex-row w-[100%] max-w-[100%] justify-center gap-[3rem] items-start">
          <Image
            src={base}
            alt="base"
            className="w-[100%] max-w-[50%] h-[50%]"
          />
          <div className="w-[100%] max-w-[50%]">
            <div className="flex flex-row items-center gap-1">
              <h1 className="font-[500] font-[Kanit] text-[24px] leading-[24px]">
                Login •{' '}
              </h1>
              <h2 className="font-[300] font-[Kanit] text-[16px] leading-[22px]">
                Don’t have an account?
              </h2>
              <span className="font-[400] font-[Kanit] underline underline-offset-3 text-[16px] leading-[22px]">
                {' '}
                <Link href="/signup">Sign up</Link>
              </span>
            </div>
            <p className="mt-4 text-[#808080] font-[Kanit] font-[300] text-[16px] leading-[22px] w-[26.875rem]">
              Submit more photos to unlock your creative potential with our
              photography community
            </p>
            <hr className="w-full my-[2.625rem]" />
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row gap-2 ">
                <Input
                  label="Email"
                  placeholder="Your email address"
                  type="email"
                  name="email"
                />
                <Input
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                />
              </div>
              <Button
                type="submit"
                buttonText={isPending ? 'Loading' : 'Get back in!'}
              />{' '}
            </form>
            <div className="flex flex-row items-center gap-1">
              <h2 className="font-[300] font-[Kanit] text-[16px] leading-[22px]">
                Forgot your password?
              </h2>
              <span className="font-[400] font-[Kanit] underline underline-offset-3 text-[16px] leading-[22px]">
                {' '}
                Reset it
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
