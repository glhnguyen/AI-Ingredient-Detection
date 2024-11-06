import Image from "next/image";
import { Button } from "@/components/button";
import { Layout } from "@/components/layout/layout";
import { DetectIngredient } from "@/components/form/detect_ingredient";

export default function Home() {
  return (
    <Layout>
      <div className="flex justify-center">
        <Image
          src="/assets/fridge.jpg"
          width={500}
          height={500}
          alt="fridge"
        ></Image>
        <div>
          <h1> Fridge Ingredient Detector</h1>
          <DetectIngredient></DetectIngredient>
        </div>
      </div>
    </Layout>
  );
}
