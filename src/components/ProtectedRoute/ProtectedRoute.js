import { Navigate } from "react-router-dom";

function ProtectedRoute({ loggedIn, children }) {

  // if (!loggedIn) {
  //   return <Navigate to="/" replace />
  // }

  // return <>{children}</>

  return (<>
    {loggedIn ? <>{children}</> : <Navigate to="/" />}
    </>
  );
}

export default ProtectedRoute;