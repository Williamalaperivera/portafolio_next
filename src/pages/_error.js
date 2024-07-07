import Layout from "../components/Layout";

const _error = ({ statusCode }) => {
  return (
    <Layout title="Algo salió mal" footer={false}>
      <p className="text-center">
        {statusCode
          ? `No se han podido cargar sus datos de usuario: Código de estado ${statusCode}`
          : "Lo sentimos, no se pudo obtener esa página."}
      </p>
    </Layout>
  );
};

export default _error;