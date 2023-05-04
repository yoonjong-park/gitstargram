"use client";
import useSWR from "swr";

export default function FollowingBar() {
  const { data, isLading, error } = useSWR("/api/me");
  console.log("data", data);

  //  fetching 받은 것 Render
  // (image, username)

  return <div>FollowingBar</div>;
}
