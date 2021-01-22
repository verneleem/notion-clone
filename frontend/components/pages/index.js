import React from "react"
import Card from "../card"
import { useGetPagesQuery } from "../../lib/operations/types/operations";
import Button from "../button";
import Notice from "../notice";
import { useDeletePageMutation } from "../../lib/operations/types/operations";
import updateCacheAfterDelete from "../../lib/updateCacheAfterDelete"

const Pages = () => {
  const {data, loading, error} = useGetPagesQuery();
  const [deletePage] = useDeletePageMutation({update: updateCacheAfterDelete})

  if (error) {
    return (
      <Notice status="ERROR">
        <h4>We're sorry, but an error has occurred.</h4>
      </Notice>
    )
  }
  if (loading) {
    return (
      <Notice status="INFO" dismissible={false}>
        <h3>Loading ⌛</h3>
      </Notice>
    );
  }
  const cards = data?.queryPage || []
  return (
    <>
      <h1 className="pageHeading">Pages</h1>
      <div id="pageList">
        {cards.length === 0 && (
          <Notice style={{ marginBottom: "2rem" }}>
            <h3>Let's go!</h3>
            <p>Seems like you haven't created any pages so far.</p>
            <p>How about starting now?</p>
          </Notice>
        )}
        {cards.map((page, key) => {
          const updatedAtDate = new Date(Date.parse(page.updatedAt ? page.updatedAt : page.createdAt));
          const pageId = page.id;
          const blocks = page.blocks ? JSON.parse(page.blocks) : [];
          return (
            <Card
              key={key}
              pageId={pageId}
              date={updatedAtDate}
              content={blocks}
              deleteCard={(pageId) => deletePage({ variables: { pageID: pageId } })}
            />
          );
        })}
      </div>
      <Button href="/">Create A New Page</Button>
    </>
  );
}

export default Pages