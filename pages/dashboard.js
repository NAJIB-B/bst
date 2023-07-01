import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Dashboard from "@/components/dashboard/dashboard";
import Head from "next/head";

const DashboardPage = () => {
  const router = useRouter();
  const { loggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    loggedIn ? router.push("/dashboard") : router.push("/");
  }, []);
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
};

export default DashboardPage;
