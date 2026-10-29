import Home from "@/components/Home";
import { metaFor } from "@/lib/meta";

export const metadata = metaFor("en");
export default function Page() { return <Home lang="en" />; }
