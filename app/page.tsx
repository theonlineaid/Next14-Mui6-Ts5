import Image from "next/image";
import styles from "./page.module.css";
import BoxLayout, { BoxLayoutItem } from "./components/BoxLayout";
import BecomeAVendor from "./components/BecomeAVendor";



export default function Home() {
  const customLayout: BoxLayoutItem[] = [
    { i: "a", x: 0, y: 0, w: 10, h: 15 },
    { i: "b", x: 0, y: 0, w: 4, h: 3 },
    { i: "c", x: 0, y: 2, w: 3, h: 2 },
    // Add more items as needed
  ];
  return (
    <main className={styles.main}>
      {/* <BoxLayout layout={customLayout}  /> */}
      <BecomeAVendor />
    </main>
  );
}
