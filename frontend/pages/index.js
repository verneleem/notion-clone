import EditablePage from "../components/editablePage";
import { useAddPageMutation } from "../lib/operations/types/operations"
import { useAuth0 } from "@auth0/auth0-react"
import { useMemo, useEffect } from "react";

// If a user hits "/", we create a blank page and redirect to that page
// so that each user gets his/her personal space to test things

const IndexPage = () => {
  const blocks = [{ id: 0, tag: "p" }];
  let pid = null;
  const auth0 = useAuth0();
  const { user, isAuthenticated, getIdTokenClaims } = auth0;
  const [addPage, { data, error, called }] = useAddPageMutation()
  useEffect(()=>{
    if (!pid && !called) {
      addPage({
        variables: {
          page: {
            blocks: JSON.stringify(blocks),
            creator: isAuthenticated ? {
              email: user.email,
              name: user.name ? user.name : user.email,
              createdAt: new Date()
            } : null,
            createdAt: new Date()
          }
        }
      });
    }
  },[pid, called, isAuthenticated]);
  if (data?.addPage?.page?.[0]?.id) {
    const creator = data.addPage.page[0].creator
    const query = !creator ? "&public=true" : ""
    window.location.href = `/p/?pid=${data.addPage.page[0].id}${query}`;
  }
  const hasError = useMemo(()=>{
    if (error) {
      console.error(error)
      return true
    }
    return false
  },[error])
  return <EditablePage id={pid} fetchedBlocks={blocks} err={hasError} />;
};

export default IndexPage;
