"use client";
import React from "react";

const useMedia = (media: string) => {
  const [match, setMatch] = React.useState<boolean>(false);

  const changeMatch = React.useCallback(() => {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
  }, [media]);

  React.useEffect(() => {
    changeMatch();
  }, [changeMatch]);
  React.useEffect(() => {
    window.addEventListener("resize", changeMatch);
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [changeMatch]);
  return match;
};

export default useMedia;
