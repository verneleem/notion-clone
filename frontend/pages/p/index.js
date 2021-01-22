import { useEffect, useMemo, useRef, useState } from "react"
import { resetServerContext } from "react-beautiful-dnd";
import { useGetPageLazyQuery } from "../../lib/operations/types/operations"

import EditablePage from "../../components/editablePage/index";
import Notice from "../../components/notice";

const Page = () => {
  let pid = null
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    pid = urlParams.get('pid');
  }
  const defBlocks = [{id: 0, tag: "p"}]
  const [getPage,{data,loading,error,called}] = useGetPageLazyQuery();
  useEffect(()=>{
    if (pid) getPage({variables:{pageID: pid}})
  },[pid]);
  const blocks = useMemo(()=>{
    if (error) return defBlocks
    if (!called) return defBlocks
    if (loading) return defBlocks
    const blocks = data.getPage?.blocks ? JSON.parse(data.getPage.blocks) : []
    if (Array.isArray(blocks)) {
      if (blocks.length<1) return defBlocks
      return blocks.map(b=>{
        if (!b.id) {
          b.id = Math.random().toString(36);
        }
        return b
      })
    } else {
      return defBlocks
    }
  },[error,data,loading,called])
  const hasError = useMemo(()=>{
    if (error) return true
    return false
  },[error])
  if (loading) {
    return (
      <Notice status="INFO" dismissible={false}>
        <h3>Loading ⌛</h3>
      </Notice>
    );
  }
  if (!called) {
    return (
      <Notice status="INFO" dismissible={false} >
        <h3>Configuring ⚙️</h3>
      </Notice>
    );
  }
  return <EditablePage id={pid} fetchedBlocks={blocks} err={hasError}  />;
};

export default Page;
