import Notice from "../components/notice";
import { useAuth0 } from "@auth0/auth0-react";
import Pages from "../components/pages";

const PagesPage = () => {
  const { isAuthenticated } = useAuth0();
  if (!isAuthenticated) {
    return (
      <Notice status="ERROR">
        <h4>🧐 You are not currently logged in.</h4>
        <p>Please try logging in above.</p>
      </Notice>
    )
  }
  return (
    <Pages />
  )
};

export default PagesPage;
