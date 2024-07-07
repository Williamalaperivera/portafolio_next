import Layout from "../components/Layout";
import Error from "./_error";
import Link from "next/link";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout title="My Github" footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt="" style={{ width: "100%" }} />
            <p>{user.bio}</p>
            <Link
                href="/blog"
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              My Blog
              </Link>
            <a
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              Go to Github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Github.proptypes = {};

export async function getServerSideProps() {
  const res = await fetch(
    "https://api.github.com/users/Williamalaperivera"
  );
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode,
    },
  };
}
export default Github;