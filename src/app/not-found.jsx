import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Page you are looking for does not exits.</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
