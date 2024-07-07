import Link from "next/link";
import Layout from "../components/Layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        Esta página no existe. Regresa a <Link href="/">Home</Link>
      </p>
    </div>
  </Layout>
);

export default custom404;