import Image from "next/image";

import Layout from "@/components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="relative w-full h-full">
        <Image
          src="/images/hero-section-background.png"
          alt="Unit Events"
          priority
          quality={100}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </Layout>
  );
}
