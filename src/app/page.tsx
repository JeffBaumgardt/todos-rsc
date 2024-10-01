import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-8 flex">
      <Link
        href="client"
        className="p-4 text-2xl underline underline-offset-4 decoration-sky-300 hover:decoration-sky-500 flex-auto"
      >
        Client Todo&apos;s
      </Link>
      <br />
      <Link
        href="rsc"
        className="p-4 text-2xl underline underline-offset-4 decoration-sky-300 hover:decoration-sky-500 flex-auto"
      >
        RSC Todo&apos;s
      </Link>
    </div>
  );
}
