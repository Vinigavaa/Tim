import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-gray-400 mb-6">Página não encontrada</p>
        <Link to="/" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
