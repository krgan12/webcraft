'use client'

import Link from "next/link";
import About from "./About";
import { useRouter } from 'next/navigation'

export default function Page1() {
    const router = useRouter();
  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold mb-4">Professional Websites for Growing Businesses</h1>
      <p className="mb-6">We create custom websites tailored to your business needs. From design to deployment, we handle everything so you can focus on what you do best.</p>

      {/* <Link href="/page2"> */}
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition" onClick={() => router.push('/about')}>
          Go to Page 2
        </button>
        
      {/* </Link> */}
    </div>
  );
}
