import { useNavigate } from "react-router-dom";

// Higher-Order Component (HOC) to provide the `navigate` function
export function withRouter(Component: any) {
  function ComponentWithRouterProp(props: any) {
    let navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }

  return ComponentWithRouterProp;
}
