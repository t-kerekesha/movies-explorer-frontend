import { useCallback, useEffect } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";


function ProtectedRoute({ loggedIn, children }) {
  const location = useLocation();
  // const navigate = useNavigate();

  // console.log(location.state)
  // if (!loggedIn) {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // } else {
  //   return children;
  // }


  // const render = useCallback(() => {
  //   return children;
  // });

  // useEffect(() => {
  //   console.log(loggedIn);
  //   if (loggedIn) {
  //     render();
  //   }
  // }, [loggedIn, render])

  // if (!loggedIn) {
  //   return <Navigate to="/" replace />
  // }


  // return (
  //   loggedIn ? children : navigate("/")
  // );

  return (
    loggedIn ? children : <Navigate to="/" replace />
  );


  // return children;

}

export default ProtectedRoute;