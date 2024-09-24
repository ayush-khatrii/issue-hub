"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PROPS {
  initialPage: number;
  total: number;
}

const CustomPagination = ({ initialPage, total }: PROPS) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State to manage the current page, initialized with the initialPage
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    // Update the URL whenever the currentPage changes
    const params = new URLSearchParams(searchParams);
    params.set("page", currentPage.toString());
    router.push(`?${params.toString()}`);
  }, [currentPage, router, searchParams]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  if (initialPage < 1) return null;

  return (
    <Pagination
      variant="bordered"
      total={total}
      initialPage={initialPage}
      onChange={handlePageChange}
      showControls
    />
  );
};

export default CustomPagination;
