import { Navigate, useLocation } from "react-router-dom";


function ProtectedRoute({ loggedIn, children, onlyMainPage }) {
  const location = useLocation();

  if (loggedIn && onlyMainPage) {
    if (location.state) {
      const { from } = location.state;
      return <Navigate to={from} replace />
    } else {
      return children;
    }
  } else if (!loggedIn && !onlyMainPage) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}

export default ProtectedRoute;